-- Comprehensive Australian-market vehicle database, 1995–2024
-- Sources: Green Vehicle Guide, FCAI/VFACTS, manufacturer specs, Car Advice AU
-- Run AFTER create_vehicles.sql

truncate public.vehicles restart identity;

insert into public.vehicles (make, model, year_range, fuel_type, consumption) values

-- ============================================================
-- TOYOTA
-- ============================================================
('Toyota', 'Corolla AE102', '1994–1999', 'petrol', 8.0),
('Toyota', 'Corolla ZZE122 Hatch', '2001–2007', 'petrol', 7.5),
('Toyota', 'Corolla ZZE122 Sedan', '2001–2007', 'petrol', 7.5),
('Toyota', 'Corolla ZRE152 Hatch', '2007–2013', 'petrol', 7.2),
('Toyota', 'Corolla ZRE182 Hatch', '2013–2019', 'petrol', 7.0),
('Toyota', 'Corolla Hatch', '2019–2024', 'petrol', 6.0),
('Toyota', 'Corolla Sedan', '2019–2024', 'petrol', 6.0),
('Toyota', 'Corolla Hybrid', '2019–2024', 'hybrid', 4.2),
('Toyota', 'Celica ST202', '1994–1999', 'petrol', 9.0),
('Toyota', 'Celica ZZT231', '1999–2006', 'petrol', 8.0),
('Toyota', 'MR2 Spyder ZZW30', '2000–2005', 'petrol', 8.2),
('Toyota', 'Supra A80', '1993–2002', 'petrol', 12.0),
('Toyota', 'GR Supra', '2019–2024', 'petrol', 9.5),
('Toyota', 'Echo NCP10', '1999–2005', 'petrol', 5.8),
('Toyota', 'Yaris NCP90 Hatch', '2005–2011', 'petrol', 5.8),
('Toyota', 'Yaris NCP130 Hatch', '2011–2020', 'petrol', 5.2),
('Toyota', 'Yaris', '2020–2024', 'petrol', 4.8),
('Toyota', 'Yaris Cross', '2021–2024', 'hybrid', 4.2),
('Toyota', 'Camry SXV20', '1997–2002', 'petrol', 8.5),
('Toyota', 'Camry ACV30', '2002–2006', 'petrol', 8.5),
('Toyota', 'Camry ACV40', '2006–2011', 'petrol', 8.2),
('Toyota', 'Camry ASV50', '2011–2017', 'petrol', 7.5),
('Toyota', 'Camry', '2018–2024', 'petrol', 7.2),
('Toyota', 'Camry Hybrid', '2018–2024', 'hybrid', 4.7),
('Toyota', 'Aurion GSV40', '2006–2012', 'petrol', 9.6),
('Toyota', 'Aurion GSV50', '2012–2017', 'petrol', 9.3),
('Toyota', '86 ZN6', '2012–2021', 'petrol', 8.4),
('Toyota', 'GR86', '2021–2024', 'petrol', 8.4),
('Toyota', 'GR Yaris', '2020–2024', 'petrol', 6.8),
('Toyota', 'GR Corolla', '2022–2024', 'petrol', 8.2),
('Toyota', 'RAV4 SXA10', '1995–2000', 'petrol', 9.5),
('Toyota', 'RAV4 ACA20', '2000–2006', 'petrol', 9.0),
('Toyota', 'RAV4 ACA33', '2006–2013', 'petrol', 8.3),
('Toyota', 'RAV4 ZSA42/44', '2013–2019', 'petrol', 7.9),
('Toyota', 'RAV4', '2019–2024', 'petrol', 7.4),
('Toyota', 'RAV4 Hybrid', '2019–2024', 'hybrid', 5.0),
('Toyota', 'C-HR', '2017–2024', 'petrol', 7.2),
('Toyota', 'C-HR Hybrid', '2020–2024', 'hybrid', 5.0),
('Toyota', 'Kluger GSU40', '2007–2013', 'petrol', 10.2),
('Toyota', 'Kluger GSU50', '2013–2020', 'petrol', 9.5),
('Toyota', 'Kluger', '2021–2024', 'petrol', 8.9),
('Toyota', 'Kluger Hybrid', '2021–2024', 'hybrid', 6.0),
('Toyota', 'LandCruiser 80 Series Diesel', '1995–1998', 'diesel', 12.5),
('Toyota', 'LandCruiser 100 Series Petrol', '1998–2007', 'petrol', 14.5),
('Toyota', 'LandCruiser 100 Series Diesel', '1998–2007', 'diesel', 11.5),
('Toyota', 'LandCruiser 200 Series', '2007–2021', 'petrol', 13.5),
('Toyota', 'LandCruiser 300 Series', '2021–2024', 'petrol', 10.7),
('Toyota', 'LandCruiser 70 Series', '2007–2024', 'diesel', 11.0),
('Toyota', 'Prado 90 Series', '1996–2002', 'petrol', 13.0),
('Toyota', 'Prado 120 Series Petrol', '2002–2009', 'petrol', 12.0),
('Toyota', 'Prado 120 Series Diesel', '2002–2009', 'diesel', 10.5),
('Toyota', 'Prado 150', '2009–2024', 'diesel', 9.4),
('Toyota', 'HiLux RZN Petrol 4x2', '1997–2005', 'petrol', 9.5),
('Toyota', 'HiLux KZN Diesel 4x4', '1997–2005', 'diesel', 9.0),
('Toyota', 'HiLux TGN Petrol 4x2', '2005–2015', 'petrol', 8.5),
('Toyota', 'HiLux KUN Diesel 4x4', '2005–2015', 'diesel', 9.2),
('Toyota', 'HiLux 4x2', '2015–2024', 'diesel', 7.5),
('Toyota', 'HiLux 4x4', '2015–2024', 'diesel', 8.9),
('Toyota', 'Fortuner', '2015–2024', 'diesel', 8.4),
('Toyota', 'Tarago ACR30', '2000–2006', 'petrol', 11.0),
('Toyota', 'Tarago ACR50', '2006–2019', 'petrol', 11.2),
('Toyota', 'Alphard', '2015–2024', 'hybrid', 6.6),
('Toyota', 'Rukus AZE151', '2010–2014', 'petrol', 8.6),
('Toyota', 'Avensis AZT250', '2003–2009', 'petrol', 7.5),
('Toyota', 'Hiace TRH/KDH Petrol', '2005–2019', 'petrol', 10.5),
('Toyota', 'Hiace Diesel', '2019–2024', 'diesel', 9.5),
('Toyota', 'HiLux Surf/4Runner', '1996–2003', 'petrol', 12.0),
('Toyota', 'Hilux Surf 4Runner Diesel', '1996–2003', 'diesel', 10.0),

