import { useState, useEffect } from "react";
import defaultAvatar from "../../assets/defaultAvatar.jpg";
import axiosInstance from "../axiosInstance/axiosInstance";

export const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    image: defaultAvatar,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axiosInstance.get("/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.success) {
          const { name, profilePhoto, email } = response.data.user;
          setUserProfile({
            name,
            email,
            image: profilePhoto || defaultAvatar, // fallback to default
          });
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return userProfile;
};
