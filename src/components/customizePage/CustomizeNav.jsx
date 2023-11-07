const CustomizeNav = ({ page, change }) => {
    const styles = { backgroundColor: "#7E60C4", color: "#fff" }

    return (
        <div className="button-group">
            <button className="button-items w-full" onClick={() => change("style")}
                style={page == "style" ? styles : null}>
                Picture Style
            </button>
            <button className="button-items w-full" onClick={() => change("random")}
                style={page == "random" ? styles : null}>
                Randomness
            </button>
            <button className="button-items w-full" onClick={() => change("info")}
                style={page == "info" ? styles : null}>
                Picture Info
            </button>
            <button className="button-items" onClick={() => change("setting")}
                style={page == "setting" ? styles : null}>
                <i class="fa-solid fa-gear"></i>
            </button>
        </div>
    );
}

export default CustomizeNav;