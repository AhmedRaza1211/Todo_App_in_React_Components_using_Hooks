const InputCom = ({ onChg, plHdl, tp, inpVal}) => {

    return (
        <input 
            onChange={(e) => onChg(e.target.value)}
            placeholder={plHdl}
            value={inpVal}
            type={tp}
        />
    )
}

export default InputCom;