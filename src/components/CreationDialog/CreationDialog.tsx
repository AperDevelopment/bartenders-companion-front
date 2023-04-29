import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, Grid, TextField } from '@mui/material';
import CocktailModel from '../../model/cocktail';
import { useEffect, useState } from 'react';
import VariableList from '../VariableList';

type Props = {
    open: boolean;
    onConfirm: (c: CocktailModel) => void;
    onClose: () => void;
    cocktail?: CocktailModel;
};

const CreationDialog = ({ open, onConfirm, onClose, cocktail = undefined }: Props) => {
    const [id, setId] = useState(-1);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [volume_ml, setVolumeMl] = useState(0);
    const [is_alcoholic, setAlcoholic] = useState(false);
    const [is_vegan, setVegan] = useState(false);
    const [is_hot, setHot] = useState(false);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [instructions, setInstructions] = useState<string[]>([]);

    useEffect(() => {
        if (cocktail) {
            setId(cocktail.id);
            setName(cocktail.name);
            setDescription(cocktail.description);
            setVolumeMl(cocktail.volume_ml);
            setAlcoholic(cocktail.is_alcoholic);
            setVegan(cocktail.is_vegan);
            setHot(cocktail.is_hot);
            setIngredients(cocktail.ingredients);
            setInstructions(cocktail.instructions);
        }
    }, [cocktail]);

    const confirm = () => {
        if (!validateResults()) return;
        const c = new CocktailModel({
            id,
            name,
            description,
            volume_ml,
            is_alcoholic,
            is_vegan,
            is_hot,
            ingredients,
            instructions
        });

        onConfirm(c);
        onClose();
    };

    const validateResults = () => {
        if (id === -1) return false;
        if (name === '') return false;
        if (description === '') return false;
        if (volume_ml === 0) return false;
        if (ingredients.length === 0) return false;
        if (instructions.length === 0) return false;
        return true;
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>{id !== -1 ? 'Edit' : 'Create'} cocktail</DialogTitle>
            <DialogContent>
                <DialogContentText>* Required field</DialogContentText>
                <Grid container spacing={2}>
                    <Grid xs={4} item>
                        <TextField label="Name" value={name} onChange={(event) => setName(event.target.value)} variant="filled" inputProps={{ maxLength: 255 }} fullWidth required margin="normal" />
                        <TextField label="Description" value={description} onChange={(event) => setDescription(event.target.value)} variant="filled" fullWidth multiline margin="normal" />
                        <TextField
                            margin="normal"
                            label="Volume (mL)"
                            value={volume_ml}
                            error={volume_ml === 0}
                            onChange={(event) => setVolumeMl(Number(event.target.value))}
                            variant="filled"
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            fullWidth
                            required
                        />
                        <FormGroup>
                            <FormControlLabel required control={<Checkbox checked={is_alcoholic} onChange={(event) => setAlcoholic(event.target.checked)} />} label="Contains alcohol" />
                            <FormControlLabel required control={<Checkbox checked={is_vegan} onChange={(event) => setVegan(event.target.checked)} />} label="Suitable for vegans" />
                            <FormControlLabel required control={<Checkbox checked={is_hot} onChange={(event) => setHot(event.target.checked)} />} label="Is served hot" />
                        </FormGroup>
                    </Grid>
                    <Grid xs={4} item>
                        <VariableList values={ingredients} onItemAdded={setIngredients} label="Ingredients" />
                    </Grid>
                    <Grid xs={4} item>
                        <VariableList values={instructions} onItemAdded={setInstructions} label="Instructions" />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={confirm}>Confirm</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreationDialog;
