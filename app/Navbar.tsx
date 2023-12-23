import Link from "next/link";

const Navbar = () => {
    return (
        <div className='flex p-5'>
            <Link href= '/' className="mr-5"> next.ts </Link>
            <Link href= '/users' className="mr-5"> Users </Link>
               
        </div>
    );
};

export default Navbar;