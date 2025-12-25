import React, { useState } from "react";
import Textbox from "./Textbox";
import Stack, {FixedStack} from "./Stack";
import {SelectButton} from "./Button";

export interface SearchData {
    displayValue: string,
    submitData: any,
}

interface Props {
    data: Array<SearchData>,
    placeholder: string,
    prompt: string,
}

function searchMatch(item: SearchData | undefined, searchTerm: string): boolean {
    if (item === undefined) {
        return true;
    }
    const strippedTerm = searchTerm.trim().toLowerCase();
    return strippedTerm === "" || item.displayValue.toLowerCase().includes(strippedTerm);
}

const Search: React.FC<Props> = ({
    data,
    placeholder,
    prompt,
}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const [selectedItem, setSelectedItem] = useState<SearchData | undefined>();
    return (
        <FixedStack>
            <Textbox
                name="searchbox"
                placeholder={placeholder}
                label={prompt}
                onChange={e => {
                    setSearchTerm(e.target.value);
                    if (!searchMatch(selectedItem, e.target.value)) {
                        setSelectedItem(undefined);
                    }
                }}
                />
            <Stack>
                {data.filter((item) => (searchMatch(item, searchTerm))).map((item, i) => {
                    return (
                        <SelectButton key={i} selected={selectedItem === item}
                            onClick={() => setSelectedItem(item)}
                        >{item.displayValue}</SelectButton>
                    );
                })}
            </Stack>
        </FixedStack>
    );
}

export default Search;