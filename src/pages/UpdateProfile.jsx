import { Helmet } from "react-helmet-async";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [originalName, setOriginalName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [originalPhotoURL, setOriginalPhotoURL] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setName(user.displayName || "");
        setOriginalName(user.displayName || "");
        setPhotoURL(user.photoURL || "");
        setOriginalPhotoURL(user.photoURL || "");
    }, [user]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhotoURLChange = (e) => {
        setPhotoURL(e.target.value);
    };

    const handleEdit = () => {
        setOriginalName(name);
        setOriginalPhotoURL(photoURL);
        setEditMode(true);
    };

    const handleCancelEdit = () => {
        setName(originalName);
        setPhotoURL(originalPhotoURL);
        setEditMode(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateUserProfile( name, photoURL );
            setOriginalName(name);
            setOriginalPhotoURL(photoURL);
            setEditMode(false);
            setName(name); 
            setPhotoURL(photoURL); 
        } catch (error) {
            console.error("Error updating user profile:", error);
        } finally {
            setLoading(false); 
            setEditMode(true); 
        }
    };
    
    

    return (
        <div className="container flex justify-center items-center">
            <Helmet>
                <title>WanderInn|UpdateProfile</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar flex justify-between">
                        <div className="w-28 rounded-full">
                            <img alt="image" src={user?.photoURL || "https://i.ibb.co/sVJ3S81/cat-551554-1280.jpg"} />
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={handleNameChange}
                                    placeholder="Enter your full name"
                                    className="input input-bordered"
                                    disabled={!editMode}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    value={user.email}
                                    className="input input-bordered"
                                    disabled
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    value={photoURL}
                                    onChange={handlePhotoURLChange}
                                    placeholder="Enter your photo URL"
                                    className="input input-bordered"
                                    disabled={!editMode}
                                />
                            </div>
                            <div className="form-control mt-6">
                                {editMode ? (
                                    <>
                                        <button className="btn my-3 bg-[#f95959] text-white" onClick={handleSubmit} disabled={loading}>Update</button>
                                        <button className="btn my-3 bg-[#d36e6e] text-white ml-2" onClick={handleCancelEdit}>Cancel</button>
                                    </>
                                ) : (
                                    <button className="btn bg-[#f95959] text-white" onClick={handleEdit}>Edit</button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;