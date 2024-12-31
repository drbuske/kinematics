var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Some work in this text (e.g. first partials, second derivatives, spherical coordinates) has been freely adapted from Active Calculus - Multivariable by Steve Schlicker: https:\/\/activecalculus.org\/multi\/frontmatter.html  Licensed under BY-NC-SA 4.0.     Material on polar and spherical coordinates has utilized work found in CLP-3 Multivariable Calculus by Joel Feldman, Andrew Rechnitzer and Elyse Yeager: https:\/\/personal.math.ubc.ca\/~CLP\/CLP3\/clp_3_mc\/frontmatter.html  Licensed under BY-NC-SA 4.0.     A small number of examples have been modified from OpenStax, Calculus Volume 3 : https:\/\/openstax.org\/details\/books\/calculus-volume-3  Licensed under BY-NC-SA 4.0.     Many thanks goes to the many individuals that have written WebWork and MyOpenMath exercises that have been used in this text. Gavin LaRose at Michigan has written an extensive number of questions and I appreciate his efforts. David Lippman at MyOpenMath has been incredibly valuable in these efforts as well.  "
},
{
  "id": "sec_CAPE",
  "level": "1",
  "url": "sec_CAPE.html",
  "type": "Section",
  "number": "1.1",
  "title": "Numerical Integration",
  "body": " Numerical Integration     What is CAPE and how it is used to predict the potential for severe weather?    How do Riemann sums, the Trapezoid Rule, and Simpson's Rule relate to calculating CAPE?      CAPE CAPE , or Convective Available Potential Energy, is a meteorological concept used to assess the potential for thunderstorm development and intensity. CAPE is essentially a measure of how much energy is available for rising air parcels within the atmosphere. The more energy available, the stronger the potential updraft and the more intense the thunderstorm can be. Higher CAPE values generally correspond to a greater likelihood of severe weather like hail, strong winds, and tornadoes.  For a moment, imagine a hot air balloon. The hotter the air inside the balloon, the more it wants to rise compared to the surrounding cooler air. Similarly, in the atmosphere, if a parcel of air is warmer than its surroundings, it will be less dense and tend to rise. CAPE quantifies this potential energy for rising air. A large temperature difference between the rising air parcel and the environment means more CAPE and thus a greater potential for strong updrafts and severe thunderstorms. In this section, we will learn how to quantify CAPE by estimating the value of a definite integral.    CAPE and CIN  The Lifting Condensation Level (LCL) Lifting Condensation Level (LCL) is where condensation starts in a rising air parcel. If the parcel continues to rise, it cools at a slower rate (the moist adiabatic lapse rate). If forced to rise further, it reaches the Level of Free Convection (LFC) Level of Free Convection (LFC) , where it becomes positively buoyant and can rise freely, leading to deep convection.  The Equilibrium Level (EL) Equilibrium Level (EL) is where a rising parcel’s temperature matches the environment’s temperature, stopping its positive buoyancy. CAPE is the area between the temperature sounding and the moist adiabat on a skew-T diagram, representing the potential kinetic energy a parcel can gain due to positive buoyancy. Higher CAPE values indicate greater atmospheric instability and potential for severe weather.   CAPE is the (positive) area between the environmental temperature and the moist adiabat on a skew-T diagram. CAPE is bounded below by the LFC and above by the EL. CIN is the (negative) area between the environmental temperature and the adiabat. It is bounded above by the LFC. Source: www.weather.gov .   An illustration of CAPE and CIN on a thermodynamic chart.     Interpreting CAPE values    CAPE  Interpretation    0001-1000 J\/kg  Marginally (Weakly) Unstable    1000-2500 J\/kg  Moderately Unstable    2500-3500 J\/kg  Very Unstable    3500 J\/kg and higher  Extremely Unstable     CIN (Convective Inhibition) CIN (Convective Inhibition) is the energy needed to lift a parcel to its LFC. High CIN means weak lift and less chance of thunderstorms. On a skew-T diagram, CIN is the negative area between the temperature sounding and the adiabat.  Knowing that we can estimate CAPE using a thermodynamic chart leads us to the quantitative problem of how this is done. While several approximation techniques can be used, fundamentally we know that finding the area between two curves is a mathematical problem first encountered in integral calculus. In the next section, we study numerical approximation techniques for estimating a definite integral . After all, if we rotate the skew-T diagram clockwise 90 degrees, and straighten the moist adiabat \/ dry adiabat that a lifted air parcel follows between the surface and the EL, we obtain a diagram familiar from calculus (see ). If represents the curve in , then and    CAPE and CIN as a definite integrals. Source: Fovell (UCLA), ATM 562 .   CAPE and CIN illustrated as a definite integral.    In the next section, we will review the use of Riemann sums to estimate the areas representing CAPE and CIN in .    Left, Right, and Midpoint Sums  Suppose that and we wish to estimate the value of . Three different Riemann sums that estimate this value are illustrated in .   Left, right, and middle Riemann sums ( , and respectively) for on with 5 subintervals. Source:  Active Calculus, Boelkins .   Left, Right, and Middle Riemann sums illustrated for the function .    A Riemann sum is a sum of (possibly signed) areas of rectangles. A positive integer determines the number of rectangles, and our choice of left endpoints, right endpoints, or midpoints determines the heights of the rectangles. The left, right, and middle Riemann sums of a function on an interval are given by where , , , and . For the middle sum , we defined .   Subdividing the interval into subintervals of equal length . Source:  Active Calculus, Boelkins .   A subdivision of the interval [a,b] into n segments.    As seen in , on each interval , the area of the rectangle formed is given by . Adding up the areas of these rectangles then gives the left Riemann sum which approximates the value of .   Approximating the area under over using a left Riemann sum, . Source:  Active Calculus, Boelkins .   An illustration of a left Riemann Sum.    illustrates the right Riemann sum, , and the middle Riemann sum, , respectively. For the sum with right endpoints, we see that the area of the rectangle on an arbitrary interval is given by , and that the sum of all such areas of rectangles is given by the right Riemann sum   Approximating the area under over using a right and middle Riemann sums, and . Source:  Active Calculus, Boelkins .   An illustration of a right and middle Riemann Sum.    For the sum that uses midpoints, we introduce the notation so that is the midpoint of the interval . Then the area of the rectangle on an arbitrary interval is given by , and that the sum of all such areas of rectangles is given by the middle Riemann sum   Computing CAPE using the Midpoint Rule  In (height) coordinates, CAPE can be found by the definite integral where is the air parcel temperature (in ) at height km, is the environmental temperature (in ) at height km, is the gravitational constant (9.8 ), and and are the heights of the level of free convection and equilibrium level respectively.  From a sounding, suppose we know that km, km, and we know the information from   Sounding data used in estimating CAPE    Height  (km)  (  (  ( )  ( )    5.5  -5  -15  268  258    6.5  -10  -25  263  248    7.5  -20  -40  253  243    8.5  -25  -40  248  233     Defining , we find CAPE by estimating . Computing a midpoint sum , as illustrated in , provides us a reasonable estimate.   Using a midpoint sum to estimate the area under on .        Use a Sounding and a Right Sum to Estimate CAPE Use the sounding in and the right sum to estimate CAPE.   A sounding. The green curve is dewpoint temperature. The red curve is environmental temperature. The black curve is the temperature of an air parcel. Source:  www.wikiwand.com CC BY-SA 4.0.   A sounding illustrating CAPE which is to be calculated.     The LFC for this sounding appears to be at roughly 500 meters and the EL appears to be at roughly 1250 meters. Using km, we can construct the values found in .   Sounding data used to estimating CAPE in    Height  (km)       )   )    0.5  23  23  296  296    2.5  10  -7  283  266    4.5  -1  -17  272  256    6.5  -16  -22  257  251    8.5  -28  -37  245  236    10.5  -46  -51  227  222    12.5  -58  -58  215  215     We use a right Riemann sum, , to estimate To simplify, we define .   This right Riemann sum is illustrated in .   Using a right Riemann sum to estimate the area under on .         The Trapezoidal Rule  One alternative to left, right and midpoint Riemann sums ( , , and ) in computing area under a curve is called the Trapezoid Rule Trapezoid Rule . Rather than using a rectangle to estimate the (signed) area bounded by on a small interval, we use a trapezoid. For example, in , we estimate the area under the curve using three subintervals and the trapezoids that result from connecting the corresponding points on the curve with straight lines.   Estimating using three subintervals and trapezoids, rather than rectangles. Source:  Active Calculus, Boelkins .   An illustration of the Trapezoidal Rule.    The biggest difference between the Trapezoid Rule and a Riemann sum is that on each subinterval, the Trapezoid Rule uses two function values, rather than one, to estimate the (signed) area bounded by the curve. For instance, to compute , the area of the trapezoid on shown in , we observe that the left base has length , while the right base has length . The height of the trapezoid is . The area of a trapezoid is the average of the bases times the height, so we have  Using similar computations for and , we find that , the trapezoidal approximation to using trapezoids is given by  One way to rearrange this sum is to write it as   That is, is the average of the left Riemann sum and the right Riemann sum . This generalizes to trapezoids as well. We write this observation mathematically as   A second way to rearrange the sum is to write it as   This also generalizes to trapezoids to yield   Implementing the Trapezoidal Rule  We use the Trapezoid Rule with to estimate .   estimates the area under on .      One method of computing is to average and (the left and right Riemann sums). With , we see that and making .  A second method of computing is via the formula   Using a Sounding and the Trapezoid Rule to Estimate CAPE Use the sounding from to estimate CAPE by finding , an approximation to . That is, apply the Trapezoid Rule using trapezoids.   The Trapezoid Rule gives J\/kg. It should be noted that this value is the exact area below shown in .     Simpson's Rule  The Trapezoid Rule is an average of the Left and Right Riemann sums: If a function is always increasing or always decreasing on the interval , one of and will over-estimate the true value of , while the other will under-estimate the integral. Thus, the errors that result from and will have opposite signs; so averaging and eliminates a considerable amount of the error present in the respective approximations. In a similar way, it makes sense to think about averaging and in order to generate a still more accurate approximation. Since is typically about twice as accurate as , we call the weighted average  Simpson's Rule Simpson's Rule . Note that we use `` \" rather than `` \" since the points the Midpoint Rule uses are different from the points the Trapezoid Rule uses, and thus Simpson's Rule is using points at which to evaluate the function.   Estimating CAPE using Simpson's Rule  In we estimated the value of CAPE using the Midpoint Rule and data from a sounding. We found . If we expand this data set (as in ) from the sounding, we can then also estimate .  More sounding data used to estimate CAPE in    Height  (km)       )   )    5  -2.5  -7.5  270.5  265.5    6  -15  -20  258  253    7  -17.5  -30  255.5  243    8  -25  -35  248  238    9  -35  -40  238  233    Here, Simpson's Rule then gives       Exercises  Computing a Right Riemann Sum Graphically  Computing a Left Riemann Sum Graphically  Estimate Distance Traveled  Approximating Area Under a Quadratic Using the Midpoint Rule  Approximating Area Under a Quadratic Using the Trapezoidal Rule  Applying Simpson's Rule   May 3, 1999 sounding from Norman, Oklahoma  In this exercise you will analyze the Norman, Oklahoma sounding from May 3, 1999 in   May 3, 1999 sounding from Norman, Oklahoma. Source: NOAA (then edited at Mustansiriyah University, Iraq) .   May 3, 1999 sounding from Norman, Oklahoma.     Determine the atmospheric pressure at the LFC (the level of free convection).  Determine the height , in meters, of the LFC.  Determine the height of the EL (equilibrium level).  For , fill in . Use units of meters for elevation and units of Kelvin for and .  May 3, 1999 Norman, Oklahoma sounding data    Pressure  (mb)  Elevation  (m)  Parcel Temp.  ( )   Env. Temp.  ( )      700        600        500        400        300        250         What are the units for the values of in ?  Estimate the value of CAPE, , by using a left Riemann sum . Remember to label the result with appropriate units.  Estimate the value of CAPE by using a right Riemann sum .  Estimate the value of CAPE using the trapezoidal rule .  Based on your estimated CAPE, characterize stability as either (1) marginally unstable, (2) moderately unstable, (3) very unstable, or (4) extremely unstable.     700 mb  3000 meters  200 mb or 10,500 meters   May 3, 1999 Norman, Oklahoma sounding data    Pressure  (mb)  Elevation  (m)  Parcel Temp.  ( )   Env. Temp.  ( )      700  3000    0    600  4500    0.222    500  6000    0.114    400  7500    0.114    300  9000    0.215    250  10,500    0     meters per second squared   (or  (or )  marginally to moderately unstable    August 2020 Midwest Derecho  August 10-11, 2020 saw a powerful derecho affecting eastern Nebraska, Iowa, Illinois, Wisconsin, and Indiana. It caused high winds and spawned an outbreak of weak tornadoes. Attached is the 00Z skew-T log-P diagram and radiosonde data for Omaha from August 10, 2020.   Download Skew-T log-p diagram (.pdf)  Download radiosonde data from Omaha (.pdf)    Identify the LCL.  Identify the LFC and the EL.  Complete . Use the skew-T log-P diagram and data to estimate values.  Data used in estimating CAPE for the Omaha sounding    Pressure  (mb)  Elevation  (m)  Parcel Temp.  ( )   Env. Temp.  ( )      3600 m       5200 m       6800 m       8400 m       10,000 m       11,600 m       13,200 m        Convert the temperatures in to Kelvin ( ). Then, define and compute these values in the last column.  Structuring data used in estimating CAPE for the Omaha sounding    Elevation  (m)  ( )  ( )      3600 m       5200 m       6800 m       8400 m       10,000 m       11,600 m       13,200 m         Estimate the value of by calculating the value of . That is, use 6 trapezoids. Then, using the same data, calculate . Be sure to include units.  Estimate the value of by calculating the value of . That is, apply the Midpoint Rule using 3 rectangles.  Use Simpson's Rule to estimate CAPE by calculating . How close is your value to the CAPE value shown on the skew-T?      Approximately 850 mb or 1500 m  The LFC is at approximately 650 mb or 3600 m. The EL is at approximately 175 mb or 13,200 m.    Values used to estimate CAPE for the Omaha sounding    Pressure  (mb)  Elevation  (m)  Parcel Temp.  ( )   Env. Temp.  ( )     650 mb  3600 m  10  10    545 mb  5200 m  2  -5    440 mb  6800 m  -7  -15    350 mb  8400 m  -17  -27    290 mb  10,000 m  -27  -38    225 mb  11,600 m  -43  -49    175 mb  13,200 m  -57  -57        Data used in estimating CAPE for the Omaha sounding    Elevation  (m)  ( )  ( )      3600 m  283  283  0    5200 m  275  268  0.256    6800 m  266  258  0.304    8400 m  256  246  0.319    10,000 m  246  235  0.459    11,600 m  227  224  0.131    13,200 m  216  216  0      ;   or     July 27, 2023 Minneapolis CAPE  A severe thunderstorm watch was issued for Minneapolis for the evening of July 27, 2023. As can be seen below on the 12Z skew-T log-P diagram for MPX, there was CAPE. Data from this sounding can be found on an associated Excel spreadsheet below.   Download Skew-T log-p diagram for MPX (.pdf)  Download Skew-T log-p diagram for MPX (.xlsx)   Assume an LFC at about 2950 meters and an EL at about 12,950 meters.   Define and complete . Units of temperature should be Kelvin. Use the skew-T log-P diagram to estimate the parcel temperatures and a combination of the skew-T log-P diagram and values from the sounding to estimate the environmental temperatures.  July 27, 2023 12Z MPX sounding    Elevation  (m)  Parcel Temp.  ( )   Env. Temp.  ( )      2950       4200       5450       6700       7950       9200       10450       11700       12950         Use the Midpoint Rule to estimate the value of by calculating . How does this compare to the value of CAPE given on the skew-T?  Use Simpson's Rule to estimate CAPE by computing .      July 27, 2023 12Z MPX sounding data    Elevation  (m)  Parcel Temp.  ( )   Env. Temp.  ( )      2950     0    4200    0.178    5450    0.333    6700     0.383    7950    0.396    9200    0.453    10450    0.427    11700    0.219    12950    0      . This is fairly close to the reported CAPE of 3005.  First, note that  Then, using the fact that we computed in (b), we have that .    July 28, 2023 Davenport Sounding A skew-T log-p diagram for Davenport, IA (00Z, July 28, 2023) and the raw data that created it are found in the links below.   Download Skew-T log-p diagram (.pdf)  Download raw data from Davenport sounding (.pdf)   In this exercise, we will use pressure coordinates (rather than height ) to measure CAPE. In this case, where is the gas constant of dry air, is the pressure at the equilibrium level, and is the pressure at the level of free convection.   Estimate the pressure at which the LCL occurs.  Estimate the pressures at which the LFC and the EL occur.  Complete . Use the skew-T log-P diagram and data to estimate values. Here .  Data used in estimating CAPE for the Davenport sounding    Pressure  (mb)  Parcel Temp.  ( )   Env. Temp.  ( )      680       580       480       380       280       180         Estimate the value of by calculating the value of . That is, use 5 trapezoids. Be sure to include units. Note: Given this table of values, each trapezoid has a different width - not the difference of pressures but the difference of the logs of two pressures.      850 mb  mb and mb    Data calculated to estimate CAPE for the Davenport sounding    Pressure  (mb)  Parcel Temp.  ( )   Env. Temp.  ( )      680  285  285  0    580  278  273  1473    480  271  263  2296    380  259  253  1722    280  245  235  2870    180  221  221  0      We use the sum     "
},
{
  "id": "sec_CAPE-2",
  "level": "2",
  "url": "sec_CAPE.html#sec_CAPE-2",
  "type": "Motivating Questions",
  "number": "1.1",
  "title": "",
  "body": "   What is CAPE and how it is used to predict the potential for severe weather?    How do Riemann sums, the Trapezoid Rule, and Simpson's Rule relate to calculating CAPE?    "
},
{
  "id": "sec_CAPE-3-1",
  "level": "2",
  "url": "sec_CAPE.html#sec_CAPE-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "CAPE "
},
{
  "id": "sec_CAPE-4-2",
  "level": "2",
  "url": "sec_CAPE.html#sec_CAPE-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lifting Condensation Level (LCL) Level of Free Convection (LFC) "
},
{
  "id": "sec_CAPE-4-3",
  "level": "2",
  "url": "sec_CAPE.html#sec_CAPE-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Equilibrium Level (EL) "
},
{
  "id": "CAPEviaSounding",
  "level": "2",
  "url": "sec_CAPE.html#CAPEviaSounding",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " CAPE is the (positive) area between the environmental temperature and the moist adiabat on a skew-T diagram. CAPE is bounded below by the LFC and above by the EL. CIN is the (negative) area between the environmental temperature and the adiabat. It is bounded above by the LFC. Source: www.weather.gov .   An illustration of CAPE and CIN on a thermodynamic chart.   "
},
{
  "id": "CAPEValues",
  "level": "2",
  "url": "sec_CAPE.html#CAPEValues",
  "type": "Table",
  "number": "1.1.2",
  "title": "Interpreting CAPE values",
  "body": " Interpreting CAPE values    CAPE  Interpretation    0001-1000 J\/kg  Marginally (Weakly) Unstable    1000-2500 J\/kg  Moderately Unstable    2500-3500 J\/kg  Very Unstable    3500 J\/kg and higher  Extremely Unstable    "
},
{
  "id": "sec_CAPE-4-6",
  "level": "2",
  "url": "sec_CAPE.html#sec_CAPE-4-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "CIN (Convective Inhibition) "
},
{
  "id": "CAPEasIntegral",
  "level": "2",
  "url": "sec_CAPE.html#CAPEasIntegral",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " CAPE and CIN as a definite integrals. Source: Fovell (UCLA), ATM 562 .   CAPE and CIN illustrated as a definite integral.   "
},
{
  "id": "sec_CAPE-5-2",
  "level": "2",
  "url": "sec_CAPE.html#sec_CAPE-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": ""
},
{
  "id": "RiemannSumsIllustrate",
  "level": "2",
  "url": "sec_CAPE.html#RiemannSumsIllustrate",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " Left, right, and middle Riemann sums ( , and respectively) for on with 5 subintervals. Source:  Active Calculus, Boelkins .   Left, Right, and Middle Riemann sums illustrated for the function .   "
},
{
  "id": "Choosingn",
  "level": "2",
  "url": "sec_CAPE.html#Choosingn",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": " Subdividing the interval into subintervals of equal length . Source:  Active Calculus, Boelkins .   A subdivision of the interval [a,b] into n segments.   "
},
{
  "id": "LeftRiemannSum",
  "level": "2",
  "url": "sec_CAPE.html#LeftRiemannSum",
  "type": "Figure",
  "number": "1.1.6",
  "title": "",
  "body": " Approximating the area under over using a left Riemann sum, . Source:  Active Calculus, Boelkins .   An illustration of a left Riemann Sum.   "
},
{
  "id": "RiemannSumsRandM",
  "level": "2",
  "url": "sec_CAPE.html#RiemannSumsRandM",
  "type": "Figure",
  "number": "1.1.7",
  "title": "",
  "body": " Approximating the area under over using a right and middle Riemann sums, and . Source:  Active Calculus, Boelkins .   An illustration of a right and middle Riemann Sum.   "
},
{
  "id": "FirstCAPEexample",
  "level": "2",
  "url": "sec_CAPE.html#FirstCAPEexample",
  "type": "Example",
  "number": "1.1.8",
  "title": "Computing CAPE using the Midpoint Rule.",
  "body": " Computing CAPE using the Midpoint Rule  In (height) coordinates, CAPE can be found by the definite integral where is the air parcel temperature (in ) at height km, is the environmental temperature (in ) at height km, is the gravitational constant (9.8 ), and and are the heights of the level of free convection and equilibrium level respectively.  From a sounding, suppose we know that km, km, and we know the information from   Sounding data used in estimating CAPE    Height  (km)  (  (  ( )  ( )    5.5  -5  -15  268  258    6.5  -10  -25  263  248    7.5  -20  -40  253  243    8.5  -25  -40  248  233     Defining , we find CAPE by estimating . Computing a midpoint sum , as illustrated in , provides us a reasonable estimate.   Using a midpoint sum to estimate the area under on .       "
},
{
  "id": "ez-UseSoundingFindM4",
  "level": "2",
  "url": "sec_CAPE.html#ez-UseSoundingFindM4",
  "type": "Checkpoint",
  "number": "1.1.11",
  "title": "Use a Sounding and a Right Sum to Estimate CAPE.",
  "body": "Use a Sounding and a Right Sum to Estimate CAPE Use the sounding in and the right sum to estimate CAPE.   A sounding. The green curve is dewpoint temperature. The red curve is environmental temperature. The black curve is the temperature of an air parcel. Source:  www.wikiwand.com CC BY-SA 4.0.   A sounding illustrating CAPE which is to be calculated.     The LFC for this sounding appears to be at roughly 500 meters and the EL appears to be at roughly 1250 meters. Using km, we can construct the values found in .   Sounding data used to estimating CAPE in    Height  (km)       )   )    0.5  23  23  296  296    2.5  10  -7  283  266    4.5  -1  -17  272  256    6.5  -16  -22  257  251    8.5  -28  -37  245  236    10.5  -46  -51  227  222    12.5  -58  -58  215  215     We use a right Riemann sum, , to estimate To simplify, we define .   This right Riemann sum is illustrated in .   Using a right Riemann sum to estimate the area under on .      "
},
{
  "id": "sec_CAPE-6-2",
  "level": "2",
  "url": "sec_CAPE.html#sec_CAPE-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Trapezoid Rule "
},
{
  "id": "TrapRulePic",
  "level": "2",
  "url": "sec_CAPE.html#TrapRulePic",
  "type": "Figure",
  "number": "1.1.15",
  "title": "",
  "body": " Estimating using three subintervals and trapezoids, rather than rectangles. Source:  Active Calculus, Boelkins .   An illustration of the Trapezoidal Rule.   "
},
{
  "id": "TrapezoidBadExample",
  "level": "2",
  "url": "sec_CAPE.html#TrapezoidBadExample",
  "type": "Example",
  "number": "1.1.16",
  "title": "Implementing the Trapezoidal Rule.",
  "body": " Implementing the Trapezoidal Rule  We use the Trapezoid Rule with to estimate .   estimates the area under on .      One method of computing is to average and (the left and right Riemann sums). With , we see that and making .  A second method of computing is via the formula  "
},
{
  "id": "ez-Sounding_Trapezoid_Rule",
  "level": "2",
  "url": "sec_CAPE.html#ez-Sounding_Trapezoid_Rule",
  "type": "Checkpoint",
  "number": "1.1.18",
  "title": "Using a Sounding and the Trapezoid Rule to Estimate CAPE.",
  "body": "Using a Sounding and the Trapezoid Rule to Estimate CAPE Use the sounding from to estimate CAPE by finding , an approximation to . That is, apply the Trapezoid Rule using trapezoids.   The Trapezoid Rule gives J\/kg. It should be noted that this value is the exact area below shown in .  "
},
{
  "id": "sec_CAPE-7-2",
  "level": "2",
  "url": "sec_CAPE.html#sec_CAPE-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Simpson's Rule "
},
{
  "id": "CAPEviaSimpsonsRule",
  "level": "2",
  "url": "sec_CAPE.html#CAPEviaSimpsonsRule",
  "type": "Example",
  "number": "1.1.19",
  "title": "Estimating CAPE using Simpson’s Rule.",
  "body": " Estimating CAPE using Simpson's Rule  In we estimated the value of CAPE using the Midpoint Rule and data from a sounding. We found . If we expand this data set (as in ) from the sounding, we can then also estimate .  More sounding data used to estimate CAPE in    Height  (km)       )   )    5  -2.5  -7.5  270.5  265.5    6  -15  -20  258  253    7  -17.5  -30  255.5  243    8  -25  -35  248  238    9  -35  -40  238  233    Here, Simpson's Rule then gives   "
},
{
  "id": "ez-rightendpointgraphical",
  "level": "2",
  "url": "sec_CAPE.html#ez-rightendpointgraphical",
  "type": "Exercise",
  "number": "1.1.5.1",
  "title": "Computing a Right Riemann Sum  Graphically.",
  "body": "Computing a Right Riemann Sum Graphically "
},
{
  "id": "ez-leftendpointgraphical",
  "level": "2",
  "url": "sec_CAPE.html#ez-leftendpointgraphical",
  "type": "Exercise",
  "number": "1.1.5.2",
  "title": "Computing a Left Riemann Sum Graphically.",
  "body": "Computing a Left Riemann Sum Graphically "
},
{
  "id": "ez-distancetraveledchartleftrightmid",
  "level": "2",
  "url": "sec_CAPE.html#ez-distancetraveledchartleftrightmid",
  "type": "Exercise",
  "number": "1.1.5.3",
  "title": "Estimate Distance Traveled.",
  "body": "Estimate Distance Traveled "
},
{
  "id": "ez-midpointrulequadratic",
  "level": "2",
  "url": "sec_CAPE.html#ez-midpointrulequadratic",
  "type": "Exercise",
  "number": "1.1.5.4",
  "title": "Approximating Area Under a Quadratic Using the Midpoint Rule.",
  "body": "Approximating Area Under a Quadratic Using the Midpoint Rule "
},
{
  "id": "ez-trapezoidrulequadratic",
  "level": "2",
  "url": "sec_CAPE.html#ez-trapezoidrulequadratic",
  "type": "Exercise",
  "number": "1.1.5.5",
  "title": "Approximating Area Under a Quadratic Using the Trapezoidal Rule.",
  "body": "Approximating Area Under a Quadratic Using the Trapezoidal Rule "
},
{
  "id": "ez-mathysimpsonsrule",
  "level": "2",
  "url": "sec_CAPE.html#ez-mathysimpsonsrule",
  "type": "Exercise",
  "number": "1.1.5.6",
  "title": "Applying Simpson’s Rule.",
  "body": "Applying Simpson's Rule "
},
{
  "id": "ez-Norman1999-Sounding",
  "level": "2",
  "url": "sec_CAPE.html#ez-Norman1999-Sounding",
  "type": "Exercise",
  "number": "1.1.5.7",
  "title": "May 3, 1999 sounding from Norman, Oklahoma.",
  "body": "May 3, 1999 sounding from Norman, Oklahoma  In this exercise you will analyze the Norman, Oklahoma sounding from May 3, 1999 in   May 3, 1999 sounding from Norman, Oklahoma. Source: NOAA (then edited at Mustansiriyah University, Iraq) .   May 3, 1999 sounding from Norman, Oklahoma.     Determine the atmospheric pressure at the LFC (the level of free convection).  Determine the height , in meters, of the LFC.  Determine the height of the EL (equilibrium level).  For , fill in . Use units of meters for elevation and units of Kelvin for and .  May 3, 1999 Norman, Oklahoma sounding data    Pressure  (mb)  Elevation  (m)  Parcel Temp.  ( )   Env. Temp.  ( )      700        600        500        400        300        250         What are the units for the values of in ?  Estimate the value of CAPE, , by using a left Riemann sum . Remember to label the result with appropriate units.  Estimate the value of CAPE by using a right Riemann sum .  Estimate the value of CAPE using the trapezoidal rule .  Based on your estimated CAPE, characterize stability as either (1) marginally unstable, (2) moderately unstable, (3) very unstable, or (4) extremely unstable.     700 mb  3000 meters  200 mb or 10,500 meters   May 3, 1999 Norman, Oklahoma sounding data    Pressure  (mb)  Elevation  (m)  Parcel Temp.  ( )   Env. Temp.  ( )      700  3000    0    600  4500    0.222    500  6000    0.114    400  7500    0.114    300  9000    0.215    250  10,500    0     meters per second squared   (or  (or )  marginally to moderately unstable   "
},
{
  "id": "ez-Midwest-Derecho",
  "level": "2",
  "url": "sec_CAPE.html#ez-Midwest-Derecho",
  "type": "Exercise",
  "number": "1.1.5.8",
  "title": "August 2020 Midwest Derecho.",
  "body": "August 2020 Midwest Derecho  August 10-11, 2020 saw a powerful derecho affecting eastern Nebraska, Iowa, Illinois, Wisconsin, and Indiana. It caused high winds and spawned an outbreak of weak tornadoes. Attached is the 00Z skew-T log-P diagram and radiosonde data for Omaha from August 10, 2020.   Download Skew-T log-p diagram (.pdf)  Download radiosonde data from Omaha (.pdf)    Identify the LCL.  Identify the LFC and the EL.  Complete . Use the skew-T log-P diagram and data to estimate values.  Data used in estimating CAPE for the Omaha sounding    Pressure  (mb)  Elevation  (m)  Parcel Temp.  ( )   Env. Temp.  ( )      3600 m       5200 m       6800 m       8400 m       10,000 m       11,600 m       13,200 m        Convert the temperatures in to Kelvin ( ). Then, define and compute these values in the last column.  Structuring data used in estimating CAPE for the Omaha sounding    Elevation  (m)  ( )  ( )      3600 m       5200 m       6800 m       8400 m       10,000 m       11,600 m       13,200 m         Estimate the value of by calculating the value of . That is, use 6 trapezoids. Then, using the same data, calculate . Be sure to include units.  Estimate the value of by calculating the value of . That is, apply the Midpoint Rule using 3 rectangles.  Use Simpson's Rule to estimate CAPE by calculating . How close is your value to the CAPE value shown on the skew-T?      Approximately 850 mb or 1500 m  The LFC is at approximately 650 mb or 3600 m. The EL is at approximately 175 mb or 13,200 m.    Values used to estimate CAPE for the Omaha sounding    Pressure  (mb)  Elevation  (m)  Parcel Temp.  ( )   Env. Temp.  ( )     650 mb  3600 m  10  10    545 mb  5200 m  2  -5    440 mb  6800 m  -7  -15    350 mb  8400 m  -17  -27    290 mb  10,000 m  -27  -38    225 mb  11,600 m  -43  -49    175 mb  13,200 m  -57  -57        Data used in estimating CAPE for the Omaha sounding    Elevation  (m)  ( )  ( )      3600 m  283  283  0    5200 m  275  268  0.256    6800 m  266  258  0.304    8400 m  256  246  0.319    10,000 m  246  235  0.459    11,600 m  227  224  0.131    13,200 m  216  216  0      ;   or    "
},
{
  "id": "ez-MPX2023-Sounding",
  "level": "2",
  "url": "sec_CAPE.html#ez-MPX2023-Sounding",
  "type": "Exercise",
  "number": "1.1.5.9",
  "title": "July 27, 2023 Minneapolis CAPE.",
  "body": "July 27, 2023 Minneapolis CAPE  A severe thunderstorm watch was issued for Minneapolis for the evening of July 27, 2023. As can be seen below on the 12Z skew-T log-P diagram for MPX, there was CAPE. Data from this sounding can be found on an associated Excel spreadsheet below.   Download Skew-T log-p diagram for MPX (.pdf)  Download Skew-T log-p diagram for MPX (.xlsx)   Assume an LFC at about 2950 meters and an EL at about 12,950 meters.   Define and complete . Units of temperature should be Kelvin. Use the skew-T log-P diagram to estimate the parcel temperatures and a combination of the skew-T log-P diagram and values from the sounding to estimate the environmental temperatures.  July 27, 2023 12Z MPX sounding    Elevation  (m)  Parcel Temp.  ( )   Env. Temp.  ( )      2950       4200       5450       6700       7950       9200       10450       11700       12950         Use the Midpoint Rule to estimate the value of by calculating . How does this compare to the value of CAPE given on the skew-T?  Use Simpson's Rule to estimate CAPE by computing .      July 27, 2023 12Z MPX sounding data    Elevation  (m)  Parcel Temp.  ( )   Env. Temp.  ( )      2950     0    4200    0.178    5450    0.333    6700     0.383    7950    0.396    9200    0.453    10450    0.427    11700    0.219    12950    0      . This is fairly close to the reported CAPE of 3005.  First, note that  Then, using the fact that we computed in (b), we have that .   "
},
{
  "id": "ez-Davenport-Sounding",
  "level": "2",
  "url": "sec_CAPE.html#ez-Davenport-Sounding",
  "type": "Exercise",
  "number": "1.1.5.10",
  "title": "July 28, 2023 Davenport Sounding.",
  "body": "July 28, 2023 Davenport Sounding A skew-T log-p diagram for Davenport, IA (00Z, July 28, 2023) and the raw data that created it are found in the links below.   Download Skew-T log-p diagram (.pdf)  Download raw data from Davenport sounding (.pdf)   In this exercise, we will use pressure coordinates (rather than height ) to measure CAPE. In this case, where is the gas constant of dry air, is the pressure at the equilibrium level, and is the pressure at the level of free convection.   Estimate the pressure at which the LCL occurs.  Estimate the pressures at which the LFC and the EL occur.  Complete . Use the skew-T log-P diagram and data to estimate values. Here .  Data used in estimating CAPE for the Davenport sounding    Pressure  (mb)  Parcel Temp.  ( )   Env. Temp.  ( )      680       580       480       380       280       180         Estimate the value of by calculating the value of . That is, use 5 trapezoids. Be sure to include units. Note: Given this table of values, each trapezoid has a different width - not the difference of pressures but the difference of the logs of two pressures.      850 mb  mb and mb    Data calculated to estimate CAPE for the Davenport sounding    Pressure  (mb)  Parcel Temp.  ( )   Env. Temp.  ( )      680  285  285  0    580  278  273  1473    480  271  263  2296    380  259  253  1722    280  245  235  2870    180  221  221  0      We use the sum   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
