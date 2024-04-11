import { Routes, Route } from "react-router-dom";
import { New } from '../pages/New';
import { Edit } from '../pages/Edit';
import { Home } from '../pages/home';
import { Dish } from '../pages/Dish';
import { Favorites } from '../pages/Favorites';

export function AppRoutes({ isAdmin }) {
  const commonProps = { isAdmin };

  return (
    <Routes>
      <Route path="/" element={<Home {...commonProps} />} />
      <Route path="/new" element={<New {...commonProps} />} />
      <Route path="/edit/:id" element={<Edit {...commonProps} />} />
      <Route path="/dish/:id" element={<Dish {...commonProps} />} />
      <Route path="/favorites" element={<Favorites {...commonProps} />} />
    </Routes>
  );
}
