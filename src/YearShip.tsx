import { IShipData } from './DataService';
import ShipList from './ShipList';
function YearShip({ year, ships }: { year: string, ships: IShipData[] }) {
    return <div className="year-row" key={year}>
        <div className="year">
            {year}
        </div>
        <ShipList ships={ships}></ShipList>
    </div>;
}

export default YearShip;