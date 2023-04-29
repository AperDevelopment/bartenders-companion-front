import { List, ListItem, ListItemButton, ListItemText, TextField } from '@mui/material';
import { useState } from 'react';

type Props = {
    values: string[];
    onItemAdded: (values: string[]) => void;
    label: string;
};

const VariableList = ({ values, onItemAdded, label }: Props) => {
    const [value, setValue] = useState('');

    const addItem = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== 'Enter') return;
        if (!value || /^\s*$/.test(value)) {
            setValue('');
            return;
        }
        onItemAdded([...values, value]);
        setValue('');
    };

    const deleteItem = (item: string) => onItemAdded(values.filter((value) => value !== item));

    const isEmpty = () => values.length === 0;
    const getPlaceholder = () => (isEmpty() ? 'You need at least one item' : '');

    return (
        <div style={{ height: '100%', paddingTop: '0.5em' }}>
            <TextField
                variant="filled"
                label={label}
                error={isEmpty()}
                placeholder={getPlaceholder()}
                required={isEmpty()}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={addItem}
                fullWidth
                margin="dense"
            />
            <List dense sx={{ maxHeight: '31vh', overflowY: 'scroll' }}>
                {values.map((value) => (
                    <ListItem disablePadding key={value}>
                        <ListItemButton onClick={() => deleteItem(value)}>
                            <ListItemText primary={value} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default VariableList;
