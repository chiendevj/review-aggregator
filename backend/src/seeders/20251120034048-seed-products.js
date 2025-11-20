"use strict";

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("products", [
      {
        product_id: 1,
        title: "Anker Nano USB C Charger Block, 30W PIQ 3.0 Foldable iPhone Charger Fast Charging for iPhone 17/16 Series, Galaxy, iPad, Compatible with MagSafe",
        price: 15.99,
        image_url: "https://m.media-amazon.com/images/I/51rRo55PUwL._AC_SL1500_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        title: "JBL Tune 720BT - Wireless Over-Ear Headphones with JBL Pure Bass Sound, Bluetooth 5.3, Up to 76H Battery Life and Speed Charge, Lightweight, Comfortable and Foldable Design (Black)",
        price: 49.99,
        image_url: "https://m.media-amazon.com/images/I/61EL2AKKcBL._AC_SX679_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 3,
        title: "Govee Smart Light Bulbs, Color Changing Light Bulb, Work with Alexa and Google Assistant, 16 Million Colors RGBWW, WiFi & Bluetooth LED Light Bulbs, Music Sync, A19, 800 Lumens, 4 Pack",
        price: 14.99,
        image_url: "https://m.media-amazon.com/images/I/61G5-oBZmzL._AC_SX679_PIbundle-4,TopRight,0,0_SH20_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete("products", null, {});
  },
};