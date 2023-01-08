export default function UserSignup(){
    return(
    <div className="card-body">
        <form>
            <label htmlFor="name" className="mb-2">Name</label>
            <input type="text" className="form-control align-self-start mb-2" id="name" required></input>
            <label htmlFor="email" className="mb-2">Email</label>
            <input type="text" className="form-control align-self-start mb-2" id="email" required></input>
            <label htmlFor="password" className="mb-2">Password</label>
            <input type="text" className="form-control align-self-start mb-2" id="password" required></input>
            <button className='btn btn-outline-primary mt-2'>SignUp</button>
        </form>
    </div>
    );
}