-- ============================================================
-- MAZDA
-- ============================================================
('Mazda', '121 / Festiva WA', '1994–1998', 'petrol', 7.5),
('Mazda', '323 Protege BJ', '1998–2003', 'petrol', 7.5),
('Mazda', '323 Astina BJ', '1998–2003', 'petrol', 7.2),
('Mazda', '626 GF', '1997–2002', 'petrol', 9.0),
('Mazda', 'Premacy CP', '2001–2003', 'petrol', 9.0),
('Mazda', 'Mazda2 DY', '2002–2007', 'petrol', 6.5),
('Mazda', 'Mazda2 DE', '2007–2014', 'petrol', 5.9),
('Mazda', 'Mazda2 DJ', '2014–2022', 'petrol', 5.5),
('Mazda', 'Mazda2 Hybrid', '2022–2024', 'hybrid', 3.8),
('Mazda', 'Mazda3 BK', '2003–2009', 'petrol', 7.5),
('Mazda', 'Mazda3 BL', '2009–2013', 'petrol', 6.9),
('Mazda', 'Mazda3 BM Hatch', '2013–2019', 'petrol', 6.5),
('Mazda', 'Mazda3 BM Sedan', '2013–2019', 'petrol', 6.5),
('Mazda', 'Mazda3 BP', '2019–2024', 'petrol', 6.0),
('Mazda', 'Mazda3 Hatch', '2019–2024', 'petrol', 6.0),
('Mazda', 'Mazda6 GG', '2002–2008', 'petrol', 8.5),
('Mazda', 'Mazda6 GH', '2008–2013', 'petrol', 7.8),
('Mazda', 'Mazda6', '2013–2023', 'petrol', 6.5),
('Mazda', 'MX-5 NA', '1989–1997', 'petrol', 8.5),
('Mazda', 'MX-5 NB', '1997–2005', 'petrol', 8.0),
('Mazda', 'MX-5 NC', '2005–2015', 'petrol', 7.8),
('Mazda', 'MX-5 ND', '2015–2024', 'petrol', 6.8),
('Mazda', 'RX-8', '2003–2011', 'petrol', 13.5),
('Mazda', 'Tribute EP', '2001–2007', 'petrol', 9.5),
('Mazda', 'CX-7 ER', '2006–2012', 'petrol', 9.5),
('Mazda', 'CX-3', '2015–2024', 'petrol', 6.2),
('Mazda', 'CX-30', '2019–2024', 'petrol', 6.4),
('Mazda', 'CX-5 Petrol', '2012–2024', 'petrol', 6.7),
('Mazda', 'CX-5 Diesel', '2012–2024', 'diesel', 5.5),
('Mazda', 'CX-8 Petrol', '2018–2024', 'petrol', 7.5),
('Mazda', 'CX-8 Diesel', '2018–2024', 'diesel', 5.8),
('Mazda', 'CX-9 TC', '2007–2016', 'petrol', 10.5),
('Mazda', 'CX-9', '2016–2023', 'petrol', 9.2),
('Mazda', 'BT-50 UN', '2006–2011', 'diesel', 8.5),
('Mazda', 'BT-50 UP', '2011–2020', 'diesel', 8.0),
('Mazda', 'BT-50 TF', '2020–2024', 'diesel', 7.0),

-- ============================================================
-- HOLDEN (discontinued 2020, still common on road)
-- ============================================================
('Holden', 'Commodore VR', '1993–1995', 'petrol', 13.0),
('Holden', 'Commodore VS', '1995–2000', 'petrol', 12.5),
('Holden', 'Commodore VT', '1997–2000', 'petrol', 12.0),
('Holden', 'Commodore VX', '2000–2002', 'petrol', 11.5),
('Holden', 'Commodore VY', '2002–2004', 'petrol', 11.0),
('Holden', 'Commodore VZ', '2004–2006', 'petrol', 11.5),
('Holden', 'Commodore VE', '2006–2013', 'petrol', 11.5),
('Holden', 'Commodore VF', '2013–2017', 'petrol', 10.2),
('Holden', 'Commodore ZB', '2017–2020', 'petrol', 9.1),
('Holden', 'Calais VT–VZ', '1999–2006', 'petrol', 11.5),
('Holden', 'Calais VE', '2006–2013', 'petrol', 10.8),
('Holden', 'Calais VF', '2013–2017', 'petrol', 9.5),
('Holden', 'Berlina VT–VZ', '1997–2006', 'petrol', 11.5),
('Holden', 'Berlina VE', '2006–2013', 'petrol', 10.8),
('Holden', 'Monaro CV8', '2001–2005', 'petrol', 13.5),
('Holden', 'HSV GTS V8', '2003–2017', 'petrol', 14.0),
('Holden', 'HSV ClubSport', '2003–2017', 'petrol', 13.5),
('Holden', 'Barina SB', '1994–2001', 'petrol', 7.5),
('Holden', 'Barina XC', '2001–2005', 'petrol', 7.2),
('Holden', 'Barina TK', '2005–2011', 'petrol', 6.5),
('Holden', 'Barina TM', '2011–2018', 'petrol', 5.8),
('Holden', 'Astra TS', '1998–2005', 'petrol', 8.0),
('Holden', 'Astra AH', '2004–2009', 'petrol', 7.5),
('Holden', 'Astra GTC', '2013–2016', 'petrol', 7.0),
('Holden', 'Vectra JS', '1997–2002', 'petrol', 8.5),
('Holden', 'Vectra ZC', '2002–2005', 'petrol', 8.0),
('Holden', 'Frontera', '1996–2004', 'petrol', 12.0),
('Holden', 'Rodeo', '1988–2003', 'diesel', 9.5),
('Holden', 'Jackaroo', '1991–2002', 'petrol', 13.0),
('Holden', 'Colorado RC', '2008–2012', 'diesel', 9.5),
('Holden', 'Colorado', '2012–2020', 'diesel', 8.9),
('Holden', 'Trailblazer', '2016–2020', 'diesel', 8.4),
('Holden', 'Captiva CG', '2006–2018', 'petrol', 10.0),
('Holden', 'Equinox', '2017–2020', 'petrol', 8.1),
('Holden', 'Acadia', '2018–2020', 'petrol', 10.8),
('Holden', 'Cruze', '2009–2016', 'petrol', 7.2),
('Holden', 'Spark', '2011–2018', 'petrol', 5.5),

