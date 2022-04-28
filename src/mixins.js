import moment from "moment";

export const formatMixin = {
  methods: {
    //format all dates
    formattedDate(val) {
      return moment(val).format("DD/MMM/YYYY").toUpperCase();
    },
  },
};

const allMixins = {
  // data() {
  //   return {
  //     candidateId: process.env.VUE_APP_CANDIDATE_ID,
  //   };
  // },
  methods: {
    filterByTab(tab, data) {
      if (tab === "all") {
        return data;
      } else {
        return data.filter((el) => el.paymentStatus === tab);
      }
    },
    filterBySearch(val, data) {
      let searchVal = val.toLowerCase().trim();
      ///filter by name or email
      if (searchVal === "") {
        return data;
      } else {
        return data.filter(
          (el) =>
            el.firstName.toLowerCase().includes(searchVal) ||
            el.lastName.toLowerCase().includes(searchVal) ||
            el.email.toLowerCase().includes(searchVal) ||
            formatMixin.methods
              .formattedDate(el.paidOn)
              .toLowerCase()
              .includes(searchVal)
        );
      }
    },
    sortByValue(sortValue, data) {
      if (sortValue == "fname") {
        return data.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
      }
      if (sortValue == "lname") {
        return data.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
      }
      if (sortValue == "email") {
        return data.sort((a, b) => (a.email > b.email ? 1 : -1));
      }
    },
    setTableMeta(payload) {
      let totalCount = payload.length;
      let limit = 10;
      if (totalCount > 0) {
        return {
          currentPage: 1,
          totalPages: Math.ceil(totalCount / limit),
        };
      }
    },
  },
};

export default allMixins;
