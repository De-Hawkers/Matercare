const addWeeks = (date, weeks) => {
    const result = new Date(date);
    result.setDate(result.getDate() + weeks * 7);
    return result;
    }

  function formatDate(date) {
        return new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(date);
      }

      const contactWeeks = [
        12,
        20,
        26,
        30,
        34,
        36,
        38,
        40
      ];

    const generateSchedule = (pregnancyStartDate) => {
        const start = new Date(pregnancyStartDate);

        return contactWeeks.map((week) => {
                const visitDate = addWeeks(start, week);
                return {
                    week,
                    date: visitDate,
                    formatted: formatDate(visitDate)
                }
        })
    }

    export  {addWeeks, formatDate, generateSchedule}