const weapons = [
    {name:'Longbow', type:'Sniper', bullets: `Rate of Fire: 86 RPM `, clipCap: "Clip Capacity: 6",
    pros:`Very high damage per shot. 
    Excellent hip-fire accuracy.
    Bullets penetrate enemies, allowing you to hit multiple targets with one shot.
    Since the G7 Scout's reclassification as an AR, the weapon has the highest default capacity out of all snipers.
    Very large capacity with extended mags.`,
    cons:`Low fire rate.
    Slow attachment discovery.`,
    icon: "assets/Longbow_Icon.png",
    card: "assets/lb_card.png",

},
{name:'Devotion', type:'Energy Gun', bullets: `Rate of Fire: 600 RPM `, clipCap: "Clip Capacity: unlimited",
    pros:`2× headshot multiplier.
    Has high damage and fire rate.
    Can be used without reloading by avoiding overheating if fired in short bursts.
    Fires large projectiles barely affected by gravity.
    Recoil is easy to control when fired in short bursts.
    Can open doors by shooting the handle.`,
    cons:`Has slow projectile speed.
    Can overheat after 3 seconds.
    High recoil when continuously fired.
    ADS speed is very slow (-60%)
    Has zero ammo when picked up due to no magazine capacity (requires Energy ammo in inventory).
    1× headshot multiplier at 64+ meters.`,
    icon: "assets/Devotion_Icon.png",
    card: "assets/d_card.png",
},
{name:'G7 Scout', type:'light', bullets: `Rate of Fire: 273 RPM `, clipCap: "Clip Capacity: 10",
    pros: `Decent medium range potential.
    High burst damage with the Double Tap Trigger.svg Double Tap Trigger Hop-Up.
    Great for contesting snipers.`,
    cons:`1.75× headshot multiplier.
    Glowing iron-sight may obscure vision for some players.
    At closer distances, threatened by SMGs / Shotguns.
    At longer distances, the slow bullet traveling speed makes it harder to hit enemies.`,
    icon: "assets/G7_Scout_Icon.png",
    card:"assets/g7_card.png",
},
{name:'L-Star', type:'Energy Gun', bullets: `Rate of Fire: 600 RPM `, clipCap: "Clip Capacity: unlimited",
    pros:`2× headshot multiplier.
    Has high damage and fire rate.
    Can be used without reloading by avoiding overheating if fired in short bursts.
    Fires large projectiles barely affected by gravity.
    Recoil is easy to control when fired in short bursts.
    Can open doors by shooting the handle.`,
    cons:`Has slow projectile speed.
    Can overheat after 3 seconds.
    High recoil when continuously fired.
    ADS speed is very slow (-60%)
    Has zero ammo when picked up due to no magazine capacity (requires Energy ammo in inventory).
    1× headshot multiplier at 64+ meters.`,
    icon: "assets/L-Starw_Icon.png",
    card: "assets/ls_card.png",
},
{name:'RE-45', type:'light', bullets: `Rate of Fire: 750 RPM `, clipCap: "Clip Capacity: 16",
    pros: `Fully automatic.
    A rather tight bullet spread.
    Small weapon which allows for fast movement while aiming.
    Easy to find.
    This pistol can be used as a mini R-99 due to its fast fire rate.`,
    cons:`Small magazine capacity for a full-auto weapon.
    Does not zoom in at all when ADSing with ironsights
    1× headshot multiplier at 38+ meters.`,
    icon: "assets/Re_45_Icon.png",
    card:"assets/re_card.png",
},
{name:'Triple Take', type:'Sniper', bullets: `Rate of Fire: 672 RPM `, clipCap: "Clip Capacity: 5",
    pros: `2× headshot multiplier.
    High damage per shot for an assault rifle.
    Easy to control horizontal recoil.
    Can fire a single charged shot and has 0% leg damage reduction when with the Selectfire Receiver Hop-Up.
    Highest stock capacity out of all assault rifles.
    Highest bullet velocity out of all full auto Guns in-game, and little bullet drop.`,
    cons:`
    Must charge before shooting.
    Has a somewhat high recoil without attachments.
    The charged shot beam with the Selectfire Receiver has damage falloff at 75-225+ meters.`,
    icon: "assets/Triple_Take_Icon.png",
    card: "assets/tt_card.png",
},
{name:'P2020', type:'light', bullets: `Rate of Fire: 430 RPM `, clipCap: "Clip Capacity: 10",
    pros:`A rather tight bullet spread.
    Small weapon which allows for fast movement while aiming.
    Semi-Auto style allows for quick firing speed as fast as you can pull the trigger.
    Very fast reload.
    Accurate when hip-firing and moving.
    High unshielded damage with the Hammerpoint Rounds.svg Hammerpoint Rounds Hop-Up.`,
    cons:`Low damage per shot.
    1× headshot multiplier at 38+ meters.
    Terrible armor penetration.`,
    icon: "assets/P2020_Icon.png",
    card:"assets/p2_card.png",
},
{name:'r-99', type:'light', bullets: `Rate of Fire: 1080 RPM `, clipCap: "Clip Capacity: 20",
    pros: `2× headshot multiplier. High bullet velocity, third highest in class.
    High accuracy and rate of fire.
    Excellent performance at long range for an assault rifle. Good performance at close/medium range.
    Has Auto and Single-Fire fire modes.
    Great ironsights, and above average hipfire performance.`,
    cons:`Low damage.
    Low base ammo capacity.
    The vertical and horizontal recoil pattern is somewhat hard to control at a longer range.`,
    icon: "assets/R-99_Icon.png",
    card:"assets/r9_card.png",
},
{name:'Havoc Rifle', type:'Energy Gun', bullets: `Rate of Fire: 88 RPM `, clipCap: "Clip Capacity: 32",
    pros: `Three shots in a tight spread with the Precision Choke.
    Precision Choke hop-up enable easier hits on targets.
    Bullets penetrate enemies, allowing you to hit multiple targets with one shot.
    The horizontal spread makes it easier to hit running targets.
    Has very little projectile drop at long range.
    Also works as a substitute shotgun.`,
    cons:`Short range compared to other sniper rifles, even with a Precision Choke.
    The three shots can be inconsistent and not all hit the target.`,
    icon: "assets/Havoc_Icon.png",
    card: "assets/hr_card.png",
},

{name:'Sentinel', type:'Sniper', bullets: `Rate of Fire: 34.29 RPM `, clipCap: "Clip Capacity: 4",
    pros:`High damage per shot.
    Bullets penetrate enemies, allowing you to hit multiple targets with one shot.
    Shreds any Shield Health instantly and has 0% leg damage reduction when charged.
    Can open doors by shooting the handle.`,
    cons:`Bolt-action; punishing you more severely for missing shots compared to other snipers.
    Terrible hip-fire accuracy.
    Charged shots essentially discard headshots: Hitting a charged headshot on a standard legend without a Helmet will still deal 140 damage.
    Charged headshots are only effective on Fortified legends with Rare-tier Helmet or higher.
    Takes a long time to switch to without a Sniper Stock.`,
    icon: "assets/Sentinel_icon.png",
    card: "assets/s_card.png",
},
{name:'Charge Rifle', type:'Sniper', bullets: `Rate of Fire: 45 RPM `, clipCap: "Clip Capacity: 4",
    pros: `Beam deals 3 damage in ticks quickly, maximum 45 dmg plus the 45 of the final shot.
    Higher profile damage.
    Longest range out of any weapon.
    Has 100% accuracy in the air (Jump Pads, Ziplines, and Balloons) .
    Has 0% leg shot damage reduction.
    Works at any range.`,
    cons:`Single fire.
    Low magazine capacity and no higher mag capacity.
    Takes a while to charge up.
    Beam can give away position.
    Has damage falloff at 150-391+ meters
    Beam of the weapon will shake while using it in hip-fire.`,
    icon: "assets/Charge_Rifle_Icon.png",
    card:"assets/cr_card.png",
},
{name:'r-301 Carbine', type:'light', bullets: `Rate of Fire: 816 RPM `, clipCap: "Clip Capacity: 16 ",
    pros: `2× headshot multiplier. High bullet velocity, third highest in class.
    High accuracy and rate of fire.
    Excellent performance at long range for an assault rifle. Good performance at close/medium range.
    Has Auto and Single-Fire fire modes.
    Great ironsights, and above average hipfire performance.`,
    cons:`Low damage.
    Low base ammo capacity.
    The vertical and horizontal recoil pattern is somewhat hard to control at a longer range.`,
    icon: "assets/R-301_Icon.png",
    card:"assets/r3_card.png",
},

];
console.log(weapons[1].card)
const $button = $('button');

