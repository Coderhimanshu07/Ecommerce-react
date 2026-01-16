import React, { createContext } from 'react'

// importing the images 
import bb3 from '../assets/3_bbn.png';
import ndlP from '../assets/needle_plate.png';
import bb from '../assets/bb_case.png';
import belts from '../assets/belts.png';
import motors from '../assets/motors.png';
import ndlP2 from '../assets/2_needle_plate.png';
import U_motors from '../assets/Usha_Motors.png';
import belts2 from '../assets/2_belts.png';
import Shuttle from '../assets/Shuttle.png';
import Belt_c from '../assets/Belt_cover.png';
import Teeth from '../assets/Teeth.png';
import Needle from '../assets/Needle.png';

export const Productdata = createContext()

function ProductContext({ children }) {

    const products = [

        /* ================= Bobbin & Case ================= */

        {
            id: 1,
            name: "4 Pcs Bobbin + 2 Bobbin Set For Brother , Usha , etc Sewings",
            image: bb,
            price: 159,
            oldprice: 209,
            category: "bobbin-case",
            info: "This 4 Pcs Bobbin + 2 Bobbin Set is a useful accessory designed for home sewing machines such as Brother, Usha, and other compatible models..."
        },

        {
            id: 2,
            name: "Only Bobbin Set ( 3 Pcs ) For Mechanical Sewing Machines , Usha , Brother",
            image: bb3,
            price: 134,
            oldprice: 184,
            category: "bobbin-case",
            info: "The Only Bobbin Set (3 Pcs) for Mechanical Sewing Machines is a practical accessory designed for Usha, Brother..."
        },

        {
            id: 3,
            name: "SSS SV Normal Sewing Machine Shuttle Race (Naal)",
            image: Shuttle,
            price: 289,
            oldprice: 339,
            category: "bobbin-case",
            info: "The SSS SV Normal Sewing Machine Shuttle Race (Naal) is an essential component for domestic sewing machines..."
        },

        {
            id: 4,
            name: "SHUTTLE | Sewing Needle Compact with Threader Set of 25 peices",
            image: Needle,
            price: 81,
            oldprice: 105,
            category: "bobbin-case",
            info: "The SHUTTLE Sewing Needle Compact with Threader Set (25 Pieces) is a convenient and versatile hand-sewing kit..."
        },

        /* ================= Needle Plate ================= */

        {
            id: 5,
            name: "Single Needle Plate For SEWING MACHINE OF USHA, Brother",
            image: ndlP,
            price: 199,
            oldprice: 249,
            category: "needle-plate",
            info: "The Single Needle Plate for Sewing Machine is a practical and essential spare part designed for Usha, Brother..."
        },

        {
            id: 6,
            name: "2 Pcs Needle Plate Set For Sewing Machine",
            image: ndlP2,
            price: 250,
            oldprice: 280,
            category: "needle-plate",
            info: "The 2 Pcs Needle Plate Set for Sewing Machines is a useful replacement accessory designed for various household sewing machines..."
        },

        /* ================= Belts ================= */

        {
            id: 7,
            name: "SINGLE PIECE MINI BELT REGULAR SIZE FOR SEWING MACHINES",
            image: belts,
            price: 70,
            oldprice: 100,
            category: "Belts",
            info: "The Single Piece Mini Belt (Regular Size) for Sewing Machines is an important replacement part used in many household sewing machines..."
        },

        {
            id: 8,
            name: "Sewing Machine Motor Braded/Grooved Belt (6 x 375 mm)",
            image: belts2,
            price: 120,
            oldprice: 150,
            category: "Belts",
            info: "The Sewing Machine Motor Braided/Grooved Belt (6 × 375 mm) – 2 Pieces is a durable and reliable replacement accessory..."
        },

        {
            id: 9,
            name: "Belt Cover Kansai Faltbed Interlock (Flatlock) Machine",
            image: Belt_c,
            price: 249,
            oldprice: 299,
            category: "Belts",
            info: "The Belt Cover for Kansai Flatbed Interlock (Flatlock) Machine is a protective accessory specifically designed to fit the Kansai Special WX-12..."
        },

        /* ================= Motors ================= */

        {
            id: 10,
            name: "MINI SEWING MACHINE MOTOR (COPPER WINDING) WITH SPEED CONTROLLER",
            image: motors,
            price: 1099,
            oldprice: 1199,
            category: "Motors",
            info: "The Mini Sewing Machine Motor (Copper Winding) with Speed Controller is a reliable and efficient power unit..."
        },

        {
            id: 11,
            name: "USHA Metal Sv Domestic Sewing Machine Motor 1/20 Hp",
            image: U_motors,
            price: 1430,
            oldprice: 1550,
            category: "Motors",
            info: "The USHA Metal SV Domestic Sewing Machine Motor (1/20 HP) is a sturdy and reliable motor designed for home sewing machines..."
        },

        /* ================= Others / Accessories ================= */

        {
            id: 12,
            name: "FEED DOG | Model : JZ-12603 44 (17 TEETH)",
            image: Teeth,
            price: 45,
            oldprice: 60,
            category: "bobbin-case",
            info: "The Feed Dog (Daata) – Model JZ-12603 44 (17 Teeth) is an important component used in sewing machines..."
        }

    ];


    return (
        <Productdata.Provider value={products}>  {children}
        </Productdata.Provider>
    )
}

export default ProductContext