-- ============================================================
-- FORD
-- ============================================================
('Ford', 'Falcon EF', '1994–1996', 'petrol', 13.0),
('Ford', 'Falcon EL', '1996–1998', 'petrol', 12.8),
('Ford', 'Falcon AU', '1998–2002', 'petrol', 12.5),
('Ford', 'Falcon BA', '2002–2005', 'petrol', 12.0),
('Ford', 'Falcon BF', '2005–2008', 'petrol', 11.5),
('Ford', 'Falcon FG', '2008–2014', 'petrol', 11.0),
('Ford', 'Falcon FG X', '2014–2016', 'petrol', 10.5),
('Ford', 'Fairmont EF–AU', '1994–2002', 'petrol', 13.5),
('Ford', 'Fairmont Ghia EL–FG', '1996–2011', 'petrol', 12.5),
('Ford', 'FPV F6', '2003–2014', 'petrol', 12.5),
('Ford', 'FPV GT', '2003–2014', 'petrol', 13.5),
('Ford', 'Territory SX', '2004–2005', 'petrol', 12.5),
('Ford', 'Territory SY', '2005–2011', 'petrol', 12.0),
('Ford', 'Territory SZ', '2011–2016', 'petrol', 11.0),
('Ford', 'Laser KM', '1994–1997', 'petrol', 8.0),
('Ford', 'Laser KN', '1997–2002', 'petrol', 7.8),
('Ford', 'Festiva WA/WB', '1994–1997', 'petrol', 6.5),
('Ford', 'Festiva WF/WFX', '1997–2002', 'petrol', 6.5),
('Ford', 'Puma FP 1.7', '1999–2002', 'petrol', 9.5),
('Ford', 'Focus LR', '2002–2005', 'petrol', 7.5),
('Ford', 'Focus LS/LT', '2005–2009', 'petrol', 7.2),
('Ford', 'Focus LV/LW', '2009–2012', 'petrol', 7.0),
('Ford', 'Focus LZ', '2013–2018', 'petrol', 6.5),
('Ford', 'Mondeo MA', '2007–2010', 'petrol', 8.0),
('Ford', 'Mondeo MC', '2010–2014', 'petrol', 7.5),
('Ford', 'Mondeo MD', '2015–2022', 'petrol', 7.2),
('Ford', 'Fiesta WQ', '2004–2009', 'petrol', 6.0),
('Ford', 'Fiesta WT/WZ', '2010–2019', 'petrol', 5.9),
('Ford', 'Courier', '1995–2007', 'diesel', 9.0),
('Ford', 'Ranger XLS 4x2', '2011–2024', 'diesel', 7.5),
('Ford', 'Ranger Wildtrak 4x4', '2011–2024', 'diesel', 8.9),
('Ford', 'Ranger Raptor', '2018–2024', 'diesel', 10.5),
('Ford', 'Everest', '2015–2024', 'diesel', 8.1),
('Ford', 'Escape ZB/ZC/ZD', '2001–2012', 'petrol', 9.5),
('Ford', 'Escape', '2020–2024', 'petrol', 7.3),
('Ford', 'Mustang 2.3T', '2015–2024', 'petrol', 9.8),
('Ford', 'Mustang GT 5.0', '2015–2024', 'petrol', 13.5),

-- ============================================================
-- MITSUBISHI
-- ============================================================
('Mitsubishi', 'Magna TF', '1996–1999', 'petrol', 11.0),
('Mitsubishi', 'Magna TH', '1999–2001', 'petrol', 10.8),
('Mitsubishi', 'Magna TJ', '2001–2003', 'petrol', 10.5),
('Mitsubishi', 'Magna TL', '2003–2005', 'petrol', 10.5),
('Mitsubishi', 'Verada KH–KL', '1999–2005', 'petrol', 11.5),
('Mitsubishi', 'Lancer CE/CG', '1996–2002', 'petrol', 8.5),
('Mitsubishi', 'Lancer CH', '2002–2007', 'petrol', 8.0),
('Mitsubishi', 'Lancer CJ', '2007–2017', 'petrol', 7.5),
('Mitsubishi', 'Lancer Evolution IX', '2005–2007', 'petrol', 12.0),
('Mitsubishi', 'Lancer Evolution X', '2008–2016', 'petrol', 11.5),
('Mitsubishi', 'Galant HJ', '1997–2003', 'petrol', 10.0),
('Mitsubishi', '380 DB', '2005–2008', 'petrol', 10.5),
('Mitsubishi', 'Colt RG', '2004–2012', 'petrol', 6.5),
('Mitsubishi', 'Carisma', '2000–2003', 'petrol', 8.0),
('Mitsubishi', 'Pajero iO H61/67', '1999–2002', 'petrol', 10.0),
('Mitsubishi', 'Challenger PA', '1999–2006', 'diesel', 11.0),
('Mitsubishi', 'Pajero NL/NM', '1997–2002', 'diesel', 13.0),
('Mitsubishi', 'Pajero NP', '2002–2006', 'diesel', 12.0),
('Mitsubishi', 'Pajero NS', '2006–2009', 'diesel', 11.0),
('Mitsubishi', 'Pajero NT/NW', '2009–2015', 'diesel', 9.8),
('Mitsubishi', 'Pajero NX', '2015–2021', 'diesel', 9.5),
('Mitsubishi', 'Pajero Sport', '2016–2024', 'diesel', 8.4),
('Mitsubishi', 'Outlander ZE/ZF/ZG', '2002–2013', 'petrol', 9.0),
('Mitsubishi', 'Outlander ZJ/ZK', '2012–2021', 'petrol', 7.8),
('Mitsubishi', 'Outlander', '2021–2024', 'petrol', 7.1),
('Mitsubishi', 'Outlander PHEV', '2014–2024', 'hybrid', 1.9),
('Mitsubishi', 'ASX XA/XB/XC', '2010–2022', 'petrol', 6.6),
('Mitsubishi', 'Eclipse Cross', '2018–2024', 'petrol', 7.2),
('Mitsubishi', 'Eclipse Cross PHEV', '2021–2024', 'hybrid', 1.9),
('Mitsubishi', 'Triton ML/MN 4x4', '2006–2015', 'diesel', 9.5),
('Mitsubishi', 'Triton MQ 4x2', '2015–2018', 'diesel', 7.2),
('Mitsubishi', 'Triton MQ 4x4', '2015–2018', 'diesel', 8.5),
('Mitsubishi', 'Triton MR 4x2', '2019–2024', 'diesel', 7.2),
('Mitsubishi', 'Triton MR 4x4', '2019–2024', 'diesel', 7.8),
('Mitsubishi', 'Mirage LA', '2012–2024', 'petrol', 5.2),

-- ============================================================
-- NISSAN
-- ============================================================
('Nissan', 'Pulsar N14', '1991–1995', 'petrol', 8.5),
('Nissan', 'Pulsar N15', '1995–2000', 'petrol', 7.5),
('Nissan', 'Pulsar N16', '2000–2006', 'petrol', 7.2),
('Nissan', 'Pulsar N17', '2012–2017', 'petrol', 6.9),
('Nissan', 'Skyline R33', '1993–1998', 'petrol', 11.5),
('Nissan', 'Skyline R34', '1998–2002', 'petrol', 11.8),
('Nissan', 'GT-R R35', '2007–2024', 'petrol', 12.5),
('Nissan', '200SX S14', '1994–1999', 'petrol', 10.0),
('Nissan', '200SX S15', '1999–2002', 'petrol', 9.5),
('Nissan', 'Maxima A33', '2000–2003', 'petrol', 10.5),
('Nissan', 'Maxima J31', '2003–2009', 'petrol', 9.8),
('Nissan', 'Primera P11', '1997–2002', 'petrol', 9.0),
('Nissan', 'Stagea WC34', '1997–2001', 'petrol', 11.0),
('Nissan', 'Patrol Y61 Petrol', '1997–2013', 'petrol', 14.0),
('Nissan', 'Patrol Y61 Diesel', '1997–2013', 'diesel', 11.5),
('Nissan', 'Patrol Y62', '2012–2024', 'petrol', 13.5),
('Nissan', 'Terrano R20', '1995–2003', 'petrol', 12.0),
('Nissan', 'Navara D22', '1997–2015', 'diesel', 9.5),
('Nissan', 'Navara D40', '2005–2015', 'diesel', 9.0),
('Nissan', 'Navara D23 4x2', '2015–2024', 'diesel', 7.5),
('Nissan', 'Navara D23 4x4', '2015–2024', 'diesel', 8.1),
('Nissan', 'Pathfinder R50', '1999–2005', 'petrol', 11.5),
('Nissan', 'Pathfinder R51', '2005–2014', 'petrol', 9.8),
('Nissan', 'Pathfinder', '2013–2024', 'petrol', 9.8),
('Nissan', 'X-Trail T30', '2001–2007', 'petrol', 9.0),
('Nissan', 'X-Trail T31', '2007–2014', 'petrol', 8.5),
('Nissan', 'X-Trail', '2022–2024', 'petrol', 6.6),
('Nissan', 'X-Trail e-Power', '2023–2024', 'hybrid', 5.8),
('Nissan', 'Dualis J10', '2007–2014', 'petrol', 8.5),
('Nissan', 'Murano Z51', '2008–2015', 'petrol', 10.5),
('Nissan', 'Qashqai J10', '2007–2014', 'petrol', 8.0),
('Nissan', 'Qashqai J11', '2014–2021', 'petrol', 7.5),
('Nissan', 'Qashqai', '2021–2024', 'petrol', 6.9),
('Nissan', 'Micra', '2017–2024', 'petrol', 5.5),

