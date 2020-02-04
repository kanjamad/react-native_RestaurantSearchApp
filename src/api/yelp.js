import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer 0tgTs7j6L8YVZD-Q7rbZ-TvZCKfRdj_r20_LHEbz5bcxYT3hOxWoCx_XgzMvGeQh8lH4w3ERwBDNbcDubU5bjnF1aXTwBcKJsmzd7KWhUySlU6mqsQowAvubaRo2XnYx"
    }
});