let displayOrder = []
const selector = [0,1,2,3,4,5,6,7,8,9,10,11];
console.log(selector.length)

//randomly choose gun doesn't work correctly 
/*
const chooseGun = () => {
    for (i = -1; i < 4; i++) {
        let x= Math.floor(Math.random() * selector.length);
        displayOrder.push(x);
       
    }
}
chooseGun();
console.log(displayOrder)

*/
 
const renderGun = () => {
    //clear forms
    $('#display').text('')
    $('img.icon').attr('src', '')

    let x = selector.length -1;   
    const $img = $('<img>')
    $img.attr(`src`,`${weapons[x].card}`);
    const $div = $('<div>').addClass('card').append($img);
    $div.attr('onclick', `disappear()`)
    $('div.magazine').append($div);
    
    const $p1 = $('<p>').text(`${weapons[x].pros}`)
    const $p2 = $('<p>').text(`${weapons[x].cons}`)
    $('#display').append($p1, $p2)

    $('img.icon').attr('src', `${weapons[x].icon}`)
    selector.pop();
    };
/* Doesn't work
function showInfo() {
    let x = selector.length -1;

    const $p1 = $('<p>').text(`${weapons[x].pros}`)
    const $p2 = $('<p>').text(`${weapons[x].cons}`)

    $('#display').append($p1, $p2)
};
*/
$button.on('click', (event) => {
   renderGun();
});

function disappear() {

    $('div.card').remove();
};