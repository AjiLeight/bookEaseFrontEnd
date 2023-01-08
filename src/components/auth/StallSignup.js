export default function StallSignUp(){
    return(
        <div className="card-body">
            <form>
                <label htmlFor="name" className="mb-2">Name</label>
                <input type="text" className="form-control align-self-start mb-2" id="name" required></input>
                <label htmlFor="email" className="mb-2">Email</label>
                <input type="text" className="form-control align-self-start mb-2" id="email" required></input>
                <label htmlFor="password" className="mb-2">Password</label>
                <input type="password" className="form-control align-self-start mb-2" id="password" required></input>
                <label htmlFor="addresss" className="mb-2">Address</label>
                <input type="text" className="form-control align-self-start mb-2" id="addresss" required></input>
                <label htmlFor="district" className="mb-2">District</label>
                <input type="text" className="form-control align-self-start mb-2" id="district" required></input>
                <label htmlFor="city" className="mb-2">City</label>
                <input type="text" className="form-control align-self-start mb-2" id="city" required></input>
                <label htmlFor="phone" className="mb-2">Phone</label>
                <input type="text" className="form-control align-self-start mb-2" id="phone" required></input>
                <button className='btn btn-outline-primary mt-2'>SignUp</button>
            </form>
        </div>
        );
}