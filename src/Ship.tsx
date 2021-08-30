import { IShipData, IGalactapediaLink } from './DataService';
import Text from './Text';
function Ship({ ship }: { ship: IShipData }) {
    const style = {
        backgroundImage: `url(${ship.image})`
    }
    return <div className="ship">
        <a className="image" target="galactapedia" style={style} href={ship.url}></a>
        <div className="name row"><Text text={ship.name}></Text></div>
        <div className="legend row">Manufacturer</div>
        <div className="manufacturer row"><Text text={ship.manufacturer}></Text></div>
        <div className="legend row">Role</div>
        <div className="role row"><Text text={ship.role}></Text></div>
    </div>
}
export default Ship