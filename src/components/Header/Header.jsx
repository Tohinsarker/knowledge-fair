import profile from '../../assets/images/profile.png';


const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <h1>Knowledge Cafe</h1>
            <img src={profile} alt=""  />
            </div>
    );
};

export default Header;