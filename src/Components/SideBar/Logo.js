import logo from './../../Assets/Icons/Logo.png';

function Logo(){
    return(
        <div className='flex justify-center items-center h-20 '>
            <img src={logo} alt=""  />
            <h1 className='w-1/2 float-left self-center text-4xl ml-4' >YUGI</h1>
        </div>
    )
}
export default Logo;