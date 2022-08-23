export default function Menu () {
    return (
        <menu className="sidebar__menu">
            <a className="link" target="_blank" href="https://github.com/ansuleymanova/variance-my-beloved">
                <div className="icon icon_type_sigma"></div>
                <p className="link__text">VMB на Github</p>
            </a>
            <a className="link" target="_blank" href="https://github.com/ansuleymanova">
                <div className="icon icon_type_github"></div>
                <p className="link__text">Я на Github</p>
            </a>
            <a className="link" target="_blank" href="https://scholar.google.com/citations?&user=IxNO5GEAAAAJ">
                <div className="icon icon_type_gs"></div>
                <p className="link__text">Я в Google Scholar</p>
            </a>
        </menu>
    )
}