-- ============================================================
-- HONDA
-- ============================================================
('Honda', 'Civic EK', '1995–2000', 'petrol', 7.5),
('Honda', 'Civic EP', '2001–2006', 'petrol', 7.2),
('Honda', 'Civic FD', '2006–2012', 'petrol', 7.0),
('Honda', 'Civic FB', '2012–2016', 'petrol', 6.8),
('Honda', 'Civic FC', '2016–2021', 'petrol', 7.0),
('Honda', 'Civic Type R EK9', '1997–2001', 'petrol', 9.5),
('Honda', 'Civic Type R EP3', '2001–2006', 'petrol', 9.2),
('Honda', 'Civic Type R FK2/FK8', '2015–2022', 'petrol', 9.0),
('Honda', 'Civic', '2021–2024', 'petrol', 6.5),
('Honda', 'Accord CD/CE', '1993–1997', 'petrol', 9.5),
('Honda', 'Accord CF', '1997–2001', 'petrol', 8.5),
('Honda', 'Accord CL/CM', '2002–2008', 'petrol', 8.8),
('Honda', 'Accord CP', '2008–2015', 'petrol', 8.5),
('Honda', 'Accord', '2015–2020', 'petrol', 7.6),
('Honda', 'Jazz GD', '2002–2008', 'petrol', 6.2),
('Honda', 'Jazz GG', '2008–2014', 'petrol', 6.0),
('Honda', 'Jazz GK', '2014–2020', 'petrol', 5.8),
('Honda', 'Jazz', '2020–2024', 'hybrid', 4.5),
('Honda', 'HR-V GH', '1999–2006', 'petrol', 8.0),
('Honda', 'HR-V RU', '2014–2021', 'petrol', 6.4),
('Honda', 'HR-V', '2021–2024', 'petrol', 6.4),
('Honda', 'ZR-V', '2023–2024', 'petrol', 6.6),
('Honda', 'CR-V RD1', '1997–2001', 'petrol', 10.0),
('Honda', 'CR-V RD4/5', '2001–2007', 'petrol', 9.5),
('Honda', 'CR-V RE', '2007–2012', 'petrol', 8.5),
('Honda', 'CR-V RM', '2012–2017', 'petrol', 7.9),
('Honda', 'CR-V RW', '2017–2022', 'petrol', 7.2),
('Honda', 'CR-V e:HEV', '2023–2024', 'hybrid', 5.0),
('Honda', 'Odyssey RA', '1999–2003', 'petrol', 10.5),
('Honda', 'Odyssey RB', '2003–2009', 'petrol', 9.5),
('Honda', 'Odyssey RC', '2014–2021', 'petrol', 9.0),
('Honda', 'Integra DC2', '1995–2001', 'petrol', 8.0),
('Honda', 'Integra DC5', '2001–2006', 'petrol', 8.5),
('Honda', 'Legend KA9', '1996–2004', 'petrol', 10.5),

-- ============================================================
-- VOLKSWAGEN
-- ============================================================
('Volkswagen', 'Golf Mk3', '1992–1999', 'petrol', 8.5),
('Volkswagen', 'Golf Mk4', '1998–2006', 'petrol', 7.8),
('Volkswagen', 'Golf Mk5', '2004–2009', 'petrol', 7.2),
('Volkswagen', 'Golf Mk6', '2009–2013', 'petrol', 6.8),
('Volkswagen', 'Golf Mk7', '2013–2020', 'petrol', 5.8),
('Volkswagen', 'Golf', '2020–2024', 'petrol', 5.4),
('Volkswagen', 'Golf GTI Mk5/6', '2006–2013', 'petrol', 8.5),
('Volkswagen', 'Golf GTI', '2021–2024', 'petrol', 7.3),
('Volkswagen', 'Golf R', '2021–2024', 'petrol', 8.0),
('Volkswagen', 'Polo 6N', '1994–2001', 'petrol', 7.5),
('Volkswagen', 'Polo 9N', '2002–2009', 'petrol', 6.5),
('Volkswagen', 'Polo 6R', '2009–2018', 'petrol', 5.9),
('Volkswagen', 'Polo', '2018–2024', 'petrol', 5.2),
('Volkswagen', 'Passat B5', '1997–2005', 'petrol', 8.5),
('Volkswagen', 'Passat B6/B7', '2005–2011', 'petrol', 7.8),
('Volkswagen', 'Passat', '2016–2024', 'petrol', 6.3),
('Volkswagen', 'Jetta A4', '2005–2010', 'petrol', 7.5),
('Volkswagen', 'T-Roc', '2019–2024', 'petrol', 6.5),
('Volkswagen', 'Tiguan', '2016–2024', 'petrol', 6.9),
('Volkswagen', 'Touareg', '2018–2024', 'diesel', 7.4),
('Volkswagen', 'Amarok V6', '2017–2022', 'diesel', 8.3),
('Volkswagen', 'Amarok V6 (NMS)', '2023–2024', 'diesel', 9.0),
('Volkswagen', 'Caddy', '2004–2024', 'petrol', 8.5),
('Volkswagen', 'Transporter T5', '2003–2015', 'diesel', 9.5),
('Volkswagen', 'Multivan T6', '2015–2024', 'diesel', 9.0),

