export const urlToParams = str =>
  str
    .slice(1)
    .split("&")
    .filter(d => d.length)
    .reduce((params, hash) => {
      const [key, val] = hash.split("=");
      const valGood = val === undefined ? null : decodeURIComponent(val);
      return Object.assign(params, { [key]: valGood });
    }, {});

export const paramsToUrl = obj =>
  Object.entries(obj)
    .filter(([_, val]) => val !== "")
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join("&");

export const API_BASE = "https://late-night-jokes-api.herokuapp.com/";
export const API_RESULTS_LIMIT = 500;

export const HOST_OPTIONS = [
  { id: "", display: "All hosts" },
  { id: "Conan", display: "Conan O'Brien" },
  { id: "Ferguson", display: "Craig Ferguson" },
  { id: "Letterman", display: "David Letterman" },
  { id: "Corden", display: "James Corden" },
  { id: "Leno", display: "Jay Leno" },
  { id: "Fallon", display: "Jimmy Fallon" },
  { id: "Kimmel", display: "Jimmy Kimmel" },
  { id: "Meyers", display: "Seth Meyers" },
  { id: "Colbert", display: "Stephen Colbert" }
];

export const YEAR_OPTIONS = [
  { id: "", display: "All years" },
  { id: "2009", display: "2009" },
  { id: "2010", display: "2010" },
  { id: "2011", display: "2011" },
  { id: "2012", display: "2012" },
  { id: "2013", display: "2013" },
  { id: "2014", display: "2014" },
  { id: "2015", display: "2015" },
  { id: "2016", display: "2016" },
  { id: "2017", display: "2017" },
  { id: "2018", display: "2018" }
];

const uniq = data => new Set(data.map(d => d.id));
export const HOSTS = uniq(HOST_OPTIONS.slice(1));
export const YEARS = uniq(YEAR_OPTIONS.slice(1));
