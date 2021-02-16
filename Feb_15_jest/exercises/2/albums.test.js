const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {
    getAlbumNames.mockResolvedValue([
        {
            name: "Bat Out Of Hell",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b2734111af27787499f6d8752e9f",
            itemLink: "https://open.spotify.com/album/6mvI80w5r78niBmwtu7RF9",
        },
        {
            name: "Bat Out Of Hell II: Back Into Hell",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b273577bafd70c666aac2e72f69d",
            itemLink: "https://open.spotify.com/album/2frbTcZJoMRuAbeXpuOx0Z",
        },
        {
            name: "Bat Out Of Hell II: Back Into Hell",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b273d31d3b8445d04ceff91acc7d",
            itemLink: "https://open.spotify.com/album/5a2wZu322wJXUk7jNqMOEa",
        },
        {
            name: "Dead Ringer",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b2737d23b4e1aaacbe22e6d51b9b",
            itemLink: "https://open.spotify.com/album/2Y9CaNn1xUX2EJWIiBG45i",
        },
        {
            name: "Welcome To The Neighborhood",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b273c2214f0c28acb278045d00d3",
            itemLink: "https://open.spotify.com/album/1xV31BeYITpe8EczyfvotK",
        },
        {
            name: "Braver Than We Are",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b273264fa2d9c4598e347e4001c8",
            itemLink: "https://open.spotify.com/album/4KcYAJLJw0I5UMaY9cDlk6",
        },
        {
            name: "The Essential Meat Loaf",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b27367b82dd82126d60233784f74",
            itemLink: "https://open.spotify.com/album/4ZocVrrjmHGhfIJeDb94ow",
        },
        {
            name: "Best Of",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b27319e3097df15ca329b3d41481",
            itemLink: "https://open.spotify.com/album/3LfNCaBMqGTYOiSiWfiWTk",
        },
        {
            name: "Hell In A Handbasket",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b273e7724a963c4917fdf16c1726",
            itemLink: "https://open.spotify.com/album/7KiWEsDB4DqgPaJjObdFvk",
        },
        {
            name: "Midnight At The Lost And Found",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b2733ab9bb3ec7d88f013152261c",
            itemLink: "https://open.spotify.com/album/5TvUFX8blX7LAw4nMtYji4",
        },
        {
            name: "Bad Attitude",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b2738ad6d1b4576feb8967a00f18",
            itemLink: "https://open.spotify.com/album/6krXXVSUaYyIujkAH5Ifth",
        },
        {
            name: "Hits Out Of Hell",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b2730e7956f1faaef8ac3ad3730b",
            itemLink: "https://open.spotify.com/album/11TZnz8T7QvQXOJApcmnHF",
        },
        {
            name: "Bad Attitude",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b27367251dfe4131f53af850e67c",
            itemLink: "https://open.spotify.com/album/1IR0hPKZ8ElBGqe3DjJlUb",
        },
        {
            name: "VH1 Storytellers",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b273cd3fdddb34d358087be2e531",
            itemLink: "https://open.spotify.com/album/38fbLTxkUrdPjXmMnk0L3m",
        },
        {
            name: "Blind Before I Stop",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b273add7316470670d4eff95b7f8",
            itemLink: "https://open.spotify.com/album/3K414YTKndcfomG7yvCA3Z",
        },
        {
            name: "Hell In A Handbasket",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b273aeea3821acb4258f6ecb1caf",
            itemLink: "https://open.spotify.com/album/7Ms0XpczZkQVnhmGkYkIGy",
        },
        {
            name: "Braver Than We Are",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b273a4313c262328af9ba0c87d6e",
            itemLink: "https://open.spotify.com/album/3uoN3V0FyDlyaoqK7rN9Jr",
        },
        {
            name: "If I Can't Have You",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b273b4bee1645d7620fbf9df94a3",
            itemLink: "https://open.spotify.com/album/3bK3Br23EhpDHyVn6Szhdr",
        },
        {
            name: "Speaking In Tongues (Radio Edit)",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b273ea23814264f36f14530fdf42",
            itemLink: "https://open.spotify.com/album/1QsNRqyX44E6CVBGj1fY1N",
        },
        {
            name: "Rock 'N' Roll Hero",
            itemImg:
                "https://i.scdn.co/image/ab67616d0000b27347e08dbc99731ffe576b399d",
            itemLink: "https://open.spotify.com/album/6xG0DIrB9fkvzxPSmHTFvs",
        },
    ]);
    return getAlbumNames("meat loaf").then((albumNames) => {
        expect(albumNames).toEqual(albumNames.slice().sort());
    });
});