-- ============================================================
-- SUBARU
-- ============================================================
('Subaru', 'Impreza GC/GF', '1992–2000', 'petrol', 9.0),
('Subaru', 'Impreza GD/GG', '2000–2007', 'petrol', 8.5),
('Subaru', 'Impreza GH', '2007–2011', 'petrol', 7.8),
('Subaru', 'Impreza GP/GJ', '2011–2016', 'petrol', 7.2),
('Subaru', 'Impreza', '2017–2024', 'petrol', 6.2),
('Subaru', 'WRX GC8', '1994–2000', 'petrol', 11.5),
('Subaru', 'WRX GD/GG', '2000–2007', 'petrol', 10.5),
('Subaru', 'WRX GV/GH', '2007–2014', 'petrol', 10.0),
('Subaru', 'WRX VA', '2014–2021', 'petrol', 9.3),
('Subaru', 'WRX', '2022–2024', 'petrol', 9.1),
('Subaru', 'WRX STI GC8', '1994–2000', 'petrol', 12.5),
('Subaru', 'WRX STI GD', '2000–2007', 'petrol', 11.5),
('Subaru', 'WRX STI GR', '2007–2014', 'petrol', 11.0),
('Subaru', 'WRX STI VA', '2014–2021', 'petrol', 10.5),
('Subaru', 'Forester SF', '1997–2002', 'petrol', 9.5),
('Subaru', 'Forester SG', '2002–2008', 'petrol', 9.0),
('Subaru', 'Forester SH', '2008–2013', 'petrol', 8.5),
('Subaru', 'Forester SJ', '2013–2018', 'petrol', 7.5),
('Subaru', 'Forester', '2018–2024', 'petrol', 6.8),
('Subaru', 'Liberty BC', '1994–1998', 'petrol', 10.0),
('Subaru', 'Liberty BH', '1998–2003', 'petrol', 9.5),
('Subaru', 'Liberty BP', '2003–2009', 'petrol', 8.5),
('Subaru', 'Liberty BR', '2009–2014', 'petrol', 8.0),
('Subaru', 'Outback BH', '2000–2003', 'petrol', 9.8),
('Subaru', 'Outback BP', '2003–2009', 'petrol', 9.5),
('Subaru', 'Outback BR', '2009–2014', 'petrol', 8.5),
('Subaru', 'Outback BS', '2014–2020', 'petrol', 7.5),
('Subaru', 'Outback', '2020–2024', 'petrol', 7.1),
('Subaru', 'XV / Crosstrek', '2017–2024', 'petrol', 7.1),
('Subaru', 'BRZ ZC6', '2012–2021', 'petrol', 8.4),
('Subaru', 'BRZ', '2021–2024', 'petrol', 8.4),
('Subaru', 'Tribeca B9', '2005–2014', 'petrol', 11.5),

-- ============================================================
-- MERCEDES-BENZ
-- ============================================================
('Mercedes-Benz', 'C-Class W202', '1993–2000', 'petrol', 10.5),
('Mercedes-Benz', 'C-Class W203', '2000–2007', 'petrol', 10.0),
('Mercedes-Benz', 'C-Class W204', '2007–2014', 'petrol', 8.8),
('Mercedes-Benz', 'C-Class', '2021–2024', 'petrol', 7.4),
('Mercedes-Benz', 'E-Class W210', '1995–2002', 'petrol', 11.5),
('Mercedes-Benz', 'E-Class W211', '2002–2009', 'petrol', 10.5),
('Mercedes-Benz', 'E-Class W212', '2009–2016', 'petrol', 9.0),
('Mercedes-Benz', 'E-Class', '2016–2024', 'petrol', 7.6),
('Mercedes-Benz', 'A-Class', '2018–2024', 'petrol', 6.9),
('Mercedes-Benz', 'B-Class W245', '2005–2011', 'petrol', 7.8),
('Mercedes-Benz', 'SLK R170', '1996–2004', 'petrol', 9.5),
('Mercedes-Benz', 'SLK R171', '2004–2011', 'petrol', 8.5),
('Mercedes-Benz', 'ML W163', '1998–2005', 'petrol', 13.0),
('Mercedes-Benz', 'ML W164', '2005–2011', 'petrol', 12.0),
('Mercedes-Benz', 'ML W166', '2011–2015', 'petrol', 10.5),
('Mercedes-Benz', 'GLA', '2020–2024', 'petrol', 7.2),
('Mercedes-Benz', 'GLC', '2022–2024', 'petrol', 8.0),
('Mercedes-Benz', 'GLE', '2019–2024', 'petrol', 9.4),
('Mercedes-Benz', 'GLK X204', '2008–2015', 'petrol', 10.0),
('Mercedes-Benz', 'Vito W638', '2000–2003', 'diesel', 12.0),
('Mercedes-Benz', 'Vito W639', '2003–2014', 'diesel', 11.5),
('Mercedes-Benz', 'Sprinter', '2018–2024', 'diesel', 10.5),
('Mercedes-Benz', 'S-Class W220', '1998–2005', 'petrol', 14.0),

-- ============================================================
-- BMW
-- ============================================================
('BMW', '3 Series E36', '1991–1998', 'petrol', 11.0),
('BMW', '3 Series E46', '1998–2006', 'petrol', 10.0),
('BMW', '3 Series E90', '2005–2012', 'petrol', 9.0),
('BMW', '3 Series F30', '2012–2018', 'petrol', 7.8),
('BMW', '3 Series', '2019–2024', 'petrol', 7.1),
('BMW', '1 Series E87', '2004–2011', 'petrol', 8.5),
('BMW', '1 Series', '2019–2024', 'petrol', 6.4),
('BMW', '2 Series', '2021–2024', 'petrol', 6.8),
('BMW', '5 Series E39', '1995–2003', 'petrol', 11.0),
('BMW', '5 Series E60', '2003–2010', 'petrol', 9.8),
('BMW', '5 Series F10', '2010–2017', 'petrol', 8.2),
('BMW', '5 Series', '2017–2024', 'petrol', 6.9),
('BMW', 'X1 E84', '2009–2015', 'petrol', 9.0),
('BMW', 'X1', '2022–2024', 'petrol', 6.8),
('BMW', 'X3 E83', '2004–2010', 'petrol', 10.5),
('BMW', 'X3 F25', '2010–2017', 'petrol', 8.5),
('BMW', 'X3', '2017–2024', 'petrol', 7.4),
('BMW', 'X5 E53', '1999–2006', 'petrol', 13.0),
('BMW', 'X5 E70', '2006–2013', 'petrol', 12.0),
('BMW', 'X5 F15', '2013–2018', 'petrol', 10.5),
('BMW', 'X5', '2019–2024', 'petrol', 9.5),
('BMW', 'M3 E36', '1995–2000', 'petrol', 12.5),
('BMW', 'M3 E46', '2000–2006', 'petrol', 11.5),
('BMW', 'M3 E90/E92', '2007–2013', 'petrol', 13.0),
('BMW', 'M3', '2021–2024', 'petrol', 11.6),

-- ============================================================
-- AUDI
-- ============================================================
('Audi', 'A3 8L', '1996–2003', 'petrol', 8.5),
('Audi', 'A3 8P', '2003–2012', 'petrol', 7.8),
('Audi', 'A3', '2021–2024', 'petrol', 6.1),
('Audi', 'A4 B5', '1994–2001', 'petrol', 9.0),
('Audi', 'A4 B6', '2001–2004', 'petrol', 8.5),
('Audi', 'A4 B7', '2004–2008', 'petrol', 8.5),
('Audi', 'A4 B8', '2008–2016', 'petrol', 7.5),
('Audi', 'A4', '2019–2024', 'petrol', 6.8),
('Audi', 'A6 C5', '1997–2004', 'petrol', 10.0),
('Audi', 'A6 C6', '2004–2011', 'petrol', 9.0),
('Audi', 'TT 8N', '1998–2006', 'petrol', 9.5),
('Audi', 'TT 8J', '2006–2014', 'petrol', 8.5),
('Audi', 'Q3', '2019–2024', 'petrol', 7.3),
('Audi', 'Q5', '2017–2024', 'petrol', 7.7),
('Audi', 'Q7', '2015–2024', 'petrol', 9.5),

