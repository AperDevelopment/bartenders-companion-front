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
    }, [cocktail, open]);

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
        close();
    };

    const close = () => {
        setId(-1);
        setName('');
        setDescription('');
        setVolumeMl(0);
        setAlcoholic(false);
        setVegan(false);
        setHot(false);
        setIngredients([]);
        setInstructions([]);
        onClose();
    };

    const validateResults = () => {
        if (cocktail && id === -1) return false;
        if (name === '') return false;
        if (volume_ml === 0) return false;
        if (ingredients.length === 0) return false;
        if (instructions.length === 0) return false;
        return true;
    };

    const textFieldSx = {
        '& label': {
            color: 'var(--foreground-secondary)',
            fontFamily: 'inherit',
            '&.Mui-focused': {
                color: 'var(--foreground-accent)'
            }
        },
        '& .MuiFilledInput-root': {
            color: 'var(--foreground-primary)',
            fontFamily: 'inherit',
            '&::before': {
                borderColor: 'var(--foreground-secondary)'
            },
            '&::after': {
                borderColor: 'var(--foreground-accent)'
            },
            '&:hover::before': {
                borderColor: 'var(--foreground-secondary)'
            }
        }
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle sx={{ backgroundColor: 'var(--background-primary)', fontFamily: 'inherit' }}>{id !== -1 ? 'Edit' : 'Create'} cocktail</DialogTitle>
            <DialogContent sx={{ backgroundColor: 'var(--background-primary)' }}>
                <DialogContentText sx={{ color: 'var(--foreground-secondary)', fontFamily: 'inherit' }}>* Required field</DialogContentText>
                <Grid container spacing={2}>
                    <Grid xs={4} item>
                        <TextField
                            autoFocus
                            label="Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            variant="filled"
                            inputProps={{ maxLength: 255 }}
                            fullWidth
                            required
                            margin="normal"
                            sx={textFieldSx}
                        />
                        <TextField
                            label="Description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            variant="filled"
                            fullWidth
                            multiline
                            maxRows={5}
                            margin="normal"
                            sx={textFieldSx}
                        />
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
                            sx={textFieldSx}
                        />
                        <FormGroup>
                            <FormControlLabel
                                required
                                control={<Checkbox checked={is_alcoholic} onChange={(event) => setAlcoholic(event.target.checked)} />}
                                label="Contains alcohol"
                                sx={{ fontFamily: 'inherit' }}
                            />
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
            <DialogActions sx={{ backgroundColor: 'var(--background-primary)' }}>
                <Button onClick={close} sx={{ color: 'var(--foreground-primary)', fontFamily: 'inherit', '&:hover': { color: 'var(--foreground-accent)' } }}>
                    Cancel
                </Button>
                <Button onClick={confirm} sx={{ color: 'var(--foreground-primary)', fontFamily: 'inherit', '&:hover': { color: 'var(--foreground-accent)' } }}>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreationDialog;
