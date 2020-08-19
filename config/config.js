/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "clock",
			position: "top_left",
			config: {
				timeFormat: "12",
				showPeriodUpper: "true"
				}

		},
		{
			module: "MMM-DarkSkyForecast",
			header: "Weather",
			position: "top_right",
			classes: "default everyone",
			disabled: false,
			config: {
				apikey: "5459c758641a7c9d8edaa423e9962a47",
				latitude: "40.453368",
				longitude: "-87.054179",
				iconset: "4c",
				units: "us",
				forecastLayout: "table",
				maxDailiesToShow: "0"
				}
		},
		{
	            	module: 'MMM-GoogleTasks',
	            	header: "Tasks",
	            	position: "bottom_left",
	            	config: {
	                		listID: "MTc0NDA3NjEwMjk2MTQxMTMzNjE6MDow",
				}
        	},
		{
			module: "MMM-CalendarWeek",
			position: "bottom_bar",
			config: {
				calendars: [
					{
					url: "https://calendar.google.com/calendar/ical/katherinesandys%40gmail.com/private-5ea2c557e21b679208ddc427cf461111/basic.ics",
					symbol: 'calendar',
					displayDescription: 'true',
					timeFormat:"12"
					},
				],
			}
		},
		{
			module: "MMM-Wallpaper",
			position: "fullscreen_below",
			config:{
				source: "/r/SkyPorn",
				slideInterval: 5 * 60 *1000, // Change slides every 5 minutes
				orientaion: "horizontal",
			},
		},

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
