const Footer = () => {
    return (
        <div className="bg-base-200 text-base-content py-10">
            <footer className="footer max-w-6xl mx-auto px-5 lg:px-0">
                <aside>
                    <img width="50" height="50" src="https://img.icons8.com/arcade/64/find-matching-job.png" alt="find-matching-job" />
                    <p>
                        Job Portal Ltd.
                        <br />
                        Providing reliable job since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;