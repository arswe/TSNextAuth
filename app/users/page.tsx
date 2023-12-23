interface User {
    id: number;
    name: string;
}


const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{
        cache: 'no-store',
    })
    const users: User[] = await res.json()
    return (
        <>
        <h1>Userlist</h1>
        <p>{new Date().toLocaleTimeString()}</p>
            <ol>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ol>
        </>
    );
};

export default UsersPage;
