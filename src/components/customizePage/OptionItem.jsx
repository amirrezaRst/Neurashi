const OptionItem = ({ checked, change, title, description }) => {
    const styles = { color: "#fff", borderColor: "#8368c4", background: "#8368c4" };
    // const styles = { color: "#fff", borderColor: "#3774b2", background: "#3774b2" };



    return (
        <div className="option-item shadow-sm" onClick={() => change(title)} style={checked ? { borderColor: "#8368c4" } : null}>
            <div>
                <div className="checkmark-icon" style={checked ? styles : null}>
                    {checked ? <i className="fas fa-check"></i> : null}
                </div>
            </div>
            <div className="option-title">
                <p>{title}</p>
                <span>{description}</span>
            </div>
        </div>
    );
}

export default OptionItem;