-- ============================================================
-- LEXUS
-- ============================================================
('Lexus', 'IS200/IS300 XE10', '1999–2005', 'petrol', 10.5),
('Lexus', 'IS250/IS350 XE20', '2005–2013', 'petrol', 10.8),
('Lexus', 'IS 300', '2016–2024', 'petrol', 9.0),
('Lexus', 'ES300 XV20/XV30', '1997–2006', 'petrol', 10.0),
('Lexus', 'ES 300h', '2019–2024', 'hybrid', 4.9),
('Lexus', 'RX300 XU10', '2000–2003', 'petrol', 12.0),
('Lexus', 'RX330/350 XU30', '2003–2009', 'petrol', 11.5),
('Lexus', 'RX 350', '2016–2024', 'petrol', 9.0),
('Lexus', 'RX 500h', '2023–2024', 'hybrid', 6.5),
('Lexus', 'GS300/400 S160', '1998–2005', 'petrol', 12.0),
('Lexus', 'GS350/GS450h S190', '2005–2011', 'petrol', 11.0),
('Lexus', 'NX 350h', '2022–2024', 'hybrid', 5.1),
('Lexus', 'UX 250h', '2018–2024', 'hybrid', 4.4),
('Lexus', 'LX 470', '1998–2007', 'petrol', 14.5),
('Lexus', 'LX 600', '2022–2024', 'petrol', 13.5),

-- ============================================================
-- HYUNDAI
-- ============================================================
('Hyundai', 'Excel X3', '1994–2000', 'petrol', 8.5),
('Hyundai', 'Lantra J2/J3', '1995–2001', 'petrol', 9.0),
('Hyundai', 'Elantra XD', '2000–2006', 'petrol', 8.5),
('Hyundai', 'Elantra HD', '2006–2011', 'petrol', 7.8),
('Hyundai', 'Elantra MD', '2011–2016', 'petrol', 7.2),
('Hyundai', 'Elantra', '2016–2024', 'petrol', 6.5),
('Hyundai', 'Accent MC/RB', '2006–2017', 'petrol', 6.8),
('Hyundai', 'Getz TB', '2002–2011', 'petrol', 6.5),
('Hyundai', 'Sonata EF', '1998–2005', 'petrol', 10.5),
('Hyundai', 'Sonata NF', '2005–2010', 'petrol', 9.5),
('Hyundai', 'Sonata YF', '2010–2015', 'petrol', 8.8),
('Hyundai', 'Terracan', '2001–2007', 'diesel', 13.0),
('Hyundai', 'Tucson JM', '2004–2010', 'petrol', 9.5),
('Hyundai', 'Tucson', '2020–2024', 'petrol', 7.3),
('Hyundai', 'Tucson Hybrid', '2021–2024', 'hybrid', 6.0),
('Hyundai', 'Santa Fe SM', '2001–2006', 'petrol', 11.5),
('Hyundai', 'Santa Fe CM', '2006–2012', 'petrol', 10.5),
('Hyundai', 'Santa Fe DM', '2012–2018', 'petrol', 9.5),
('Hyundai', 'Santa Fe', '2018–2024', 'petrol', 9.5),
('Hyundai', 'Santa Fe Hybrid', '2022–2024', 'hybrid', 6.9),
('Hyundai', 'i20', '2021–2024', 'petrol', 5.5),
('Hyundai', 'i30 Hatch', '2017–2024', 'petrol', 6.2),
('Hyundai', 'i30 Sedan', '2017–2024', 'petrol', 6.4),
('Hyundai', 'i30 N', '2018–2024', 'petrol', 8.0),
('Hyundai', 'Venue', '2019–2024', 'petrol', 6.5),
('Hyundai', 'Kona', '2017–2024', 'petrol', 6.5),
('Hyundai', 'Staria', '2021–2024', 'petrol', 9.8),

-- ============================================================
-- KIA
-- ============================================================
('Kia', 'Mentor / Sephia', '1995–2000', 'petrol', 9.0),
('Kia', 'Shuma', '1998–2002', 'petrol', 8.5),
('Kia', 'Sportage KM', '1995–2004', 'petrol', 11.0),
('Kia', 'Sportage JE', '2004–2010', 'petrol', 9.5),
('Kia', 'Sportage SL', '2010–2016', 'petrol', 8.5),
('Kia', 'Sportage', '2021–2024', 'petrol', 7.4),
('Kia', 'Sportage Hybrid', '2022–2024', 'hybrid', 5.6),
('Kia', 'Carnival VQ', '1999–2006', 'petrol', 13.0),
('Kia', 'Carnival', '2020–2024', 'petrol', 10.0),
('Kia', 'Carens', '1999–2006', 'petrol', 9.5),
('Kia', 'Magentis MG', '2001–2011', 'petrol', 10.0),
('Kia', 'Cerato LD', '2004–2008', 'petrol', 8.5),
('Kia', 'Cerato TD', '2008–2013', 'petrol', 7.8),
('Kia', 'Cerato', '2019–2024', 'petrol', 7.0),
('Kia', 'Rio', '2017–2024', 'petrol', 5.5),
('Kia', 'Picanto', '2017–2024', 'petrol', 5.0),
('Kia', 'Sorento BL', '2003–2009', 'diesel', 11.0),
('Kia', 'Sorento XM', '2009–2015', 'petrol', 10.5),
('Kia', 'Sorento', '2020–2024', 'petrol', 8.5),
('Kia', 'Sorento Hybrid', '2021–2024', 'hybrid', 6.0),
('Kia', 'Stinger', '2018–2023', 'petrol', 11.2),

-- ============================================================
-- SUZUKI
-- ============================================================
('Suzuki', 'Vitara ET/TA', '1995–2005', 'petrol', 9.0),
('Suzuki', 'Grand Vitara FT/HT', '1998–2005', 'petrol', 10.5),
('Suzuki', 'Grand Vitara JB', '2005–2015', 'petrol', 9.5),
('Suzuki', 'Vitara', '2015–2024', 'petrol', 6.0),
('Suzuki', 'S-Cross', '2022–2024', 'hybrid', 5.1),
('Suzuki', 'Baleno EG', '1995–2002', 'petrol', 7.5),
('Suzuki', 'Baleno', '2016–2024', 'petrol', 5.2),
('Suzuki', 'Ignis RG', '2000–2008', 'petrol', 6.5),
('Suzuki', 'Liana RH', '2001–2008', 'petrol', 7.5),
('Suzuki', 'SX4 GY', '2006–2014', 'petrol', 7.0),
('Suzuki', 'Kizashi', '2010–2014', 'petrol', 8.5),
('Suzuki', 'Swift RS413', '2004–2011', 'petrol', 5.5),
('Suzuki', 'Swift', '2017–2024', 'petrol', 4.9),
('Suzuki', 'Jimny', '2018–2024', 'petrol', 6.4),
('Suzuki', 'Jimny SJ', '1998–2018', 'petrol', 7.5),
('Suzuki', 'APV Van', '2005–2018', 'petrol', 9.5),

