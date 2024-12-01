import Button from './button';
import Input from './input';
import { useAppDispatch } from '../hooks/redux';
import { movieSlice } from '../store/reducers/getMovie';

interface PropsSearch {
    setData: (value: string) => void;
    data: string;
    valueInp: string;
    setValueInp: (value: string) => void
}

export const Search: React.FC<PropsSearch> = ({ setData, valueInp, setValueInp }) => {
    const dispatch = useAppDispatch()

    const PushData = () => {
        setData(valueInp)

        dispatch(movieSlice.actions.nullItem())
    }
    return (
        <>
            <Input valueInp={valueInp} PushData={PushData} setValueInp={setValueInp} />
        </>
    );
};