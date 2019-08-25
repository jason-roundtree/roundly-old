## User stories / app flow

- User can create account (and they need to in order to use the app)
- User can reset password
- User can create a League and invite other players
  - A League is just a general container for the players in the League. Once a League is created you'll have to create a Season to actually record Rounds played and points accrued
  - The User that created the league has admin access that allow various season-editing priveleges but this person may give authorization to other league members
- An authorized User can create a Season and give it a name (optional), start date (optional), end date (can be set to indefinite), set active players and setup the different Point Settings 
  - Point Settings are sort of general/default point settings for a Season but these settings can be edited on a round-to-round basis
  - Point Settings can be copied from one Season into another Season of the same League
      - TENTATIVE/POST-MVP: Point Settings can be copied from one Season into the Season of a different League, assuming that the User that is setting up the other Season is authorized in both leagues 
  - Point Settings for a Season may be edited by authorized User but if so, the changes will be re-applied to all completed rounds in which those settings were applied
  - Point Settings for a Round may be edited by authorized User after the points have been set and even after a Round has been completed. 
    - **TODO??:** Ideally the different Point Setting criteria will be tallied for each Player through the App but maybe the authorized users should be allowed to just enter total points accrued for each player in the event that the players choose to track points manually (i.e. not directly on phone/device)
- An authorized User can create a Round, in which points will be allocated according to Point Settings criteria
  - Round data includes round name, round date, round players and round point settings. Point Settings are inherited from the Season Point Settings but can be edited or deleted on an individual basis or new settings can be added
  - The Rounds can be set for the future or the past
  - **TODO??:** In addition to tracking points for custom criteria, maybe also allow actual golf scores for each player to be recorded on a hole-by-hole basis. Maybe it can also factor in player handicap for Net score and you can also easily record which holes the various Point Setting accomplishments were achieved
- Points accrued during the individual rounds will be tallied, sorted and shown on a leaderboard on the Season page

**TODO??:** Finish these User Stories and README
