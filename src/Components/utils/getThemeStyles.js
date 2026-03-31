// utils/getThemeStyles.js
export const getThemeStyles = (theme) => {
  switch (theme) {
    case "dark":
      return {
        page: "bg-gray-900 text-gray-100",
        card: "bg-gray-800 text-gray-100",
        tickColor: "#ffff",
        cardHover: "hover:bg-gray-700 hover:shadow-gray-500",
        chart: "bg-gray-800 text-gray-100",
        chartBars: { boys: "#0084FF", girls: "#00DDFF" },
        chartBars2: { boys: "#0084FF", girls: "#2EE3FF" },
        chartPie: { teachers: "#2EFFD9", students: "#0244A2" },
        button: "bg-gray-500 hover:bg-gray-600 text-white",
        gradientText: "bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100",
        iconColors: {
          nsoe: "text-yellow-400",
          stem: "text-green-400",
          overseas: "text-purple-400",
          tasks: "text-red-400",
        },
        densityGradient: {
          from: "#CB06AD",
          to: "#374151",
        },
      };

    case "colorful":
      return {
        page: "bg-blue-600 text-gray-900",
        card: "bg-white text-gray-800",
        cardHover: "hover:shadow-lg",
        chart: "bg-gray-100 text-gray-900",
        tickColor: "#ffff",
        chartBars: { boys: "#4A90E2", girls: "#FF69B4" },
        chartBars2: { boys: "#4A90E2", girls: "#8A1616" },
        chartPie: { teachers: "#10B981", students: "#6366F1" }, // 🎨 NEW
        button: "bg-blue-400 hover:bg-blue-600 text-white",
        gradientText: "bg-gradient-to-r from-gray-100 via-pink-700 to-gray-100",
        iconColors: {
          nsoe: "text-yellow-600",
          stem: "text-green-600",
          overseas: "text-purple-600",
          tasks: "text-red-600",
        },
        densityGradient: {
          from: "#9333ea",
          to: "#f472b6",
        },
      };

    case "light":
      return {
        page: "bg-gray-200 text-gray-900",
        card: "bg-white text-gray-800",
        cardHover: "hover:bg-gray-700 hover:text-white hover:shadow-md",
        chart: "bg-white text-gray-900",
        tickColor: "#3F4F64",
        chartBars: { boys: "#3F4F64", girls: "#677798" },
        chartBars2: { boys: "#3F4F64", girls: "#526780" },
        chartPie: { teachers: "#3F4F64", students: "#677798" },
        button: "bg-blue-950 hover:bg-blue-900 text-white",
        gradientText: "bg-blue-950",
        iconColors: {
          nsoe: "text-yellow-500",
          stem: "text-green-500",
          overseas: "text-purple-500",
          tasks: "text-red-500",
        },
        densityGradient: {
          from: "#00051A",
          to: "#00135E",
        },
      };

    default:
      return {
        page: "bg-gradient-to-r from-blue-600 to-purple-700 text-white",
        card: "bg-white text-gray-800",
        cardHover: "hover:bg-gray-600 hover:shadow-md",
        chart: "bg-gray-100 text-gray-900",
        chartBars: { boys: "#4A90E2", girls: "#FF00D8" },
        chartBars2: { boys: "#4A90E2", girls: "#FF69B4" },
        chartPie: { teachers: "#EC4899", students: "#3B82F6" }, // 🎨 NEW
        button: "bg-pink-500 hover:bg-pink-600 text-white",
        gradientText:
          "bg-gradient-to-r from-yellow-300 via-pink-500 to-blue-400",
        densityGradient: {
          from: "#6b7280",
          to: "#d1d5db",
        },
      };
  }
};