-- ============================================================
-- ISUZU
-- ============================================================
('Isuzu', 'D-Max TF 4x2', '2002–2012', 'diesel', 9.5),
('Isuzu', 'D-Max TF 4x4', '2002–2012', 'diesel', 10.0),
('Isuzu', 'D-Max RT 4x2', '2012–2020', 'diesel', 7.5),
('Isuzu', 'D-Max RT 4x4', '2012–2020', 'diesel', 8.2),
('Isuzu', 'D-Max 4x2', '2021–2024', 'diesel', 6.5),
('Isuzu', 'D-Max 4x4', '2021–2024', 'diesel', 7.0),
('Isuzu', 'MU 4WD', '1998–2003', 'petrol', 12.0),
('Isuzu', 'MU-X', '2021–2024', 'diesel', 7.2),

-- ============================================================
-- JEEP
-- ============================================================
('Jeep', 'Cherokee XJ', '1996–2001', 'petrol', 13.5),
('Jeep', 'Cherokee KJ', '2001–2008', 'petrol', 11.5),
('Jeep', 'Cherokee KL', '2014–2023', 'petrol', 10.0),
('Jeep', 'Grand Cherokee ZJ', '1996–1998', 'petrol', 14.0),
('Jeep', 'Grand Cherokee WJ', '1999–2004', 'petrol', 13.5),
('Jeep', 'Grand Cherokee WK', '2005–2010', 'petrol', 13.0),
('Jeep', 'Grand Cherokee WK2', '2011–2024', 'petrol', 11.5),
('Jeep', 'Wrangler TJ', '1997–2007', 'petrol', 13.5),
('Jeep', 'Wrangler JK', '2007–2018', 'petrol', 13.0),
('Jeep', 'Wrangler', '2018–2024', 'petrol', 12.0),
('Jeep', 'Renegade', '2014–2022', 'petrol', 7.1),
('Jeep', 'Compass', '2017–2024', 'petrol', 8.5),

-- ============================================================
-- LAND ROVER
-- ============================================================
('Land Rover', 'Discovery 1', '1994–1999', 'petrol', 14.0),
('Land Rover', 'Discovery 2', '1999–2004', 'petrol', 15.0),
('Land Rover', 'Discovery 3 TD6', '2004–2009', 'diesel', 11.5),
('Land Rover', 'Discovery 4 TDV6', '2009–2016', 'diesel', 11.0),
('Land Rover', 'Freelander 1', '1998–2006', 'petrol', 10.5),
('Land Rover', 'Freelander 2', '2007–2014', 'petrol', 10.0),
('Land Rover', 'Discovery Sport', '2014–2024', 'petrol', 9.2),
('Land Rover', 'Defender 90', '2020–2024', 'petrol', 9.5),
('Land Rover', 'Defender 110', '2020–2024', 'petrol', 9.8),
('Land Rover', 'Range Rover P38 V8', '1994–2002', 'petrol', 15.5),
('Land Rover', 'Range Rover L322 TD6', '2002–2012', 'diesel', 11.5),
('Land Rover', 'Range Rover Evoque', '2018–2024', 'petrol', 9.0),
('Land Rover', 'Range Rover Sport', '2013–2024', 'petrol', 11.8),

-- ============================================================
-- VOLVO
-- ============================================================
('Volvo', 'S40 V40 Mk1', '1996–2004', 'petrol', 9.5),
('Volvo', 'S40 Mk2', '2004–2012', 'petrol', 8.5),
('Volvo', 'V50', '2004–2012', 'petrol', 8.5),
('Volvo', 'S60 P24', '2001–2009', 'petrol', 9.5),
('Volvo', 'S60 Y20', '2010–2018', 'petrol', 8.0),
('Volvo', 'V70 P26', '2000–2007', 'petrol', 9.5),
('Volvo', 'XC70', '2000–2016', 'petrol', 10.0),
('Volvo', 'XC40', '2018–2024', 'petrol', 7.8),
('Volvo', 'XC60', '2018–2024', 'petrol', 8.0),
('Volvo', 'XC90', '2015–2024', 'petrol', 9.3),
('Volvo', 'XC90 Mk1', '2002–2014', 'petrol', 13.0),

-- ============================================================
-- PEUGEOT
-- ============================================================
('Peugeot', '206', '1999–2009', 'petrol', 7.5),
('Peugeot', '207', '2007–2012', 'petrol', 7.2),
('Peugeot', '208', '2019–2024', 'petrol', 5.3),
('Peugeot', '306', '1996–2002', 'petrol', 8.5),
('Peugeot', '307', '2001–2007', 'petrol', 8.5),
('Peugeot', '308 Mk1', '2007–2014', 'petrol', 7.5),
('Peugeot', '308', '2022–2024', 'petrol', 5.7),
('Peugeot', '406', '1999–2004', 'petrol', 10.0),
('Peugeot', '407', '2004–2011', 'petrol', 9.5),
('Peugeot', '3008 Mk1', '2009–2016', 'petrol', 9.0),
('Peugeot', '3008', '2017–2024', 'petrol', 7.1),
('Peugeot', '5008', '2017–2024', 'petrol', 8.0),

-- ============================================================
-- RENAULT
-- ============================================================
('Renault', 'Clio Mk2', '2001–2008', 'petrol', 7.5),
('Renault', 'Clio Mk3', '2007–2014', 'petrol', 6.5),
('Renault', 'Clio', '2014–2021', 'petrol', 5.5),
('Renault', 'Megane Mk2', '2003–2008', 'petrol', 8.5),
('Renault', 'Megane Mk3', '2008–2016', 'petrol', 7.5),
('Renault', 'Megane', '2016–2022', 'petrol', 6.3),
('Renault', 'Laguna Mk2', '1999–2007', 'petrol', 9.5),
('Renault', 'Scenic Mk2', '2003–2009', 'petrol', 8.5),
('Renault', 'Koleos HH', '2008–2016', 'petrol', 9.0),
('Renault', 'Koleos', '2016–2024', 'petrol', 7.6),
('Renault', 'Captur', '2014–2024', 'petrol', 6.5),
('Renault', 'Kadjar', '2016–2022', 'petrol', 7.2),

-- ============================================================
-- ALFA ROMEO
-- ============================================================
('Alfa Romeo', '147', '2001–2010', 'petrol', 9.5),
('Alfa Romeo', '156 2.0 TS', '1998–2006', 'petrol', 10.5),
('Alfa Romeo', '159 2.2', '2006–2011', 'petrol', 11.0),
('Alfa Romeo', 'Giulietta', '2010–2017', 'petrol', 8.5),
('Alfa Romeo', 'Giulia', '2016–2024', 'petrol', 8.2),
('Alfa Romeo', 'Stelvio', '2017–2024', 'petrol', 8.8),

-- ============================================================
-- SKODA
-- ============================================================
('Skoda', 'Octavia 1U', '2001–2010', 'petrol', 8.0),
('Skoda', 'Octavia A5', '2004–2013', 'petrol', 7.5),
('Skoda', 'Octavia A7', '2013–2020', 'petrol', 6.5),
('Skoda', 'Octavia', '2020–2024', 'petrol', 6.0),
('Skoda', 'Fabia 6Y', '2001–2007', 'petrol', 6.5),
('Skoda', 'Fabia 5J', '2007–2014', 'petrol', 6.0),
('Skoda', 'Superb B6', '2008–2015', 'petrol', 8.5),
('Skoda', 'Superb', '2015–2024', 'petrol', 7.5),
('Skoda', 'Karoq', '2018–2024', 'petrol', 7.0),
('Skoda', 'Kodiaq', '2017–2024', 'petrol', 8.0),

