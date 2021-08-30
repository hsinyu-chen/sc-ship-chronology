import { useState, useEffect } from "react";
import query from "./DataService";
import Ship from "./Ship";
import { IShipData } from './DataService';

function ShipList({ ships }: { ships: IShipData[] }) {
    return <div className="ship-list">
        {ships?.map((x: any) => <Ship key={x.id} ship={x}></Ship>)}
    </div>
}

export default ShipList;