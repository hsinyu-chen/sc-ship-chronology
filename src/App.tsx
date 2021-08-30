import { useState } from 'react';
import './App.scss';
import query, { IShipData } from './DataService';
import { useEffect } from 'react';
import { useCallback } from 'react';
import YearShip from './YearShip';
type YearData = { year: string, ships: IShipData[] }
function App() {
  const [ships, setShips] = useState<YearData[]>([]);
  const fetchData = useCallback(async () => {
    const list = await query();
    const grouped: { [y: string]: IShipData[] } = {};
    for (const s of list) {
      const year = s.releaseDate ?? '?';
      if (!(year in grouped)) {
        grouped[year] = [];
      }
      grouped[year].push(s);
    }
    const yd = Object.keys(grouped).map(x => ({ year: x, ships: grouped[x] }));
    yd.sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10));
    for (const y of yd) {
      y.ships.sort((a, b) => (a.manufacturer ?? '').localeCompare(b.manufacturer ?? ''));
    }
    setShips(yd);
  }, []);
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className="App">
      {ships.map(x => (<YearShip key={x.year} year={x.year} ships={x.ships}></YearShip>))}
    </div>
  );
}

export default App;
