"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Trash2 } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { SetStateAction, useState } from "react"

export default function Tasks() {
    const [itemsList, setItemsList] = useState([
        { id: 1, task: "exampletask" },
    ]);

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => {
        setInputValue(e.target.value);
    }

    const deleteTask = (taskId: number) => {
        const updatedItemsList = itemsList.filter((task) => task.id !== taskId);
        setItemsList(updatedItemsList);
    }

    const addTask = () => {
        if (!inputValue) return;
        const newTask = {
            id: itemsList.length + 1,
            task: inputValue
        };
        setItemsList([...itemsList, newTask]);
        setInputValue("");
    }

    return (
        <main>
            <ul>
                {itemsList.map((task) => (  
                        <li key={task.id} className="text-black flex items-center">
                            <Checkbox className="mr-2"/>
                            {task.task}
                            <Trash2 onClick={() => deleteTask(task.id)} 
                                className="ml-2 cursor-pointer" 
                                size={20}/>
                        </li>   
                ))}
            </ul>

            <DropdownMenu>
                <DropdownMenuTrigger className="mt-5" asChild>
                    <Button>Add task</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Task name</DropdownMenuLabel>
                    <input 
                        className="border border-gray-300 rounded-md p-2 mb-2"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <Button onClick={addTask}>Add</Button>
                </DropdownMenuContent>
            </DropdownMenu>
        </main>
    );
}