-- ============================================================
-- FIAT
-- ============================================================
('Fiat', 'Punto MK2', '1999–2010', 'petrol', 7.5),
('Fiat', 'Bravo 198', '2007–2014', 'petrol', 7.8),
('Fiat', '500', '2008–2024', 'petrol', 5.5),
('Fiat', '500X', '2015–2024', 'petrol', 7.0),
('Fiat', 'Stilo', '2003–2007', 'petrol', 8.5),

-- ============================================================
-- SAAB
-- ============================================================
('Saab', '9-3', '1998–2012', 'petrol', 9.5),
('Saab', '9-5', '1997–2011', 'petrol', 10.0),

-- ============================================================
-- DAIHATSU (exited AU market 2014)
-- ============================================================
('Daihatsu', 'Charade G200', '1994–2000', 'petrol', 6.5),
('Daihatsu', 'Sirion M100', '2000–2004', 'petrol', 6.0),
('Daihatsu', 'Sirion M300', '2005–2013', 'petrol', 6.0),
('Daihatsu', 'Terios J1', '1997–2006', 'petrol', 8.5),
('Daihatsu', 'YRV M200', '2001–2005', 'petrol', 7.0),

-- ============================================================
-- DAEWOO / CHEVROLET (Daewoo-era models)
-- ============================================================
('Daewoo', 'Lanos', '1997–2003', 'petrol', 8.5),
('Daewoo', 'Nubira', '1997–2003', 'petrol', 9.0),
('Daewoo', 'Leganza', '1997–2002', 'petrol', 10.0),
('Daewoo', 'Matiz', '2001–2005', 'petrol', 6.5),
('Daewoo', 'Kalos', '2003–2008', 'petrol', 7.0),

-- ============================================================
-- PROTON (exited AU market ~2012)
-- ============================================================
('Proton', 'Persona 300', '1996–2004', 'petrol', 10.0),
('Proton', 'Wira', '1996–2005', 'petrol', 8.5),
('Proton', 'Gen 2', '2004–2012', 'petrol', 8.0),
('Proton', 'Savvy', '2005–2012', 'petrol', 6.5),

-- ============================================================
-- SSANGYONG / KGM
-- ============================================================
('SsangYong', 'Musso Sports', '2002–2006', 'diesel', 11.0),
('SsangYong', 'Rexton Y200', '2003–2017', 'diesel', 12.5),
('SsangYong', 'Kyron', '2006–2011', 'diesel', 10.5),
('SsangYong', 'Korando C', '2012–2024', 'petrol', 8.5),
('SsangYong', 'Tivoli', '2016–2024', 'petrol', 7.8),
('SsangYong', 'Musso Grand', '2018–2024', 'diesel', 8.5),

-- ============================================================
-- CHRYSLER / DODGE
-- ============================================================
('Chrysler', 'Neon PL', '1999–2005', 'petrol', 9.5),
('Chrysler', '300C / 300', '2005–2018', 'petrol', 13.0),
('Chrysler', 'Sebring', '1999–2010', 'petrol', 9.5),
('Dodge', 'Caliber', '2006–2013', 'petrol', 8.5),
('Dodge', 'Avenger', '2008–2013', 'petrol', 9.0),
('Dodge', 'Journey', '2008–2020', 'petrol', 11.0),

-- ============================================================
-- CITROEN
-- ============================================================
('Citroen', 'C3 Mk1', '2002–2010', 'petrol', 6.5),
('Citroen', 'C3', '2010–2024', 'petrol', 5.8),
('Citroen', 'C4 Mk1', '2004–2011', 'petrol', 7.5),
('Citroen', 'C4', '2011–2024', 'petrol', 7.0),
('Citroen', 'C5 Mk1', '2001–2008', 'petrol', 9.0),
('Citroen', 'Berlingo', '2002–2024', 'petrol', 8.5),

-- ============================================================
-- SEAT
-- ============================================================
('SEAT', 'Ibiza', '2002–2018', 'petrol', 6.5),
('SEAT', 'Leon Mk2', '2005–2012', 'petrol', 7.0),
('SEAT', 'Leon Mk3', '2012–2020', 'petrol', 6.5),

-- ============================================================
-- GWM / HAVAL
-- ============================================================
('GWM / Haval', 'H6', '2021–2024', 'petrol', 7.4),
('GWM / Haval', 'Jolion', '2021–2024', 'petrol', 6.8),
('GWM / Haval', 'H6 HEV', '2022–2024', 'hybrid', 5.6),
('GWM / Haval', 'Cannon', '2021–2024', 'diesel', 8.6),
('GWM / Haval', 'Tank 300', '2022–2024', 'petrol', 9.2),

-- ============================================================
-- MG
-- ============================================================
('MG', 'MG3', '2018–2024', 'petrol', 5.8),
('MG', 'HS', '2019–2024', 'petrol', 7.4),
('MG', 'ZS', '2020–2024', 'petrol', 6.5),

-- ============================================================
-- CHERY / OMODA
-- ============================================================
('Chery / Omoda', 'Omoda 5', '2023–2024', 'petrol', 7.2),

-- ============================================================
-- PORSCHE
-- ============================================================
('Porsche', 'Boxster 986', '1996–2004', 'petrol', 11.5),
('Porsche', 'Boxster 987', '2004–2012', 'petrol', 10.5),
('Porsche', 'Boxster 718', '2016–2024', 'petrol', 8.5),
('Porsche', 'Cayenne 9PA', '2002–2010', 'petrol', 14.5),
('Porsche', 'Cayenne 92A', '2010–2018', 'petrol', 12.5),
('Porsche', 'Cayenne', '2018–2024', 'petrol', 11.5),
('Porsche', 'Macan', '2014–2023', 'petrol', 9.5),
('Porsche', '911 996', '1997–2005', 'petrol', 11.5),
('Porsche', '911 997', '2004–2012', 'petrol', 11.0),
('Porsche', '911 991', '2012–2019', 'petrol', 10.0),
('Porsche', '911 992', '2019–2024', 'petrol', 9.5),

-- ============================================================
-- BYD (recent entrant)
-- ============================================================
('BYD', 'Atto 3', '2023–2024', 'electric', 0.0),
('BYD', 'Seal', '2023–2024', 'electric', 0.0),
('BYD', 'Dolphin', '2023–2024', 'electric', 0.0),
('BYD', 'Shark PHEV', '2025–2025', 'hybrid', 2.0),

-- ============================================================
-- TESLA
-- ============================================================
('Tesla', 'Model 3', '2019–2024', 'electric', 0.0),
('Tesla', 'Model Y', '2022–2024', 'electric', 0.0),
('Tesla', 'Model S', '2014–2024', 'electric', 0.0),
('Tesla', 'Model X', '2016–2024', 'electric', 0.0),

-- ============================================================
-- MITSUBISHI (additional)
-- ============================================================
('Mitsubishi', 'Sigma GJ/GK', '1990–1996', 'petrol', 11.5),
('Mitsubishi', 'FTO', '1994–2000', 'petrol', 10.0),

-- ============================================================
-- CUSTOM / OTHER
-- ============================================================
('Other', 'Enter manually', 'Any', 'petrol', 0.0)

;
