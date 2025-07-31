import "../../Pages/organization.css";

type InputFieldProps = {
    setInput: (input: string) => void,
    label: string,
    password?: boolean,
    email?: boolean,
    errorCode?: boolean,
    errorMessage?: any
}

const InputField: React.FC<InputFieldProps> = ({ setInput, label, password, email, errorCode, errorMessage }) => {
    return (
        <div className="inputContainer">
            <h3>{label}</h3>
            <div className={`inputField${errorCode ? " error" : ""}`}>
                <input
                    type={password ? "password" : email ? "email" : "text"}
                    placeholder={`Enter Your ${label}`}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            {errorCode && errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </div>
    )
}

const TextAreaField: React.FC<InputFieldProps> = ({ setInput, label, errorCode, errorMessage }) => {
    return (
        <div className="inputContainer">
            <h3>{label}</h3>
            <div className={`inputField${errorCode ? " error" : ""}`}>
                <textarea
                    placeholder={`Enter Your ${label}`}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            {errorCode && errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </div>
    );
};

export { TextAreaField };

export default InputField;