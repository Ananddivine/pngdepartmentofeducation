// utils/getThemeStyles.js
export const getThemeStyles = (theme) => {
  switch (theme) {
    case "dark":
      return {
        page: "bg-gray-900 text-gray-100",
        cardBg: "bg-gray-800",
        cardHover: "hover:bg-gray-700",
        tableHead: "bg-gray-800 text-gray-100",
        tableRowEven: "bg-gray-700",
        tableRowOdd: "bg-gray-800",
        tableHover: "hover:bg-gray-600",
        chartXAxis: "#ffffff",
        chartYAxis: "#ffffff",
        chartTooltipBg: "#333",
        chartTooltipColor: "#fff",
        chartBars: { boys: "#4A90E2", girls: "#FF69B4" },
        buttonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
        buttonDisabled: "bg-gray-500 cursor-not-allowed",
        modalBg: "bg-gray-800 text-gray-100",
        inputBg: "bg-gray-700 text-gray-100 border-gray-600",
        dropdownBg: "bg-gray-800 text-gray-100",
      };

    default: 
      return {
        page: "bg-purple-950 text-white",
        cardBg: "bg-gray-400",
        cardHover: "hover:bg-purple-100",
        tableHead: "bg-purple-950 text-white",
        tableRowEven: "bg-white",
        tableRowOdd: "bg-purple-50",
        tableHover: "hover:bg-purple-200",
        chartXAxis: "#000",
        chartYAxis: "#000",
        chartTooltipBg: "#fff",
        chartTooltipColor: "#000",
        chartBars: { boys: "#4A90E2", girls: "#FF69B4" },
        buttonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
        buttonDisabled: "bg-gray-400 cursor-not-allowed",
        modalBg: "bg-white text-gray-900",
        inputBg: "bg-purple-200 border-purple-600 text-gray-800",
        dropdownBg: "bg-purple-950 text-white",
      };
  }
};
