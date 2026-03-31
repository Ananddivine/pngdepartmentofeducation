"use client";
import React, { useEffect, useRef } from "react";
import Globe from "globe.gl";
import * as THREE from "three";

const routes = [
  { startLat: -9.4438, startLng: 147.1803, endLat: 31.6340, endLng: 74.8723, label: "PNG → Punjab", color: "#22c55e" },
  { startLat: -9.4438, startLng: 147.1803, endLat: 39.9042, endLng: 116.4074, label: "PNG → China", color: "#3b82f6" },
  { startLat: -9.4438, startLng: 147.1803, endLat: 40.7128, endLng: -74.0060, label: "PNG → USA", color: "#f97316" },
  { startLat: -9.4438, startLng: 147.1803, endLat: 3.1390, endLng: 101.6869, label: "PNG → Malaysia", color: "#10b981" },
  { startLat: -9.4438, startLng: 147.1803, endLat: 1.3521, endLng: 103.8198, label: "PNG → Singapore", color: "#8b5cf6" },
  { startLat: -9.4438, startLng: 147.1803, endLat: 11.0168, endLng: 76.9558, label: "PNG → Coimbatore", color: "#eab308" }
];

export const RotatingGlobe = () => {
  const globeRef = useRef();

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = Globe()(globeRef.current)
      .width(400)
      .height(400)
      .backgroundColor("rgba(0,0,0,0)")
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
      .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")

      // arcs
      .arcsData(routes)
      .arcColor("color")
      .arcAltitude(0.3)
      .arcStroke(1.5)
      .arcDashLength(0.4)
      .arcDashGap(0.6)
      .arcDashAnimateTime(4000)

      // glowing points
      .pointsData(routes)
      .pointLat(d => d.startLat)
      .pointLng(d => d.startLng)
      .pointAltitude(0.02)
      .pointColor(() => "#ffffff")
      .pointRadius(0.7)

      // tooltips
      .pointLabel(d => `<div style="color:white">${d.label}</div>`);

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 7;

    const scene = globe.scene();

    // ⭐ Star background
    const starGeometry = new THREE.BufferGeometry();
    const starVertices = [];

    for (let i = 0; i < 3000; i++) {
      starVertices.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      );
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // 🛰 Satellite orbit
    const satelliteGeometry = new THREE.SphereGeometry(1.5, 16, 16);
    const satelliteMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
    scene.add(satellite);

    let angle = 0;

    const animateSatellite = () => {
      angle += 0.01;

      satellite.position.x = 120 * Math.cos(angle);
      satellite.position.z = 120 * Math.sin(angle);
      satellite.position.y = 40 * Math.sin(angle * 2);

      requestAnimationFrame(animateSatellite);
    };

    animateSatellite();

  }, []);

  return <div ref={globeRef} />;
};