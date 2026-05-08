import type { Vehicle } from '../types';

export const VEHICLES: Vehicle[] = [
  // Toyota
  { make: 'Toyota', model: 'Yaris', yearRange: '2020–2024', fuelType: 'petrol', consumption: 4.8 },
  { make: 'Toyota', model: 'Yaris Cross', yearRange: '2021–2024', fuelType: 'hybrid', consumption: 4.2 },
  { make: 'Toyota', model: 'Corolla Sedan', yearRange: '2019–2024', fuelType: 'petrol', consumption: 6.0 },
  { make: 'Toyota', model: 'Corolla Hatch', yearRange: '2019–2024', fuelType: 'petrol', consumption: 5.8 },
  { make: 'Toyota', model: 'Corolla Hybrid', yearRange: '2019–2024', fuelType: 'hybrid', consumption: 4.2 },
  { make: 'Toyota', model: 'Camry', yearRange: '2018–2024', fuelType: 'petrol', consumption: 7.2 },
  { make: 'Toyota', model: 'Camry Hybrid', yearRange: '2018–2024', fuelType: 'hybrid', consumption: 4.7 },
  { make: 'Toyota', model: 'C-HR', yearRange: '2017–2024', fuelType: 'petrol', consumption: 7.2 },
  { make: 'Toyota', model: 'C-HR Hybrid', yearRange: '2020–2024', fuelType: 'hybrid', consumption: 5.0 },
  { make: 'Toyota', model: 'RAV4', yearRange: '2019–2024', fuelType: 'petrol', consumption: 7.4 },
  { make: 'Toyota', model: 'RAV4 Hybrid', yearRange: '2019–2024', fuelType: 'hybrid', consumption: 5.0 },
  { make: 'Toyota', model: 'Kluger', yearRange: '2014–2020', fuelType: 'petrol', consumption: 9.5 },
  { make: 'Toyota', model: 'Kluger', yearRange: '2021–2024', fuelType: 'petrol', consumption: 8.9 },
  { make: 'Toyota', model: 'Kluger Hybrid', yearRange: '2021–2024', fuelType: 'hybrid', consumption: 6.0 },
  { make: 'Toyota', model: 'HiLux 4x2', yearRange: '2015–2024', fuelType: 'diesel', consumption: 7.5 },
  { make: 'Toyota', model: 'HiLux 4x4', yearRange: '2015–2024', fuelType: 'diesel', consumption: 8.9 },
  { make: 'Toyota', model: 'Fortuner', yearRange: '2015–2024', fuelType: 'diesel', consumption: 8.4 },
  { make: 'Toyota', model: 'Prado 150', yearRange: '2009–2024', fuelType: 'diesel', consumption: 9.4 },
  { make: 'Toyota', model: 'LandCruiser 200', yearRange: '2007–2021', fuelType: 'petrol', consumption: 13.5 },
  { make: 'Toyota', model: 'LandCruiser 300', yearRange: '2021–2024', fuelType: 'petrol', consumption: 10.7 },
  { make: 'Toyota', model: 'LandCruiser 70 Series', yearRange: '2007–2024', fuelType: 'diesel', consumption: 11.0 },
  { make: 'Toyota', model: 'Tarago', yearRange: '2006–2019', fuelType: 'petrol', consumption: 11.2 },
  { make: 'Toyota', model: 'Alphard', yearRange: '2015–2024', fuelType: 'hybrid', consumption: 6.6 },

  // Mazda
  { make: 'Mazda', model: 'Mazda2', yearRange: '2015–2024', fuelType: 'petrol', consumption: 5.2 },
  { make: 'Mazda', model: 'Mazda3 Sedan', yearRange: '2019–2024', fuelType: 'petrol', consumption: 6.0 },
  { make: 'Mazda', model: 'Mazda3 Hatch', yearRange: '2019–2024', fuelType: 'petrol', consumption: 6.0 },
  { make: 'Mazda', model: 'Mazda6', yearRange: '2013–2023', fuelType: 'petrol', consumption: 6.5 },
  { make: 'Mazda', model: 'CX-3', yearRange: '2015–2024', fuelType: 'petrol', consumption: 6.2 },
  { make: 'Mazda', model: 'CX-30', yearRange: '2019–2024', fuelType: 'petrol', consumption: 6.4 },
  { make: 'Mazda', model: 'CX-5 Petrol', yearRange: '2017–2024', fuelType: 'petrol', consumption: 6.7 },
  { make: 'Mazda', model: 'CX-5 Diesel', yearRange: '2017–2024', fuelType: 'diesel', consumption: 5.5 },
  { make: 'Mazda', model: 'CX-8 Petrol', yearRange: '2018–2024', fuelType: 'petrol', consumption: 7.5 },
  { make: 'Mazda', model: 'CX-8 Diesel', yearRange: '2018–2024', fuelType: 'diesel', consumption: 5.8 },
  { make: 'Mazda', model: 'CX-9', yearRange: '2016–2023', fuelType: 'petrol', consumption: 9.2 },
  { make: 'Mazda', model: 'MX-5', yearRange: '2015–2024', fuelType: 'petrol', consumption: 6.8 },

  // Hyundai
  { make: 'Hyundai', model: 'i20', yearRange: '2021–2024', fuelType: 'petrol', consumption: 5.5 },
  { make: 'Hyundai', model: 'i30 Hatch', yearRange: '2017–2024', fuelType: 'petrol', consumption: 6.2 },
  { make: 'Hyundai', model: 'i30 Sedan', yearRange: '2017–2024', fuelType: 'petrol', consumption: 6.4 },
  { make: 'Hyundai', model: 'i30 N', yearRange: '2018–2024', fuelType: 'petrol', consumption: 8.0 },
  { make: 'Hyundai', model: 'Venue', yearRange: '2019–2024', fuelType: 'petrol', consumption: 6.5 },
  { make: 'Hyundai', model: 'Kona', yearRange: '2017–2024', fuelType: 'petrol', consumption: 6.5 },
  { make: 'Hyundai', model: 'Tucson', yearRange: '2020–2024', fuelType: 'petrol', consumption: 7.3 },
  { make: 'Hyundai', model: 'Tucson Hybrid', yearRange: '2021–2024', fuelType: 'hybrid', consumption: 6.0 },
  { make: 'Hyundai', model: 'Santa Fe', yearRange: '2018–2024', fuelType: 'petrol', consumption: 9.5 },
  { make: 'Hyundai', model: 'Santa Fe Hybrid', yearRange: '2022–2024', fuelType: 'hybrid', consumption: 6.9 },
  { make: 'Hyundai', model: 'Staria', yearRange: '2021–2024', fuelType: 'petrol', consumption: 9.8 },

  // Kia
  { make: 'Kia', model: 'Picanto', yearRange: '2017–2024', fuelType: 'petrol', consumption: 5.0 },
  { make: 'Kia', model: 'Rio', yearRange: '2017–2024', fuelType: 'petrol', consumption: 5.5 },
  { make: 'Kia', model: 'Cerato', yearRange: '2019–2024', fuelType: 'petrol', consumption: 7.0 },
  { make: 'Kia', model: 'Sportage', yearRange: '2021–2024', fuelType: 'petrol', consumption: 7.4 },
  { make: 'Kia', model: 'Sportage Hybrid', yearRange: '2022–2024', fuelType: 'hybrid', consumption: 5.6 },
  { make: 'Kia', model: 'Sorento', yearRange: '2020–2024', fuelType: 'petrol', consumption: 8.5 },
  { make: 'Kia', model: 'Sorento Hybrid', yearRange: '2021–2024', fuelType: 'hybrid', consumption: 6.0 },
  { make: 'Kia', model: 'Carnival', yearRange: '2020–2024', fuelType: 'petrol', consumption: 10.0 },
  { make: 'Kia', model: 'Stinger', yearRange: '2018–2023', fuelType: 'petrol', consumption: 11.2 },

  // Ford
  { make: 'Ford', model: 'Ranger XLS 4x2', yearRange: '2011–2024', fuelType: 'diesel', consumption: 7.5 },
  { make: 'Ford', model: 'Ranger Wildtrak 4x4', yearRange: '2011–2024', fuelType: 'diesel', consumption: 8.9 },
  { make: 'Ford', model: 'Ranger Raptor', yearRange: '2018–2024', fuelType: 'diesel', consumption: 10.5 },
  { make: 'Ford', model: 'Everest', yearRange: '2015–2024', fuelType: 'diesel', consumption: 8.1 },
  { make: 'Ford', model: 'Escape', yearRange: '2020–2024', fuelType: 'petrol', consumption: 7.3 },
  { make: 'Ford', model: 'Mustang 2.3T', yearRange: '2015–2024', fuelType: 'petrol', consumption: 9.8 },
  { make: 'Ford', model: 'Mustang GT 5.0', yearRange: '2015–2024', fuelType: 'petrol', consumption: 13.5 },

  // Mitsubishi
  { make: 'Mitsubishi', model: 'Mirage', yearRange: '2012–2024', fuelType: 'petrol', consumption: 5.2 },
  { make: 'Mitsubishi', model: 'ASX', yearRange: '2010–2024', fuelType: 'petrol', consumption: 6.6 },
  { make: 'Mitsubishi', model: 'Eclipse Cross', yearRange: '2017–2024', fuelType: 'petrol', consumption: 7.2 },
  { make: 'Mitsubishi', model: 'Eclipse Cross PHEV', yearRange: '2021–2024', fuelType: 'hybrid', consumption: 1.9 },
  { make: 'Mitsubishi', model: 'Outlander', yearRange: '2021–2024', fuelType: 'petrol', consumption: 7.1 },
  { make: 'Mitsubishi', model: 'Outlander PHEV', yearRange: '2013–2024', fuelType: 'hybrid', consumption: 1.9 },
  { make: 'Mitsubishi', model: 'Pajero Sport', yearRange: '2016–2024', fuelType: 'diesel', consumption: 8.4 },
  { make: 'Mitsubishi', model: 'Triton 4x2', yearRange: '2015–2024', fuelType: 'diesel', consumption: 7.2 },
  { make: 'Mitsubishi', model: 'Triton 4x4', yearRange: '2015–2024', fuelType: 'diesel', consumption: 7.8 },

  // Nissan
  { make: 'Nissan', model: 'Micra', yearRange: '2017–2024', fuelType: 'petrol', consumption: 5.5 },
  { make: 'Nissan', model: 'Qashqai', yearRange: '2021–2024', fuelType: 'petrol', consumption: 6.9 },
  { make: 'Nissan', model: 'X-Trail', yearRange: '2022–2024', fuelType: 'petrol', consumption: 6.6 },
  { make: 'Nissan', model: 'X-Trail e-Power', yearRange: '2023–2024', fuelType: 'hybrid', consumption: 5.8 },
  { make: 'Nissan', model: 'Navara 4x2', yearRange: '2015–2024', fuelType: 'diesel', consumption: 7.5 },
  { make: 'Nissan', model: 'Navara 4x4', yearRange: '2015–2024', fuelType: 'diesel', consumption: 8.1 },
  { make: 'Nissan', model: 'Patrol Y62', yearRange: '2012–2024', fuelType: 'petrol', consumption: 13.5 },
  { make: 'Nissan', model: 'Pathfinder', yearRange: '2013–2024', fuelType: 'petrol', consumption: 9.8 },

  // Honda
  { make: 'Honda', model: 'Jazz', yearRange: '2020–2024', fuelType: 'hybrid', consumption: 4.5 },
  { make: 'Honda', model: 'HR-V', yearRange: '2021–2024', fuelType: 'petrol', consumption: 6.4 },
  { make: 'Honda', model: 'ZR-V', yearRange: '2023–2024', fuelType: 'petrol', consumption: 6.6 },
  { make: 'Honda', model: 'CR-V', yearRange: '2017–2024', fuelType: 'petrol', consumption: 7.2 },
  { make: 'Honda', model: 'CR-V e:HEV', yearRange: '2023–2024', fuelType: 'hybrid', consumption: 5.0 },
  { make: 'Honda', model: 'Civic', yearRange: '2021–2024', fuelType: 'petrol', consumption: 6.5 },
  { make: 'Honda', model: 'Accord', yearRange: '2015–2020', fuelType: 'petrol', consumption: 7.6 },
  { make: 'Honda', model: 'Odyssey', yearRange: '2014–2021', fuelType: 'petrol', consumption: 9.0 },

  // Volkswagen
  { make: 'Volkswagen', model: 'Polo', yearRange: '2018–2024', fuelType: 'petrol', consumption: 5.2 },
  { make: 'Volkswagen', model: 'Golf', yearRange: '2020–2024', fuelType: 'petrol', consumption: 5.4 },
  { make: 'Volkswagen', model: 'Golf GTI', yearRange: '2021–2024', fuelType: 'petrol', consumption: 7.3 },
  { make: 'Volkswagen', model: 'Golf R', yearRange: '2021–2024', fuelType: 'petrol', consumption: 8.0 },
  { make: 'Volkswagen', model: 'Tiguan', yearRange: '2016–2024', fuelType: 'petrol', consumption: 6.9 },
  { make: 'Volkswagen', model: 'T-Roc', yearRange: '2019–2024', fuelType: 'petrol', consumption: 6.5 },
  { make: 'Volkswagen', model: 'Passat', yearRange: '2016–2024', fuelType: 'petrol', consumption: 6.3 },
  { make: 'Volkswagen', model: 'Touareg', yearRange: '2018–2024', fuelType: 'diesel', consumption: 7.4 },
  { make: 'Volkswagen', model: 'Amarok V6', yearRange: '2017–2022', fuelType: 'diesel', consumption: 8.3 },
  { make: 'Volkswagen', model: 'Amarok V6 (NMS)', yearRange: '2023–2024', fuelType: 'diesel', consumption: 9.0 },

  // Subaru
  { make: 'Subaru', model: 'Impreza', yearRange: '2017–2024', fuelType: 'petrol', consumption: 6.2 },
  { make: 'Subaru', model: 'XV / Crosstrek', yearRange: '2017–2024', fuelType: 'petrol', consumption: 7.1 },
  { make: 'Subaru', model: 'Forester', yearRange: '2018–2024', fuelType: 'petrol', consumption: 6.8 },
  { make: 'Subaru', model: 'Outback', yearRange: '2020–2024', fuelType: 'petrol', consumption: 7.1 },
  { make: 'Subaru', model: 'WRX', yearRange: '2022–2024', fuelType: 'petrol', consumption: 9.1 },
  { make: 'Subaru', model: 'BRZ', yearRange: '2021–2024', fuelType: 'petrol', consumption: 8.4 },

  // Mercedes-Benz
  { make: 'Mercedes-Benz', model: 'A-Class', yearRange: '2018–2024', fuelType: 'petrol', consumption: 6.9 },
  { make: 'Mercedes-Benz', model: 'C-Class', yearRange: '2021–2024', fuelType: 'petrol', consumption: 7.4 },
  { make: 'Mercedes-Benz', model: 'E-Class', yearRange: '2016–2024', fuelType: 'petrol', consumption: 7.6 },
  { make: 'Mercedes-Benz', model: 'GLA', yearRange: '2020–2024', fuelType: 'petrol', consumption: 7.2 },
  { make: 'Mercedes-Benz', model: 'GLC', yearRange: '2022–2024', fuelType: 'petrol', consumption: 8.0 },
  { make: 'Mercedes-Benz', model: 'GLE', yearRange: '2019–2024', fuelType: 'petrol', consumption: 9.4 },
  { make: 'Mercedes-Benz', model: 'Sprinter', yearRange: '2018–2024', fuelType: 'diesel', consumption: 10.5 },

  // BMW
  { make: 'BMW', model: '1 Series', yearRange: '2019–2024', fuelType: 'petrol', consumption: 6.4 },
  { make: 'BMW', model: '2 Series', yearRange: '2021–2024', fuelType: 'petrol', consumption: 6.8 },
  { make: 'BMW', model: '3 Series', yearRange: '2019–2024', fuelType: 'petrol', consumption: 7.1 },
  { make: 'BMW', model: '5 Series', yearRange: '2017–2024', fuelType: 'petrol', consumption: 6.9 },
  { make: 'BMW', model: 'X1', yearRange: '2022–2024', fuelType: 'petrol', consumption: 6.8 },
  { make: 'BMW', model: 'X3', yearRange: '2017–2024', fuelType: 'petrol', consumption: 7.4 },
  { make: 'BMW', model: 'X5', yearRange: '2019–2024', fuelType: 'petrol', consumption: 9.5 },
  { make: 'BMW', model: 'M3', yearRange: '2021–2024', fuelType: 'petrol', consumption: 11.6 },

  // Audi
  { make: 'Audi', model: 'A3', yearRange: '2021–2024', fuelType: 'petrol', consumption: 6.1 },
  { make: 'Audi', model: 'A4', yearRange: '2019–2024', fuelType: 'petrol', consumption: 6.8 },
  { make: 'Audi', model: 'Q3', yearRange: '2019–2024', fuelType: 'petrol', consumption: 7.3 },
  { make: 'Audi', model: 'Q5', yearRange: '2017–2024', fuelType: 'petrol', consumption: 7.7 },
  { make: 'Audi', model: 'Q7', yearRange: '2015–2024', fuelType: 'petrol', consumption: 9.5 },

  // Suzuki
  { make: 'Suzuki', model: 'Swift', yearRange: '2017–2024', fuelType: 'petrol', consumption: 4.9 },
  { make: 'Suzuki', model: 'Baleno', yearRange: '2016–2024', fuelType: 'petrol', consumption: 5.2 },
  { make: 'Suzuki', model: 'Vitara', yearRange: '2015–2024', fuelType: 'petrol', consumption: 6.0 },
  { make: 'Suzuki', model: 'S-Cross', yearRange: '2022–2024', fuelType: 'hybrid', consumption: 5.1 },
  { make: 'Suzuki', model: 'Jimny', yearRange: '2018–2024', fuelType: 'petrol', consumption: 6.4 },

  // Isuzu
  { make: 'Isuzu', model: 'D-Max 4x2', yearRange: '2021–2024', fuelType: 'diesel', consumption: 6.5 },
  { make: 'Isuzu', model: 'D-Max 4x4', yearRange: '2021–2024', fuelType: 'diesel', consumption: 7.0 },
  { make: 'Isuzu', model: 'MU-X', yearRange: '2021–2024', fuelType: 'diesel', consumption: 7.2 },

  // Holden (discontinued, many still on road)
  { make: 'Holden', model: 'Commodore VE', yearRange: '2006–2013', fuelType: 'petrol', consumption: 11.5 },
  { make: 'Holden', model: 'Commodore VF', yearRange: '2013–2017', fuelType: 'petrol', consumption: 10.2 },
  { make: 'Holden', model: 'Commodore ZB', yearRange: '2017–2020', fuelType: 'petrol', consumption: 9.1 },
  { make: 'Holden', model: 'Astra', yearRange: '2017–2020', fuelType: 'petrol', consumption: 5.6 },
  { make: 'Holden', model: 'Colorado', yearRange: '2012–2020', fuelType: 'diesel', consumption: 8.9 },
  { make: 'Holden', model: 'Trailblazer', yearRange: '2016–2020', fuelType: 'diesel', consumption: 8.4 },
  { make: 'Holden', model: 'Equinox', yearRange: '2017–2020', fuelType: 'petrol', consumption: 8.1 },
  { make: 'Holden', model: 'Acadia', yearRange: '2018–2020', fuelType: 'petrol', consumption: 10.8 },
  { make: 'Holden', model: 'Captiva', yearRange: '2006–2018', fuelType: 'petrol', consumption: 10.0 },
  { make: 'Holden', model: 'Cruze', yearRange: '2009–2016', fuelType: 'petrol', consumption: 7.2 },

  // Lexus
  { make: 'Lexus', model: 'UX 250h', yearRange: '2018–2024', fuelType: 'hybrid', consumption: 4.4 },
  { make: 'Lexus', model: 'NX 350h', yearRange: '2022–2024', fuelType: 'hybrid', consumption: 5.1 },
  { make: 'Lexus', model: 'RX 350', yearRange: '2016–2024', fuelType: 'petrol', consumption: 9.0 },
  { make: 'Lexus', model: 'RX 500h', yearRange: '2023–2024', fuelType: 'hybrid', consumption: 6.5 },
  { make: 'Lexus', model: 'ES 300h', yearRange: '2019–2024', fuelType: 'hybrid', consumption: 4.9 },
  { make: 'Lexus', model: 'IS 300', yearRange: '2016–2024', fuelType: 'petrol', consumption: 9.0 },
  { make: 'Lexus', model: 'LX 600', yearRange: '2022–2024', fuelType: 'petrol', consumption: 13.5 },

  // Volvo
  { make: 'Volvo', model: 'XC40', yearRange: '2018–2024', fuelType: 'petrol', consumption: 7.8 },
  { make: 'Volvo', model: 'XC60', yearRange: '2018–2024', fuelType: 'petrol', consumption: 8.0 },
  { make: 'Volvo', model: 'XC90', yearRange: '2015–2024', fuelType: 'petrol', consumption: 9.3 },

  // Jeep
  { make: 'Jeep', model: 'Renegade', yearRange: '2014–2022', fuelType: 'petrol', consumption: 7.1 },
  { make: 'Jeep', model: 'Cherokee', yearRange: '2014–2023', fuelType: 'petrol', consumption: 10.0 },
  { make: 'Jeep', model: 'Grand Cherokee', yearRange: '2011–2024', fuelType: 'petrol', consumption: 11.5 },
  { make: 'Jeep', model: 'Wrangler', yearRange: '2018–2024', fuelType: 'petrol', consumption: 12.0 },

  // Land Rover
  { make: 'Land Rover', model: 'Discovery Sport', yearRange: '2014–2024', fuelType: 'petrol', consumption: 9.2 },
  { make: 'Land Rover', model: 'Defender 90', yearRange: '2020–2024', fuelType: 'petrol', consumption: 9.5 },
  { make: 'Land Rover', model: 'Defender 110', yearRange: '2020–2024', fuelType: 'petrol', consumption: 9.8 },
  { make: 'Land Rover', model: 'Range Rover Evoque', yearRange: '2018–2024', fuelType: 'petrol', consumption: 9.0 },
  { make: 'Land Rover', model: 'Range Rover Sport', yearRange: '2013–2024', fuelType: 'petrol', consumption: 11.8 },

  // Peugeot
  { make: 'Peugeot', model: '208', yearRange: '2019–2024', fuelType: 'petrol', consumption: 5.3 },
  { make: 'Peugeot', model: '308', yearRange: '2022–2024', fuelType: 'petrol', consumption: 5.7 },
  { make: 'Peugeot', model: '3008', yearRange: '2017–2024', fuelType: 'petrol', consumption: 7.1 },
  { make: 'Peugeot', model: '5008', yearRange: '2017–2024', fuelType: 'petrol', consumption: 8.0 },

  // Renault
  { make: 'Renault', model: 'Clio', yearRange: '2014–2021', fuelType: 'petrol', consumption: 5.5 },
  { make: 'Renault', model: 'Megane', yearRange: '2016–2022', fuelType: 'petrol', consumption: 6.3 },
  { make: 'Renault', model: 'Koleos', yearRange: '2016–2024', fuelType: 'petrol', consumption: 7.6 },

  // Great Wall Motor
  { make: 'GWM / Haval', model: 'H6', yearRange: '2021–2024', fuelType: 'petrol', consumption: 7.4 },
  { make: 'GWM / Haval', model: 'Jolion', yearRange: '2021–2024', fuelType: 'petrol', consumption: 6.8 },
  { make: 'GWM / Haval', model: 'H6 HEV', yearRange: '2022–2024', fuelType: 'hybrid', consumption: 5.6 },
  { make: 'GWM / Haval', model: 'Cannon', yearRange: '2021–2024', fuelType: 'diesel', consumption: 8.6 },
  { make: 'GWM / Haval', model: 'Tank 300', yearRange: '2022–2024', fuelType: 'petrol', consumption: 9.2 },

  // Chery / Omoda
  { make: 'Chery / Omoda', model: 'Omoda 5', yearRange: '2023–2024', fuelType: 'petrol', consumption: 7.2 },

  // MG
  { make: 'MG', model: 'MG3', yearRange: '2018–2024', fuelType: 'petrol', consumption: 5.8 },
  { make: 'MG', model: 'HS', yearRange: '2019–2024', fuelType: 'petrol', consumption: 7.4 },
  { make: 'MG', model: 'ZS', yearRange: '2020–2024', fuelType: 'petrol', consumption: 6.5 },

  // Porsche
  { make: 'Porsche', model: 'Cayenne', yearRange: '2018–2024', fuelType: 'petrol', consumption: 11.5 },
  { make: 'Porsche', model: 'Macan', yearRange: '2014–2023', fuelType: 'petrol', consumption: 9.5 },

  // Custom entry
  { make: 'Other', model: 'Enter manually', yearRange: 'Any', fuelType: 'petrol', consumption: 0 },
];

export const MAKES = [...new Set(VEHICLES.map(v => v.make))].sort();

export function getModels(make: string): Vehicle[] {
  return VEHICLES.filter(v => v.make === make);
}
