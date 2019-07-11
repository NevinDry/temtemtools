const statsColors = {
    weak: "#cf2020",
    medium: "#edc81b",
    high: "#a8d55a",
};

export const getStatsBackColor = (value) => {
    if (value > 80) {
        return statsColors.high;
    } else if (value > 50) {
        return statsColors.medium;

    } else if (value > 20) {
        return statsColors.weak;

    }
}

