
const HrDetails = ({ hr_email, hr_name }) => {
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="bg-indigo-500 p-5 text-white rounded-xl">
                    <h2 className=" font-bold text-lg">Name: {hr_name}</h2>
                    <p className="pt-1">Email: {hr_email}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-error text-white btn-sm">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default HrDetails;