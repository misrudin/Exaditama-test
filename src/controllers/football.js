const footballModel = require("../models/football");
let standing = [];
let rank = [];

const getStanding = (result) => {
  standing = [];
  result.map((data) => {
    const points = data.score.split(":");

    const cek = (key) => {
      const filterStanding = standing.filter((x) => {
        return x.clubname == key;
      });
      if (filterStanding[0]) {
        return true;
      } else {
        return false;
      }
    };

    if (points[0] > points[1]) {
      if (cek(data.clubhomename)) {
        const dataAfterCek = standing.map((x) => {
          if (x.clubname === data.clubhomename) {
            return {
              clubname: data.clubhomename,
              points: x.points + 3,
            };
          }
          return x;
        });
        standing = dataAfterCek;
      } else {
        standing.push(
          {
            clubname: data.clubhomename,
            points: 3,
          },
          {
            clubname: data.clubwayname,
            points: 0,
          }
        );
      }
    } else if (points[0] == points[1]) {
      if (cek(data.clubhomename)) {
        const dataAfterCek = standing.map((x) => {
          if (x.clubname === data.clubhomename) {
            return {
              clubname: data.clubhomename,
              points: x.points + 1,
            };
          }
          return x;
        });
        standing = dataAfterCek;
      } else {
        standing.push({
          clubname: data.clubhomename,
          points: 1,
        });
      }

      if (cek(data.clubwayname)) {
        const dataAfterCek = standing.map((x) => {
          if (x.clubname === data.clubwayname) {
            return {
              clubname: data.clubwayname,
              points: x.points + 1,
            };
          }
          return x;
        });
        standing = dataAfterCek;
      } else {
        standing.push({
          clubname: data.clubwayname,
          points: 1,
        });
      }
    } else {
      if (cek(data.clubwayname)) {
        const dataAfterCek = standing.map((x) => {
          if (x.clubname === data.clubwayname) {
            return {
              clubname: data.clubwayname,
              points: x.points + 3,
            };
          }
          return x;
        });
        standing = dataAfterCek;
      } else {
        standing.push(
          {
            clubname: data.clubwayname,
            points: 3,
          },
          {
            clubname: data.clubhomename,
            points: 0,
          }
        );
      }
    }
  });
};

const getRank = (standing) => {
  rank = [];
  let arr = [];

  standing.map((club) => {
    arr.push(club.points);
  });

  standing.map((data, i) => {
    const dataMax = Math.max.apply(null, arr);
    const filterData = standing.filter((x) => {
      return x.points.toString() === dataMax.toString();
    });

    rank.push({ clubname: filterData[0].clubname, standing: 1 + i });
    const dataMaxNext = arr.filter((x) => {
      return x != dataMax;
    });
    arr = dataMaxNext;
  });
};

module.exports = {
  recordGame: (req, res) => {
    const { clubhomename, clubwayname, score } = req.body;
    const cari = score.search(":");
    if (cari !== -1) {
      if (clubhomename !== clubwayname) {
        const data = {
          clubhomename,
          clubwayname,
          score,
        };
        footballModel
          .recordGame(data)
          .then((result) => {
            res.json({
              message: "1 Record Add",
            });
          })
          .catch((err) => res.json({ Error: err }));
      } else {
        res.json({
          message: "clubhomename same with clubwayname, is not awoled!",
        });
      }
    } else {
      res.json({ message: "Score must string with semicolon!" });
    }
  },

  leagueStanding: (req, res) => {
    footballModel
      .leagueStanding()
      .then(async (result) => {
        await getStanding(result);
        res.json(standing);
      })
      .catch((err) => res.json({ Error: err }));
  },

  rank: (req, res) => {
    const { clubname } = req.query;
    footballModel
      .leagueStanding()
      .then(async (result) => {
        await getStanding(result);
        await getRank(standing);
        if (clubname) {
          const filterRank = rank.filter((rank) => {
            return rank.clubname === clubname;
          });
          res.json(filterRank);
        } else {
          res.json({ message: "please send parameter clubname!" });
        }
      })
      .catch((err) => res.json({ Error: err }));
  },

  reset: (req, res) => {
    footballModel
      .reset()
      .then((result) => {
        res.json({
          message: "All Record Cleared",
        });
      })
      .catch((err) => res.json({ Error: err }));
  },

  endpoint: (req, res) => {
    res.json([
      {
        url: "http://localhost:8000/football/recordgame",
        method: "POST",
        parameter: "body- xxx-www-form-urlencoded",
        key: {
          clubhomename: "string",
          clubwayname: "string",
          score: "string with semicolon",
        },
      },
      {
        url: "http://localhost:8000/football/leaguestanding",
        method: "GET",
      },
      {
        url: "http://localhost:8000/football/rank?clubname=",
        method: "GET",
        query: "clubname",
      },
      {
        url: "http://localhost:8000/football/reset",
        method: "DELETE",
        description: "reset data from databse to null",
      },
    ]);
  },
};
