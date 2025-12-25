import React, { useState } from "react";
import Textbox from "./Textbox";
import Stack, {FixedStack} from "./Stack";
import Button from "./Button";

export interface SearchData {
    displayValue: string,
    sumbitData: any,
}

interface Props {
    data: Array<SearchData>,
    placeholder: string,
    prompt: string,
}

function searchMatch(item: SearchData, searchTerm: string): boolean {
    const strippedTerm = searchTerm.trim().toLowerCase();
    return strippedTerm === "" || item.displayValue.toLowerCase().includes(strippedTerm);
}

const Search: React.FC<Props> = ({
    data,
    placeholder,
    prompt,
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <FixedStack>
            <Textbox
                name="searchbox"
                placeholder={placeholder}
                label={prompt}
                onChange={e => setSearchTerm(e.target.value)}
                />
            <Stack>
                {data.filter((item) => (searchMatch(item, searchTerm))).map((item, i) => {
                    return (
                        <Button key={i}
                            onClick={() => console.log(item.sumbitData)}
                        >{item.displayValue}</Button>
                    );
                })}
            </Stack>
        </FixedStack>
    );
}

export default Search;