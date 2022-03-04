const ButtonCom = ({stl, btnTxt, btnFunc}) => {

    return <button style={stl} onClick={btnFunc} > {btnTxt} </button>
}

export default ButtonCom;