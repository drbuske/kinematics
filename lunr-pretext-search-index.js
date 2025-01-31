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
  "id": "sec_fourier_series",
  "level": "1",
  "url": "sec_fourier_series.html",
  "type": "Section",
  "number": "2.1",
  "title": "Sinusoids",
  "body": " Sinusoids     How can we use a sine function to model periodic behavior?    How can we fit the `best` sine curve to discrete, periodic data?      Often, meteorological phenomena exhibit periodicity or near periodicity. We see it in both annual and daily temperature data. The number of hours of sunlight at a given point on the planet is periodic. The spherical shape of a spinning planet that rotates around the sun leads to measurements that are near periodic.  In this section, we investigate the use of a sinusoid sinusoid to model periodic data.    Sinusoids  What is a sinusoid? Simply put, it is sine curve that has been transformed by shifting or stretching.   A general sinusoid is a transformation of the sine function . Source: https:\/\/www.omnicalculator.com\/math\/phase-shift    A general sinusoid.    The amplitude amplitude  of a sinusoid is half the distance from the maximum height to the minimum height. That is, the amplitude is the distance from the horizontal midline to the vertical peak. The period period  is the length of time before the curve repeats or cycles. The angular frequency angular frequency  is the number of full cycles that occur in (radians). It is related to the period by . The phase shift phase shift  tells us how far the graph is shifted horizontally from the sine graph having period . Finally, the vertical shift vertical shift  is how much the graph has been shifted up or down.   A sinusoid  A general sinusoid of amplitude , angular frequency , phase shift , and vertical shift is the graph of    Identifying the Amplitude, Period, Frequency, and Vertical Shift For each of the following sinusoids, identify the amplitude , the period , the angular frequency , and the vertical shift .             , , ,    , , ,       Identifying the Phase Shift Identify the phase shift in the sinusoid shown in .   The graph of a sinusoid with unknown phase shift.   Identify the phase shift.     The phase shift is .    Day Lengths  The length of day at various dates during each year are given in .   Data from https:\/\/www.orchidculture.com\/COD\/daylength.html .   Length of day at various dates of the year.    Using to represent January 1, to represent January 16, to represent February 1, and so on, we can place this data in a spreadsheet ( ) and plot these values. See .   Left: Ordered pairs in a spreadsheet. Right: A plot of the ordered pairs .       Plotting this data over the course of three years demonstrates just how much this looks like the graph of a sine or cosine function. That is, if represents the hours of daylight during day , it seems reasonable to believe that for some constants , , , and . These constants are used to modify the amplitude , vertical shift , frequency , and phase shift of a standard sine function .   Three years of the daylight data illustrates its periodic nature.   Three years of daylight data plotted.    Perhaps unsurprisingly, it appears that the vertical shift for this function appears to be hours. That is, appears to be the average height of the data. In fact, for any similar periodic data set, we can determine the vertical shift by simply determining the average of such uniformly spaced data values. That is, for data values , we can calculate the value of the vertical shift as Indeed, if we average these data values, we find that . For simplicity, we will take .  The amplitude of a sinusoid is half of the distance from peak to trough. Seeing the middle of the data is at a height of 12, we can eyeball the amplitude as being roughly hours. A more quantitative approach would be to calculate half the difference of the maximum -value and the minimum -value in the data. In this case, we get This is roughly what we eyeballed. However, we know well that the longest and shortest days of the year, the summer and winter solstices, are not represented in the data. So this is clearly only an estimate. In the next section, we will see how we can use all of the data to provide an improved estimate of the amplitude. For now, we will simply take hours.  The period of the natural sine and cosine functions, and , is . That is, these functions repeat themselves on every interval of length . The frequency of a sinusoid is thus given by where is the period. For the daylight data, it is clear that our function has period days. From this, we calculate the frequency to be .  Does fit the data fairly well? It has the right amplitude, the right frequency and period, and the right vertical shift. However, if we plot this model against the original data ( ), it is obviously ``out of phase\". That is, a horizontal shift is needed to align our model with the data.   The daylight data compared to the model appears to be out of phase.   A model that is out of phase.    How do we determine the horizontal shift needed for the model to better match the data? One way would be to compare where (at what day ) the maximum of both the data and the model occur. In the case of the data, we all know the longest day of the year occurs at the summer solstice in June which coincides with . On the other hand, the function has a maximum value occurring when . Solving for gives . To adjust our model so that the peak occurs at days rather than days requires a horizontal (phase) shift to the right of days. To do this, we replace the variable with : From this, we see that with phase shift days.   The daylight data compared to our model that now includes a phase shift.   A model that is out of phase.      Calculating Daylight Model Parameters Using a Spreadsheet Parameters for amplitude and vertical shift can be calculated using given data found in a spreadsheet. In addition, a sinusoidal model can be plotted against the original data for visual confirmation of reasonable parameter choices yielding a best fit. For the daylight data found in ( ) we compute the vertical shift by determining the average of the values of daylight found in one period of column B. Since there are 24 values in one period of this data, we use the formula =SUM(B2:B25)\/24 or =AVERAGE(B2:B25) to complete this task. The daylight data in the spreadsheet returns a value of 11.99625 (see cell B75). To compute the amplitude from the data, we calculate half the distance from the maximum data value and the minimum data value. The formula =((MAX(B2:B25)-MIN(B2:B25))\/2 (as found in cell B76) does this task. To compare our calculated model to the data numerically and visually, we construct a column of values holding values of the model at the given times . For the daylight data, we calculate values for the model in column C by using the formula =$B$75 + $B$76*SIN(2*PI()\/365*(A2-79.75)) in cell C2 and copying that formula down column C. The absolute references of $B$75 and $B$76 are simply references to cells that hold our calculated values of the vertical shift and respectively. is then created using columns A, B, and C from the spreadsheet.   Average High Temperature in Fargo  The monthly average high temperature (in ) in Fargo, ND is another example of a periodic data set. We will use a spreadsheet to determine a sinusoidal model for this data. Note: Month corresponds to January.   Left: High temperature by month in a tabular format in a spreadsheet. Right: A plot of the average monthly high temperature in Fargo, ND.       The average of these 12 data values is . Half of the difference of the maximum and minimum average temperatures is . The period in this example is so that the frequency is . The model has a maximum when or months. Since the data has a maximum at months, our phase shift (e.g. ). This gives a final model of   The Fargo high temperature data compared to our model .   The Fargo high temperature data fit to a curve.     Note that we could have modeled the Fargo high temperature data in using a cosine function just as well. That is, rather than using a sinusoid of the form , we could employ one of the form for some constants , and . This is because the sine and cosine functions are the same function when horizontally shifted, i.e. .   The graph of is just a horizontal shift of the graph of .   Sine vs. Cosine.     If we use the trigonometric identity we can rewrite   Modifying the Hours of Daylight Model  Our model for hours of daylight at 45 degrees North latitude ( ) was given by where represents the number of days since the start of the year. Applying trigonometric identity gives That is, our sinusoid is now written as a linear combination of , , and a constant (which can be thought of as ).   Reversing the process found in is also possible. That is, any function written in the form can also be written in the form or and vice-versa. We now use this fact to discover another method for determining the equation of the best sinusoid to fit a set of data.    Least-squares Fit of a Sinusoid  The idea behind linear regression is to find the best line to fit a set of ordered pairs . That is, we seek to find optimal values of and so that best fits the data (in the sense of minimizing the `distance` from the line to the values in the data set. That is, we determine constants and so that is minimized. Using calculus (i.e. taking derivatives) provides optimal values as solutions to these equations: We can write this as a linear system of equations: The solution to this system of equations gives the values of and for the best line fitting the data.  Suppose rather than nearly linear data, we have nearly periodic data. Rather than using linear regression to fit the best line to the data, we will fit a model of the form  Our goal is to determine values of the coefficients , , and that minimize  As in linear regression, a linear system of equations (the so-called normal equations normal equations ) can be solved to determine optimal values of , and . As in , we can write this as a linear system:  Rather than solve this system for the unknown coefficients , and , we examine the special (though quite common) case where there are observations equally spaced at intervals of length and with a total length of (where the period as well). Then, we have since the average values of the sine and cosine functions over one period are 0. This means that in our normal equations . We can also compute the following three averages:  Thus, for equally spaced points , the normal equations become  The solution to the system in is easily found (see ) and we summarize the above discussion below.   Fitting a Sinusoid  The best sinusoid fitting  equally spaced points  has coefficients      Revisiting the Fargo Average High Temperature Data  Let's find a model of the form for the monthly average high temperature in Fargo as first seen in . The values of , and can be determined using . We find, via a spreadsheet to help with calculation, , , and . The result is similar, but not exactly the same, as we found earlier: A graph of this model and the original data appear in .   The Fargo high temperature data compared to our model .   The Fargo high temperature data fit using linear regression.        Exercises  Periodic?   Is the Table Periodic?  Calculate Future Values using the Period   Future Values using Periodic, Discrete Data  Period of Zig-Zag Pattern  Find Expression of Periodic Function Given Parameters  Identify Amplitude, Phase Shift, and Period  Identify Amplitude, Period, and Vertical Shift from Graph   Graph a Sinusoid of Period  Graph a Sinusoid  Range of Temperatures from a Sinusoid  Modeling Daily Temperature  Fitting Periodic Data using a Sinusoid   Sunless in Seattle  Seattle receives varying amounts of sun depending on the time of year. We can model the number of hours of sun as a sinusoid. Here represents the number of months after January. Data for each month is found in . is a graph of the sinusoid .   Hours of sun months after January in Seattle    Month   Hours of Sun     0  69    1  108    2  178    3  207    4  253    5  268    6  312    7  281    8  221    9  142    10  72    11  52      Hours of sun months after January in Seattle.   A graph of the number of hours of sun months after January in Seattle.     The sinusoid modeling the number of hours of sun that Seattle receives months after January has the form for constants , and . Determine the value of the period of this sinusoid and the value of the frequency .  Use the spreadsheet below to determine the values of and .  Download HoursOfSunSeattle (.xlsx)    Another way to write a sinusoid modeling this data would be in the form for constants , and .   In this format, the value of is just a vertical shift of . That is, is the average of the data. What is this value?  The value of , the amplitude, is half the range of the data. What is this value?  Estimate values for and the phase shift .  Use a trigonometric identify for to compare your answer in (c) to that found in (a). Hint: Your coefficients for sine and cosine should be similar; the constant should be the same.       months;  , ,      ;     The values of and are similar. The value of is off since the estimated phase shift is so crude. The shift is likely between 2 and 2.5.      Modeling Low Temperatures in Rio  Average monthly low temperatures in Rio de Janeiro are roughly periodic. We will fit a sinusoid to the data given in .   Average Monthly Low Temperatures in Rio De Janeiro    Month   Average Low Temperature     0  75    1  76    2  75    3  73    4  69    5  67    6  66    7  66    8  67    9  70    10  72    11  74     Assume that for some constants , , , and will be used to model the low temperature (in degrees Fahrenheit) months after January.   Determine the value of constant (the average low temperature over all months).  Use the data in to estimate the amplitude of this sinusoid .  Determine the period (in months) for periodic function . Then, determine the frequency .  Determine the value of the phase shift . In doing so, write an expression representing a model for the low temperature months after January in Rio de Janeiro.  Using a spreadsheet to visually verify the reasonableness of your model, superimpose both the data and values for your model each month in a single plot.     average of the 12 low temperatures   months; So  We compare where the maximum of both the data and the model occur. In the case of the data, we all know the longest day of the year occurs at the summer solstice in Rio in late December which coincides with . The function has a maximum value when or . To adjust our model so that the peak occurs at month rather than months requires a horizontal (phase) shift to the left of months (i.e. and ). To do this, we replace the variable with :  A graph of our model superimposed on the average monthly low temperature data for Rio de Janeiro appears in .  A graph of the average monthly low temperature in Rio de Janeiro and our model .   A graph of the average monthly low temperature in Rio de Janeiro against our model function .      Modeling Average Monthly Low and High for Saint Cloud, MN  Average monthly low and high temperatures in Saint Cloud are roughly periodic. In this exercise, we will fit a sinusoid to the data given in the spreadsheet below.   Download SinusoidStCloudTemps (.xlsx)   The low temperatures and the high temperatures (both in degrees Fahrenheit) in Saint Cloud can both be modeled using a sinusoid of the form for some constants , , , and where is a variable representing the number of months after January.   Determine the value of constant (the frequency).  Use the data in the spreadsheet to determine the values and so that models the low temperature in Saint Cloud months after January.  Repeat the process used in (b) to determine the values and so that models the high temperature in Saint Cloud months after January.  Use both spreadsheets to visually verify the reasonableness of your models. That is, plot both the data and values calculated from each model together.     since the period    A graph of the average low temperature in Saint Cloud against our model is found in . A graph of the average high temperature in Saint Cloud against our model is found in .  A graph of the average monthly low temperature in Saint Cloud against our model .   A graph of the average monthly low temperature in Saint Cloud against our model function .     A graph of the average monthly high temperature in Saint Cloud against our model .   A graph of the average monthly high temperature in Saint Cloud against our model function .        "
},
{
  "id": "sec_fourier_series-2",
  "level": "2",
  "url": "sec_fourier_series.html#sec_fourier_series-2",
  "type": "Motivating Questions",
  "number": "2.1",
  "title": "",
  "body": "   How can we use a sine function to model periodic behavior?    How can we fit the `best` sine curve to discrete, periodic data?    "
},
{
  "id": "sec_fourier_series-3-2",
  "level": "2",
  "url": "sec_fourier_series.html#sec_fourier_series-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sinusoid "
},
{
  "id": "GeneralSinusoid",
  "level": "2",
  "url": "sec_fourier_series.html#GeneralSinusoid",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " A general sinusoid is a transformation of the sine function . Source: https:\/\/www.omnicalculator.com\/math\/phase-shift    A general sinusoid.   "
},
{
  "id": "sec_fourier_series-4-4",
  "level": "2",
  "url": "sec_fourier_series.html#sec_fourier_series-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "amplitude period angular frequency phase shift vertical shift "
},
{
  "id": "ez-identifyAwTB",
  "level": "2",
  "url": "sec_fourier_series.html#ez-identifyAwTB",
  "type": "Checkpoint",
  "number": "2.1.2",
  "title": "Identifying the Amplitude, Period, Frequency, and Vertical Shift.",
  "body": "Identifying the Amplitude, Period, Frequency, and Vertical Shift For each of the following sinusoids, identify the amplitude , the period , the angular frequency , and the vertical shift .             , , ,    , , ,    "
},
{
  "id": "ez-identifyphaseshift",
  "level": "2",
  "url": "sec_fourier_series.html#ez-identifyphaseshift",
  "type": "Checkpoint",
  "number": "2.1.3",
  "title": "Identifying the Phase Shift.",
  "body": "Identifying the Phase Shift Identify the phase shift in the sinusoid shown in .   The graph of a sinusoid with unknown phase shift.   Identify the phase shift.     The phase shift is .  "
},
{
  "id": "DayLengths",
  "level": "2",
  "url": "sec_fourier_series.html#DayLengths",
  "type": "Example",
  "number": "2.1.5",
  "title": "Day Lengths.",
  "body": " Day Lengths  The length of day at various dates during each year are given in .   Data from https:\/\/www.orchidculture.com\/COD\/daylength.html .   Length of day at various dates of the year.    Using to represent January 1, to represent January 16, to represent February 1, and so on, we can place this data in a spreadsheet ( ) and plot these values. See .   Left: Ordered pairs in a spreadsheet. Right: A plot of the ordered pairs .       Plotting this data over the course of three years demonstrates just how much this looks like the graph of a sine or cosine function. That is, if represents the hours of daylight during day , it seems reasonable to believe that for some constants , , , and . These constants are used to modify the amplitude , vertical shift , frequency , and phase shift of a standard sine function .   Three years of the daylight data illustrates its periodic nature.   Three years of daylight data plotted.    Perhaps unsurprisingly, it appears that the vertical shift for this function appears to be hours. That is, appears to be the average height of the data. In fact, for any similar periodic data set, we can determine the vertical shift by simply determining the average of such uniformly spaced data values. That is, for data values , we can calculate the value of the vertical shift as Indeed, if we average these data values, we find that . For simplicity, we will take .  The amplitude of a sinusoid is half of the distance from peak to trough. Seeing the middle of the data is at a height of 12, we can eyeball the amplitude as being roughly hours. A more quantitative approach would be to calculate half the difference of the maximum -value and the minimum -value in the data. In this case, we get This is roughly what we eyeballed. However, we know well that the longest and shortest days of the year, the summer and winter solstices, are not represented in the data. So this is clearly only an estimate. In the next section, we will see how we can use all of the data to provide an improved estimate of the amplitude. For now, we will simply take hours.  The period of the natural sine and cosine functions, and , is . That is, these functions repeat themselves on every interval of length . The frequency of a sinusoid is thus given by where is the period. For the daylight data, it is clear that our function has period days. From this, we calculate the frequency to be .  Does fit the data fairly well? It has the right amplitude, the right frequency and period, and the right vertical shift. However, if we plot this model against the original data ( ), it is obviously ``out of phase\". That is, a horizontal shift is needed to align our model with the data.   The daylight data compared to the model appears to be out of phase.   A model that is out of phase.    How do we determine the horizontal shift needed for the model to better match the data? One way would be to compare where (at what day ) the maximum of both the data and the model occur. In the case of the data, we all know the longest day of the year occurs at the summer solstice in June which coincides with . On the other hand, the function has a maximum value occurring when . Solving for gives . To adjust our model so that the peak occurs at days rather than days requires a horizontal (phase) shift to the right of days. To do this, we replace the variable with : From this, we see that with phase shift days.   The daylight data compared to our model that now includes a phase shift.   A model that is out of phase.    "
},
{
  "id": "DaylightDataImplementExcel",
  "level": "2",
  "url": "sec_fourier_series.html#DaylightDataImplementExcel",
  "type": "Checkpoint",
  "number": "2.1.11",
  "title": "Calculating Daylight Model Parameters Using a Spreadsheet.",
  "body": "Calculating Daylight Model Parameters Using a Spreadsheet Parameters for amplitude and vertical shift can be calculated using given data found in a spreadsheet. In addition, a sinusoidal model can be plotted against the original data for visual confirmation of reasonable parameter choices yielding a best fit. For the daylight data found in ( ) we compute the vertical shift by determining the average of the values of daylight found in one period of column B. Since there are 24 values in one period of this data, we use the formula =SUM(B2:B25)\/24 or =AVERAGE(B2:B25) to complete this task. The daylight data in the spreadsheet returns a value of 11.99625 (see cell B75). To compute the amplitude from the data, we calculate half the distance from the maximum data value and the minimum data value. The formula =((MAX(B2:B25)-MIN(B2:B25))\/2 (as found in cell B76) does this task. To compare our calculated model to the data numerically and visually, we construct a column of values holding values of the model at the given times . For the daylight data, we calculate values for the model in column C by using the formula =$B$75 + $B$76*SIN(2*PI()\/365*(A2-79.75)) in cell C2 and copying that formula down column C. The absolute references of $B$75 and $B$76 are simply references to cells that hold our calculated values of the vertical shift and respectively. is then created using columns A, B, and C from the spreadsheet. "
},
{
  "id": "AvgHighTempFargo",
  "level": "2",
  "url": "sec_fourier_series.html#AvgHighTempFargo",
  "type": "Example",
  "number": "2.1.12",
  "title": "Average High Temperature in Fargo.",
  "body": " Average High Temperature in Fargo  The monthly average high temperature (in ) in Fargo, ND is another example of a periodic data set. We will use a spreadsheet to determine a sinusoidal model for this data. Note: Month corresponds to January.   Left: High temperature by month in a tabular format in a spreadsheet. Right: A plot of the average monthly high temperature in Fargo, ND.       The average of these 12 data values is . Half of the difference of the maximum and minimum average temperatures is . The period in this example is so that the frequency is . The model has a maximum when or months. Since the data has a maximum at months, our phase shift (e.g. ). This gives a final model of   The Fargo high temperature data compared to our model .   The Fargo high temperature data fit to a curve.    "
},
{
  "id": "sinevscosine",
  "level": "2",
  "url": "sec_fourier_series.html#sinevscosine",
  "type": "Figure",
  "number": "2.1.15",
  "title": "",
  "body": " The graph of is just a horizontal shift of the graph of .   Sine vs. Cosine.    "
},
{
  "id": "DaylightLinearCombo",
  "level": "2",
  "url": "sec_fourier_series.html#DaylightLinearCombo",
  "type": "Example",
  "number": "2.1.16",
  "title": "Modifying the Hours of Daylight Model.",
  "body": " Modifying the Hours of Daylight Model  Our model for hours of daylight at 45 degrees North latitude ( ) was given by where represents the number of days since the start of the year. Applying trigonometric identity gives That is, our sinusoid is now written as a linear combination of , , and a constant (which can be thought of as ).  "
},
{
  "id": "sec_fourier_series-5-5",
  "level": "2",
  "url": "sec_fourier_series.html#sec_fourier_series-5-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal equations "
},
{
  "id": "RevisitFargoData",
  "level": "2",
  "url": "sec_fourier_series.html#RevisitFargoData",
  "type": "Example",
  "number": "2.1.17",
  "title": "Revisiting the Fargo Average High Temperature Data.",
  "body": " Revisiting the Fargo Average High Temperature Data  Let's find a model of the form for the monthly average high temperature in Fargo as first seen in . The values of , and can be determined using . We find, via a spreadsheet to help with calculation, , , and . The result is similar, but not exactly the same, as we found earlier: A graph of this model and the original data appear in .   The Fargo high temperature data compared to our model .   The Fargo high temperature data fit using linear regression.    "
},
{
  "id": "ez-sinusoidgraph",
  "level": "2",
  "url": "sec_fourier_series.html#ez-sinusoidgraph",
  "type": "Exercise",
  "number": "2.1.3.1",
  "title": "Periodic?",
  "body": "Periodic? "
},
{
  "id": "ez-sinusoidtable",
  "level": "2",
  "url": "sec_fourier_series.html#ez-sinusoidtable",
  "type": "Exercise",
  "number": "2.1.3.2",
  "title": "Is the Table Periodic?",
  "body": "Is the Table Periodic? "
},
{
  "id": "ez-sinusoidextrapolate",
  "level": "2",
  "url": "sec_fourier_series.html#ez-sinusoidextrapolate",
  "type": "Exercise",
  "number": "2.1.3.3",
  "title": "Calculate Future Values using the Period.",
  "body": "Calculate Future Values using the Period "
},
{
  "id": "ez-sinusoidfinddiscretevalues",
  "level": "2",
  "url": "sec_fourier_series.html#ez-sinusoidfinddiscretevalues",
  "type": "Exercise",
  "number": "2.1.3.4",
  "title": "Future Values using Periodic, Discrete Data.",
  "body": "Future Values using Periodic, Discrete Data "
},
{
  "id": "ez-sinusoidzigzag",
  "level": "2",
  "url": "sec_fourier_series.html#ez-sinusoidzigzag",
  "type": "Exercise",
  "number": "2.1.3.5",
  "title": "Period of Zig-Zag Pattern.",
  "body": "Period of Zig-Zag Pattern "
},
{
  "id": "ez-sinusoididenifyf",
  "level": "2",
  "url": "sec_fourier_series.html#ez-sinusoididenifyf",
  "type": "Exercise",
  "number": "2.1.3.6",
  "title": "Find Expression of Periodic Function Given Parameters.",
  "body": "Find Expression of Periodic Function Given Parameters "
},
{
  "id": "ez-sinusoididenifyATphi",
  "level": "2",
  "url": "sec_fourier_series.html#ez-sinusoididenifyATphi",
  "type": "Exercise",
  "number": "2.1.3.7",
  "title": "Identify Amplitude, Phase Shift, and Period.",
  "body": "Identify Amplitude, Phase Shift, and Period "
},
{
  "id": "ez-graphofsinusoid",
  "level": "2",
  "url": "sec_fourier_series.html#ez-graphofsinusoid",
  "type": "Exercise",
  "number": "2.1.3.8",
  "title": "Identify Amplitude, Period, and Vertical Shift from Graph.",
  "body": "Identify Amplitude, Period, and Vertical Shift from Graph "
},
{
  "id": "ez-graphsinusoid1",
  "level": "2",
  "url": "sec_fourier_series.html#ez-graphsinusoid1",
  "type": "Exercise",
  "number": "2.1.3.9",
  "title": "Graph a Sinusoid of Period <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(2\\pi\\)<\/span>.",
  "body": "Graph a Sinusoid of Period "
},
{
  "id": "ez-graphsinusoid2",
  "level": "2",
  "url": "sec_fourier_series.html#ez-graphsinusoid2",
  "type": "Exercise",
  "number": "2.1.3.10",
  "title": "Graph a Sinusoid.",
  "body": "Graph a Sinusoid "
},
{
  "id": "ez-rangeoftemps",
  "level": "2",
  "url": "sec_fourier_series.html#ez-rangeoftemps",
  "type": "Exercise",
  "number": "2.1.3.11",
  "title": "Range of Temperatures from a Sinusoid.",
  "body": "Range of Temperatures from a Sinusoid "
},
{
  "id": "ez-modeltemps",
  "level": "2",
  "url": "sec_fourier_series.html#ez-modeltemps",
  "type": "Exercise",
  "number": "2.1.3.12",
  "title": "Modeling Daily Temperature.",
  "body": "Modeling Daily Temperature "
},
{
  "id": "ez-fitusingsinusoid",
  "level": "2",
  "url": "sec_fourier_series.html#ez-fitusingsinusoid",
  "type": "Exercise",
  "number": "2.1.3.13",
  "title": "Fitting Periodic Data using a Sinusoid.",
  "body": "Fitting Periodic Data using a Sinusoid "
},
{
  "id": "ez-SeattleSun",
  "level": "2",
  "url": "sec_fourier_series.html#ez-SeattleSun",
  "type": "Exercise",
  "number": "2.1.3.14",
  "title": "Sunless in Seattle.",
  "body": "Sunless in Seattle  Seattle receives varying amounts of sun depending on the time of year. We can model the number of hours of sun as a sinusoid. Here represents the number of months after January. Data for each month is found in . is a graph of the sinusoid .   Hours of sun months after January in Seattle    Month   Hours of Sun     0  69    1  108    2  178    3  207    4  253    5  268    6  312    7  281    8  221    9  142    10  72    11  52      Hours of sun months after January in Seattle.   A graph of the number of hours of sun months after January in Seattle.     The sinusoid modeling the number of hours of sun that Seattle receives months after January has the form for constants , and . Determine the value of the period of this sinusoid and the value of the frequency .  Use the spreadsheet below to determine the values of and .  Download HoursOfSunSeattle (.xlsx)    Another way to write a sinusoid modeling this data would be in the form for constants , and .   In this format, the value of is just a vertical shift of . That is, is the average of the data. What is this value?  The value of , the amplitude, is half the range of the data. What is this value?  Estimate values for and the phase shift .  Use a trigonometric identify for to compare your answer in (c) to that found in (a). Hint: Your coefficients for sine and cosine should be similar; the constant should be the same.       months;  , ,      ;     The values of and are similar. The value of is off since the estimated phase shift is so crude. The shift is likely between 2 and 2.5.     "
},
{
  "id": "ModelingLowTempRio",
  "level": "2",
  "url": "sec_fourier_series.html#ModelingLowTempRio",
  "type": "Exercise",
  "number": "2.1.3.15",
  "title": "Modeling Low Temperatures in Rio.",
  "body": "Modeling Low Temperatures in Rio  Average monthly low temperatures in Rio de Janeiro are roughly periodic. We will fit a sinusoid to the data given in .   Average Monthly Low Temperatures in Rio De Janeiro    Month   Average Low Temperature     0  75    1  76    2  75    3  73    4  69    5  67    6  66    7  66    8  67    9  70    10  72    11  74     Assume that for some constants , , , and will be used to model the low temperature (in degrees Fahrenheit) months after January.   Determine the value of constant (the average low temperature over all months).  Use the data in to estimate the amplitude of this sinusoid .  Determine the period (in months) for periodic function . Then, determine the frequency .  Determine the value of the phase shift . In doing so, write an expression representing a model for the low temperature months after January in Rio de Janeiro.  Using a spreadsheet to visually verify the reasonableness of your model, superimpose both the data and values for your model each month in a single plot.     average of the 12 low temperatures   months; So  We compare where the maximum of both the data and the model occur. In the case of the data, we all know the longest day of the year occurs at the summer solstice in Rio in late December which coincides with . The function has a maximum value when or . To adjust our model so that the peak occurs at month rather than months requires a horizontal (phase) shift to the left of months (i.e. and ). To do this, we replace the variable with :  A graph of our model superimposed on the average monthly low temperature data for Rio de Janeiro appears in .  A graph of the average monthly low temperature in Rio de Janeiro and our model .   A graph of the average monthly low temperature in Rio de Janeiro against our model function .     "
},
{
  "id": "ModelingLowHighTempStCloud",
  "level": "2",
  "url": "sec_fourier_series.html#ModelingLowHighTempStCloud",
  "type": "Exercise",
  "number": "2.1.3.16",
  "title": "Modeling Average Monthly Low and High for Saint Cloud, MN.",
  "body": "Modeling Average Monthly Low and High for Saint Cloud, MN  Average monthly low and high temperatures in Saint Cloud are roughly periodic. In this exercise, we will fit a sinusoid to the data given in the spreadsheet below.   Download SinusoidStCloudTemps (.xlsx)   The low temperatures and the high temperatures (both in degrees Fahrenheit) in Saint Cloud can both be modeled using a sinusoid of the form for some constants , , , and where is a variable representing the number of months after January.   Determine the value of constant (the frequency).  Use the data in the spreadsheet to determine the values and so that models the low temperature in Saint Cloud months after January.  Repeat the process used in (b) to determine the values and so that models the high temperature in Saint Cloud months after January.  Use both spreadsheets to visually verify the reasonableness of your models. That is, plot both the data and values calculated from each model together.     since the period    A graph of the average low temperature in Saint Cloud against our model is found in . A graph of the average high temperature in Saint Cloud against our model is found in .  A graph of the average monthly low temperature in Saint Cloud against our model .   A graph of the average monthly low temperature in Saint Cloud against our model function .     A graph of the average monthly high temperature in Saint Cloud against our model .   A graph of the average monthly high temperature in Saint Cloud against our model function .      "
},
{
  "id": "sec_trig_polynomials",
  "level": "1",
  "url": "sec_trig_polynomials.html",
  "type": "Section",
  "number": "2.2",
  "title": "Trigonometric Polynomials",
  "body": " Trigonometric Polynomials     Can multiple sinusoids with different frequencies be used to model arbitrary periodic functions?    How can a trigonometric polynomial be fit to periodic data?      The sum of any two sinusoids having the same frequency will again be a sinusoid. This new sinusoid may have different amplitude, phase shift, and vertical shift, but will have the same frequency .   Adding Two Sinusoids with the Same Frequency  Suppose (here, ) and (so that as well). Then is also a sinusoid with .   The sum of the sinusoid (in blue) and the sinusoid (in red) having a common frequency yield another sinusoid (in black) having frequency .   Adding two sinusoids with the same frequency.      However, the sum of two (or more) sinusoids having different frequencies will not be a sinusoid. It will be periodic. As we will see in the next section, it turns out that the key to modeling general periodic functions will be adding several sinusoids having different frequencies.   Adding Two Sinusoids with Different Frequencies  There is no single amplitude for the sum of and . So is periodic, but not a sinusoid.   The sum of the sinusoid (in blue) and the sinusoid (in red) having different frequencies and do not produce a sinusoid. The sum (in black) has no single amplitude.   Adding two sinusoids with the different frequencies.        Trigonometric Polynomials  Joseph Fourier showed that an arbitrary periodic function can be represented by an infinite series of sinusoids of harmonically related frequencies. For a function with period , a continuous Fourier series Fourier series can be written or more concisely as where is called the fundamental frequency fundamental frequency and its constant multiples , , , are called harmonics harmonics . We often say that expresses as a linear combination of basis functions basis functions : 1, , , , , , .  A finite sum of these sinusoids is called a trigonometric polynomial trigonometric polynomial . In general, a trigonometric polynomial has the form for some positive integer . Fitting a trigonometric polynomial that consists of several harmonics to periodic data to can prove valuable in practice. The method of doing this given below is found much like the same process used earlier to minimize to determine   Fitting a Trigonometric Polynomial to Data  Coefficients and  for which the trigonometric polynomial best fits the given equally spaced data , are given by    Fitting a Sinusoid to Geopotential Heights  At latitude, 500 mb geopotential heights as a function of degrees longitude (see ) are periodic with period . Our objective is to model using a trigonometric polynomial with (i.e. a sinusoid). In this situation the fundamental frequency is .   500 mb geopotential heights at as a function of degrees longitude . Data from November 10, 2023.   Geopotential heights at 45 degrees north as a function of longitude t.    When , we look for the best periodic function to fit the data . We compute: Thus, since , we model the geopotential heights by the sinusoid Plotting this function against our data illustrates the best fit we can make to this data without using additional harmonics , , , .   500 mb geopotential heights at as a function of degrees longitude and   Fitting a sinusoid to geopotential heights.      Fitting a Trigonometric Polynomial to Geopotential Heights  If we also use the second harmonic (i.e. take ) on the geopotential height data from , we then find the best periodic function of the form to fit the data. In addition to the values of , , and found earlier, we compute:   The resulting model, is no longer a sinusoid. However, it remains periodic and does appear to fit the data a bit better.   500 mb geopotential heights at modeled by   Geopotential heights at 45 degrees north as a function of longitude t and second harmonics.      Fitting Several Harmonics to Geopotential Heights  Using several more harmonics ( ) produces a fairly decent approximation to the geopotential height data from and .      500 mb geopotential heights at and a model using several harmonics.   Geopotential heights at 45 degrees north as a function of longitude t and several harmonics.        Exercises  Fitting Periodic Data using a Trigonometric Polynomial  Fitting Geopotential Height Data using a Trigonometric Polynomial  A Trigonometric Polynomial for Explain why a trigonometric polynomial for which is a sinusoid. When , a trigonometric polynomial has the form . The first term of is just a vertical shift by units. The last two terms have the same frequency and so they add to another sinusoid. It is only sinusoids with different frequencies that do not sum to another sinusoid (see and ).   Two sinusoids without phase shifts  shows a sum of two sinusoids without phase shifts: .   The sum of two mystery sinusoids without phase shifts.   The graph of a sum of two sinusoids having different frequencies.    We could write this function as an infinite trigonometric polynomial (called a Fourier series) but only two coefficients would be nonzero. Doing so would identify the two fundamental frequencies, and , present in the `signal'. Identify the two frequencies and by inspection of the graph. Hint: What two periods and do you see?   and . This is because so that and so that . If we take note that this means that all and are zero except and .   Geopotential Heights at on January 20, 2024 Data from ERDDAP representing 500 mb geopotential heights at on January 20, 2024 can be found in the spreadsheet . illustrates a plot of this periodic data. Here the horizontal axis represents degrees longitude east of the prime meridian and the vertical axis represents the 500 mb height .   500 mb geopotential heights at on January 20, 2024.   Geopotential heights at 45 degrees south as a function of longitude t.    The geopotential height at can be crudely modeled using a single sinusoid of the form for some constants , , , and where is a variable representing degrees east of the prime meridian.   Determine the period (with units) and the value of constant (the frequency).  Use the data in the spreadsheet to determine the values and so that models the 500 mb geopotential height at and degrees east of the prime meridian.  Use the spreadsheet to determine values of the additional coefficients and in the trigonometric polynomial  Use the spreadsheet to visually verify the reasonableness of your model above. That is, plot both the data and the calculated trigonometric polynomial .  Values of and ( ) for the trigonometric polynomial are given in . Use this to plot the trigonometric polynomial with these 5 harmonics against the original data. Your plot should resemble that in .  Coefficients and ( ) for the trigonometric polynomial fitting data in .         3  4.2532  48.8307    4  -17.4248  63.7954    5  1.4267  -65.9249      500 mb geopotential heights at on January 20, 2024 and a trigonometric polynomial using 5 harmonics.   Geopotential heights at 45 degrees south fit to a trig polynomial with five harmonics.       and    , , and    and   The trigonometric polynomial and the geopotential heights at on January 20, 2024 are shown in .  A trigonometric polynomial of degree 2 (having 5 terms) approximates the 500 mb geopotential heights at on January 1, 2024.   Geopotential heights at 45 degrees south on January 20, 2024 together with a trigonometric polynomial of degree 2 that approximates them.      Geopotential Heights at 35 on January 1, 2024  The geopotential heights (in meters above sea level) at 500 mb on a line of latitude at on January 1, 2024 are plotted in . This data was downloaded from this link at NOAA . Note that this data is periodic and only one period has been plotted in . A spreadsheet containing this data (heights vs. longitude) appears below.   Download Geopotential Heights at 35 on January 1, 2024 (.xlsx)    500 mb geopotential heights at on January 1, 2024.   Geopotential heights at 35 degrees north on January 1, 2024.     Using the spreadsheet, determine the average geopotential height, , over all 360 longitudes.  The best sinusoid to fit the data has the form for constants , and . The value of was already found in (a). Use the spreadsheet to determine the values of and .  Use the spreadsheet to determine coefficients , and in the trigonometric polynomial approximation  Plot (the graph in ) superimposed with the plot of the trigonometric polynomial having 5 terms found in (c).        The graph of the trigonometric polynomial superimposed on is shown in .  A trigonometric polynomial of degree 2 (having 5 terms) approximates the 500 mb geopotential heights at on January 1, 2024.   Geopotential heights at 35 degrees north on January 1, 2024 together with a trigonometric polynomial of degree 2 that approximates them.        "
},
{
  "id": "sec_trig_polynomials-2",
  "level": "2",
  "url": "sec_trig_polynomials.html#sec_trig_polynomials-2",
  "type": "Motivating Questions",
  "number": "2.2",
  "title": "",
  "body": "   Can multiple sinusoids with different frequencies be used to model arbitrary periodic functions?    How can a trigonometric polynomial be fit to periodic data?    "
},
{
  "id": "AddingSinusoidsSameFreq",
  "level": "2",
  "url": "sec_trig_polynomials.html#AddingSinusoidsSameFreq",
  "type": "Example",
  "number": "2.2.1",
  "title": "Adding Two Sinusoids with the Same Frequency.",
  "body": " Adding Two Sinusoids with the Same Frequency  Suppose (here, ) and (so that as well). Then is also a sinusoid with .   The sum of the sinusoid (in blue) and the sinusoid (in red) having a common frequency yield another sinusoid (in black) having frequency .   Adding two sinusoids with the same frequency.     "
},
{
  "id": "AddingSinusoidsDifferentFreq",
  "level": "2",
  "url": "sec_trig_polynomials.html#AddingSinusoidsDifferentFreq",
  "type": "Example",
  "number": "2.2.3",
  "title": "Adding Two Sinusoids with Different Frequencies.",
  "body": " Adding Two Sinusoids with Different Frequencies  There is no single amplitude for the sum of and . So is periodic, but not a sinusoid.   The sum of the sinusoid (in blue) and the sinusoid (in red) having different frequencies and do not produce a sinusoid. The sum (in black) has no single amplitude.   Adding two sinusoids with the different frequencies.     "
},
{
  "id": "sec_trig_polynomials-4-2",
  "level": "2",
  "url": "sec_trig_polynomials.html#sec_trig_polynomials-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fourier series fundamental frequency harmonics basis functions "
},
{
  "id": "sec_trig_polynomials-4-3",
  "level": "2",
  "url": "sec_trig_polynomials.html#sec_trig_polynomials-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trigonometric polynomial "
},
{
  "id": "GeopotentialHeightsFirstHarmonic",
  "level": "2",
  "url": "sec_trig_polynomials.html#GeopotentialHeightsFirstHarmonic",
  "type": "Example",
  "number": "2.2.5",
  "title": "Fitting a Sinusoid to Geopotential Heights.",
  "body": " Fitting a Sinusoid to Geopotential Heights  At latitude, 500 mb geopotential heights as a function of degrees longitude (see ) are periodic with period . Our objective is to model using a trigonometric polynomial with (i.e. a sinusoid). In this situation the fundamental frequency is .   500 mb geopotential heights at as a function of degrees longitude . Data from November 10, 2023.   Geopotential heights at 45 degrees north as a function of longitude t.    When , we look for the best periodic function to fit the data . We compute: Thus, since , we model the geopotential heights by the sinusoid Plotting this function against our data illustrates the best fit we can make to this data without using additional harmonics , , , .   500 mb geopotential heights at as a function of degrees longitude and   Fitting a sinusoid to geopotential heights.    "
},
{
  "id": "GeopotentialHeightsSecondHarmonic",
  "level": "2",
  "url": "sec_trig_polynomials.html#GeopotentialHeightsSecondHarmonic",
  "type": "Example",
  "number": "2.2.8",
  "title": "Fitting a Trigonometric Polynomial to Geopotential Heights.",
  "body": " Fitting a Trigonometric Polynomial to Geopotential Heights  If we also use the second harmonic (i.e. take ) on the geopotential height data from , we then find the best periodic function of the form to fit the data. In addition to the values of , , and found earlier, we compute:   The resulting model, is no longer a sinusoid. However, it remains periodic and does appear to fit the data a bit better.   500 mb geopotential heights at modeled by   Geopotential heights at 45 degrees north as a function of longitude t and second harmonics.    "
},
{
  "id": "GeopotentialHeightsSeveralHarmonics",
  "level": "2",
  "url": "sec_trig_polynomials.html#GeopotentialHeightsSeveralHarmonics",
  "type": "Example",
  "number": "2.2.10",
  "title": "Fitting Several Harmonics to Geopotential Heights.",
  "body": " Fitting Several Harmonics to Geopotential Heights  Using several more harmonics ( ) produces a fairly decent approximation to the geopotential height data from and .      500 mb geopotential heights at and a model using several harmonics.   Geopotential heights at 45 degrees north as a function of longitude t and several harmonics.    "
},
{
  "id": "ez-fittrigpoly2",
  "level": "2",
  "url": "sec_trig_polynomials.html#ez-fittrigpoly2",
  "type": "Exercise",
  "number": "2.2.2.1",
  "title": "Fitting Periodic Data using a Trigonometric Polynomial.",
  "body": "Fitting Periodic Data using a Trigonometric Polynomial "
},
{
  "id": "ez-fittrigpoly4",
  "level": "2",
  "url": "sec_trig_polynomials.html#ez-fittrigpoly4",
  "type": "Exercise",
  "number": "2.2.2.2",
  "title": "Fitting Geopotential Height Data using a Trigonometric Polynomial.",
  "body": "Fitting Geopotential Height Data using a Trigonometric Polynomial "
},
{
  "id": "ez-trig-poly-mequal1",
  "level": "2",
  "url": "sec_trig_polynomials.html#ez-trig-poly-mequal1",
  "type": "Exercise",
  "number": "2.2.2.3",
  "title": "A Trigonometric Polynomial for <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(m=1\\)<\/span>.",
  "body": "A Trigonometric Polynomial for Explain why a trigonometric polynomial for which is a sinusoid. When , a trigonometric polynomial has the form . The first term of is just a vertical shift by units. The last two terms have the same frequency and so they add to another sinusoid. It is only sinusoids with different frequencies that do not sum to another sinusoid (see and ).  "
},
{
  "id": "TwoSinusoids",
  "level": "2",
  "url": "sec_trig_polynomials.html#TwoSinusoids",
  "type": "Exercise",
  "number": "2.2.2.4",
  "title": "Two sinusoids without phase shifts.",
  "body": "Two sinusoids without phase shifts  shows a sum of two sinusoids without phase shifts: .   The sum of two mystery sinusoids without phase shifts.   The graph of a sum of two sinusoids having different frequencies.    We could write this function as an infinite trigonometric polynomial (called a Fourier series) but only two coefficients would be nonzero. Doing so would identify the two fundamental frequencies, and , present in the `signal'. Identify the two frequencies and by inspection of the graph. Hint: What two periods and do you see?   and . This is because so that and so that . If we take note that this means that all and are zero except and .  "
},
{
  "id": "ex_geo_heights_45S",
  "level": "2",
  "url": "sec_trig_polynomials.html#ex_geo_heights_45S",
  "type": "Exercise",
  "number": "2.2.2.5",
  "title": "Geopotential Heights at <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(45^{\\circ}S\\)<\/span> on January 20, 2024.",
  "body": "Geopotential Heights at on January 20, 2024 Data from ERDDAP representing 500 mb geopotential heights at on January 20, 2024 can be found in the spreadsheet . illustrates a plot of this periodic data. Here the horizontal axis represents degrees longitude east of the prime meridian and the vertical axis represents the 500 mb height .   500 mb geopotential heights at on January 20, 2024.   Geopotential heights at 45 degrees south as a function of longitude t.    The geopotential height at can be crudely modeled using a single sinusoid of the form for some constants , , , and where is a variable representing degrees east of the prime meridian.   Determine the period (with units) and the value of constant (the frequency).  Use the data in the spreadsheet to determine the values and so that models the 500 mb geopotential height at and degrees east of the prime meridian.  Use the spreadsheet to determine values of the additional coefficients and in the trigonometric polynomial  Use the spreadsheet to visually verify the reasonableness of your model above. That is, plot both the data and the calculated trigonometric polynomial .  Values of and ( ) for the trigonometric polynomial are given in . Use this to plot the trigonometric polynomial with these 5 harmonics against the original data. Your plot should resemble that in .  Coefficients and ( ) for the trigonometric polynomial fitting data in .         3  4.2532  48.8307    4  -17.4248  63.7954    5  1.4267  -65.9249      500 mb geopotential heights at on January 20, 2024 and a trigonometric polynomial using 5 harmonics.   Geopotential heights at 45 degrees south fit to a trig polynomial with five harmonics.       and    , , and    and   The trigonometric polynomial and the geopotential heights at on January 20, 2024 are shown in .  A trigonometric polynomial of degree 2 (having 5 terms) approximates the 500 mb geopotential heights at on January 1, 2024.   Geopotential heights at 45 degrees south on January 20, 2024 together with a trigonometric polynomial of degree 2 that approximates them.     "
},
{
  "id": "GeopotentialHeightsAt35N",
  "level": "2",
  "url": "sec_trig_polynomials.html#GeopotentialHeightsAt35N",
  "type": "Exercise",
  "number": "2.2.2.6",
  "title": "Geopotential Heights at 35<span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(^{\\circ}N\\)<\/span> on January 1, 2024.",
  "body": "Geopotential Heights at 35 on January 1, 2024  The geopotential heights (in meters above sea level) at 500 mb on a line of latitude at on January 1, 2024 are plotted in . This data was downloaded from this link at NOAA . Note that this data is periodic and only one period has been plotted in . A spreadsheet containing this data (heights vs. longitude) appears below.   Download Geopotential Heights at 35 on January 1, 2024 (.xlsx)    500 mb geopotential heights at on January 1, 2024.   Geopotential heights at 35 degrees north on January 1, 2024.     Using the spreadsheet, determine the average geopotential height, , over all 360 longitudes.  The best sinusoid to fit the data has the form for constants , and . The value of was already found in (a). Use the spreadsheet to determine the values of and .  Use the spreadsheet to determine coefficients , and in the trigonometric polynomial approximation  Plot (the graph in ) superimposed with the plot of the trigonometric polynomial having 5 terms found in (c).        The graph of the trigonometric polynomial superimposed on is shown in .  A trigonometric polynomial of degree 2 (having 5 terms) approximates the 500 mb geopotential heights at on January 1, 2024.   Geopotential heights at 35 degrees north on January 1, 2024 together with a trigonometric polynomial of degree 2 that approximates them.      "
},
{
  "id": "sec_functionnotation",
  "level": "1",
  "url": "sec_functionnotation.html",
  "type": "Section",
  "number": "3.1",
  "title": "Function Notation",
  "body": " Function Notation     How can we use functions of multiple variables to model meteorological quantities?    How can multivariable functions be represented algebraically, numerically, and graphically?      Many relationships you have studied in the past involved two variables - an independent variable (such as ) and a dependent variable (often ). In fact, most of your study of calculus involved the study of relationships . For example, the percentage of damage to a crop after a storm can be thought of as a function of maximum wind speed (in mph) during that storm. That is, . However, often additional variables have an impact on an outcome. The damage to a crop after a storm is also impacted by the age of the crop (in days), for example. To represent this situation, where the percent damage depends on wind speed and age of crop , we write . In this section, we study functions of more than one variable.    Wind Chill Index  The wind chill index wind chill index depends upon the the wind speed and the air temperature . That is, .     Hot-Dry-Windy Index  The Hot-Dry-Windy index (HDW) Hot-Dry-Windy index (HDW) depends on the maximum wind speed and maximum vapor pressure deficit in the lowest 50 millibars of the atmosphere. That is, .     Describing the Atmosphere  There are seven basic variables that describe the state of the atmosphere:   (temperature)   (pressure)   (geopotential)   (humidity\/moisture)   ( -component of wind)   ( -component of wind)   ( -component of wind)  That is, .    Isotherms  The weather map in (a contour diagram contour diagram ) displays the predicted high temperature, , in degrees Fahrenheit throughout the United States on a particular day. Clearly, is a function of latitude and longitude . The curves, on which the high temperature is constant, are called isotherms isotherms .  A weather map of the United States (Source: weather.gov ).   A weather map of the United States.     Estimate the predicted high temperature in each given city.  New Orleans, LA  Chicago, IL  Buffalo, NY  St. Cloud, MN ( )       New Orleans, LA: approximately  Chicago, IL: approximately  Buffalo, NY: approximately  St. Cloud, MN: approximately       Wind Chill  Wind chill is a temperature which tells you how cold it feels as a result of the combination of wind and temperature. Let where is the wind chill temperature (in degrees Fahrenheit) that is associated with a wind speed of miles per hour and a temperature of degrees Fahrenheit. Values for the function are given in . Table of wind chill values.                                                                        Evaluate and interpret .  How fast does the wind need to blow for it to feel like when the air temperature is really ?  If is held constant, is the single variable function you get increasing, decreasing, or neither?  If is held constant, is the single variable function you get increasing, decreasing, or neither?        ; When the wind speed is 20 mph and the temperature is , the windchill (or feels like temperature) is .  10 mph  increasing  decreasing     In and , we used a contour diagram and a numeric table to represent the respective functions and . We did this since there was no obvious algebraic formula for these underlying functions. The same is true in .  Snowfall  Consider where represents newly fallen snowfall (in inches) as a function of the melt water depth (in inches) and temperature (in ).  Newly fallen snowfall (in inches) as a function of melt water depth (in inches) and temperature (in ). (Source: www.SIMA.org )   Newly fallen snowfall     Compute .  If it is known that 10 inches of snowfall occurred, can the melt water depth be uniquely determined? If so, what is this value? If not, explain why not.  If is held constant, is the single variable function that results increasing, decreasing, or neither?       20 inches (of snowfall)  The value of cannot be determined. More than one combination of melt water depth and temperature could have produced this snowfall. For example, .  For a given melt water depth , as the temperature increases, the resulting snowfall decreases.     Some quantities we encounter can be modeled with a formula. However, as this next example demonstrates, representing functions of several variables in multiple ways carries huge advantages.   Heat Index  On hot days, you feel warmer than the actual air temperature when the air is more humid, but you feel cooler when the air is drier due to evaporation of your perspiration. Steadman's temperature-humidity index of sultriness (i.e. heat index heat index is given by where is reference vapor pressure, and The two variables for this function are (dry bulb temperature in ) and (relative humidity, ranging from 0 in dry air to 100 for saturated air). The formula in is an algebraic representation of the heat index function . Obviously, this equation is somewhat messy! Fortunately, there are multiple ways to represent functions of two variables. For the heat index, it is often represented numerically with a table as shown in . In addition to an algebraic representation (i.e. a formula) and a numeric representation (i.e. a table of values), a third way to represent this function is graphically . To this end, a contour diagram of the heat index is shown in . Finally, we could attempt to describe the function in a fourth way - verbally . For this function, a precise description would be really, really clunky! A poor verbal description of the heat index would be to say that the Steadman heat index is a measure of the ``feels like\" temperature found my modifying warm air temperatures upward when high relative humidities are present.   A table representing Steadman's heat index ( ). (Source: Stull, Practical Meteorology)   Steadman's heat index.     A contour diagram representing Steadman's heat index.   Contour map of Steadman's heat index.      Urban Heat Island  Elevated urban temperatures are known as the urban heat island  urban heat island ( ), which is defined as the difference in air temperature difference between a city and the surrounding countryside. The daily maximum can by modeled using the empirical formula where denotes the sky-view factor (e.g. fraction of visible sky), denotes the vegetation fraction of the urban area, denotes the mean downward shortwave radiation ( ), denotes the diurnal temperature range ( ), and denotes the mean wind speed ( ) measured at a rural station nearby the city. is then a function of five variables. As such, understanding it graphically is challenging.  Is an increasing or decreasing function in the variable ? Does this seem logical?  Is an increasing or decreasing function in the variable ?  Based on the formula, is greater with light winds or strong winds present? Explain.  What is in the countryside where and ? Does this make sense?       As increases, decreases. This is logical since as the sky view improves, the urban heat island should be reduced.   is decreasing in the variable .   is greater with light winds (near ) than with strong winds as evident by the variable in the denominator. As increases, decreases.   in the countryside. This makes sense as the countryside serves as a basis for our measurement of the urban heat island.      Ideal Gas Law  The ideal gas law ideal gas law is often written in the form where , , and are variables representing pressure (measured in pascals, or newtons per square meter), volume (measured in cubic meters), and temperature (measured in kelvins). In this equation, represents the amount of substance (measured in moles) and is the ideal gas constant ideal gas constant . These do not change in situations in which this law is generally applied. In this equation, we can think of any one of the variables as a function of the other two variables.           Exercises  A Polynomial in Two Variables  A Table Representing   Concentration of a Drug in the Blood   Consider the concentration, C, (in mg\/liter) of a drug in the blood as a function of the amount of drug given, x, and the time since injection, t. For mg and hours, we have    Give a practical interpretation of your answer: is   the concentration of a 3 mg dose in the blood 2 hours after injection.    the amount of a 2 mg dose in the blood 3 hours after injection.    the change in concentration of a 2 mg dose in the blood 3 hours after injection.    the amount of a 3 mg dose in the blood 2 hours after injection.    the change in concentration of a 3 mg dose in the blood 2 hours after injection.    the concentration of a 2 mg dose in the blood 3 hours after injection.              Wind Chill Table   The temperature adjusted for wind-chill, , is a temperature which tells you how cold it feels, as a result of the combination of wind and temperature [see wind-chill ]. See the table below, which gives temperature adjusted for wind-chill, , as a function of temperature and wind speed .                31  25  19  13  7  1  -5  -11     27  21  15  9  3  -4  -10  -16     25  19  13  6  0  -7  -13  -19     24  17  11  4  -2  -9  -15  -22     23  16  9  3  -4  -11  -17  -24    Use this table to make tables of the temperature adjusted for wind-chill ( ) as a function of temperature for wind speeds 5 and 15 mph:  :    independent variable = =            dependent variable = =            :    independent variable = =            dependent variable = =                                                                                                                                                                                                 and from the given data: When     35  30  25  20  15  10  5  0     31  25  19  13  7  1  -5  -11   When     35  30  25  20  15  10  5  0     25  19  13  6  0  -7  -13  -19         Bank Account Balance   The balance, , in dollars, in a bank account depends on the amount deposited, dollars, the annual interest rate, %, and the time, , in months since the deposit, so .  (a) Is an increasing or decreasing function of:  ?   increasing    decreasing    neither increasing nor decreasing    somtimes increasing and sometimes decreasing    ?   increasing    decreasing    neither increasing nor decreasing    somtimes increasing and sometimes decreasing    ?   increasing    decreasing    neither increasing nor decreasing    somtimes increasing and sometimes decreasing    (b) Interpret the statement by writing a sentence, including units. Then use your sentence to complete the following:  The units of 1250 are:   percent    months    dollars    dollars\/month    percent\/month    The units of 1 are:   percent    months    dollars    dollars\/month    percent\/month    The units of 18 are:   percent    months    dollars    dollars\/month    percent\/month    The units of 1452 are:   percent    months    dollars    dollars\/month    percent\/month   .  (Note because this is all multiple choice, you will not see which parts of the problem are correct.)                                      (a) We expect to be an increasing function of all three variables. (b) A deposit of 1250 dollars at a 1 % annual interest rate for 18 months results in a balance of 1452 dollars.      Applying the Ideal Gas Law  What is the pressure exerted by an mol sample of nitrogen gas in a 10.0 liter container at 298 K? Hint: You will want to use the ideal gas law as in and to convert liters to cubic meters. Note also that 1 joule is 1 pascal .    pascals or 12.388 kilopascals.   Dewpoint  A model for the dewpoint temperature is given by where , , is relative humidity (as a decimal), and is the temperature (in ).  is a function of how many variables?  Describe a reasonable domain for this function.       two ( and ); and are examples of parameters  parameter . We often write   , (based on world record temperatures)     The Hot-Dry-Windy Index  The Hot-Dry-Windy Index can be written as a function of two variables - windspeed (measured in meters per second) and vapor pressure deficit (measured in hectopascals). Here, the vapor pressure deficit combines moisture and temperature into a single variable. The function is easily described as a product: .  What are the units of the Hot-Dry-Windy Index ?  Sketch a graph of the one-variable function that results from the Hot-Dry-Windy Index by holding windspeed constant at meters per second.  Create a table with inputs of ( ) and ( ) representing this function.       (which, due to lack of physical significance for fire processes, are recommended to be ignored for users of this index)  The graph will be a line with slope 10. The horizontal axis will be labeled with units of and the vertical axis will represent .  We simply evaluate the function at these ordered pairs.  Table of values.                                 The Trace  The contour diagram in displays the predicted high temperature, , in degrees Fahrenheit throughout the U.S. on a particular day. is a function of latitude (measured in degrees north of the equator) and longitude (measured in degrees east of the prime meridian). Sketch a possible graph (with axes labeled) of the predicted high temperature on a line north-south through Topeka, KS. Is this the graph of the trace  trace  or of the trace ?   This is the graph of the trace . It is decreasing.   Pressure Contours   shows contour lines for a function of two variables. What do , , and represent and what are the units for each?   Contours for . (Source: University of Illinois)   Pressure Contours      represents pressure (in millibars), represents degrees longitude (east of the prime meridian), represents degrees lattitude (north of the equator).   Frostbite Frostbite  frostbite is damage to body tissue caused by extreme cold. A wind chill of will cause frostbite in just 30 minutes. The table in gives the minutes to frostbite under varying conditions.   Minutes to frostbite (Source: weather.gov).   frost bite table     Just as wind chill is a function of wind speed and temperature (see ), the number of minutes until frostbite occurs is also a function of two variables. Define these two variables. Be sure to include units.  Compute . Then, carefully interpret the meaning of this equality with a single sentence.  Draw a contour diagram for the frostbite function . is an example of a contour diagram using isotherms. Rather than isotherms (constant temperatures), what is being held constant along these curves?       "
},
{
  "id": "sec_functionnotation-2",
  "level": "2",
  "url": "sec_functionnotation.html#sec_functionnotation-2",
  "type": "Motivating Questions",
  "number": "3.1",
  "title": "",
  "body": "   How can we use functions of multiple variables to model meteorological quantities?    How can multivariable functions be represented algebraically, numerically, and graphically?    "
},
{
  "id": "sec_functionnotation-4",
  "level": "2",
  "url": "sec_functionnotation.html#sec_functionnotation-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "wind chill index "
},
{
  "id": "sec_functionnotation-5",
  "level": "2",
  "url": "sec_functionnotation.html#sec_functionnotation-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hot-Dry-Windy index (HDW) "
},
{
  "id": "sec_functionnotation-6-1",
  "level": "2",
  "url": "sec_functionnotation.html#sec_functionnotation-6-1",
  "type": "Example",
  "number": "3.1.3",
  "title": "Describing the Atmosphere.",
  "body": "Describing the Atmosphere  There are seven basic variables that describe the state of the atmosphere:   (temperature)   (pressure)   (geopotential)   (humidity\/moisture)   ( -component of wind)   ( -component of wind)   ( -component of wind)  That is, .  "
},
{
  "id": "USweathermap",
  "level": "2",
  "url": "sec_functionnotation.html#USweathermap",
  "type": "Checkpoint",
  "number": "3.1.4",
  "title": "Isotherms.",
  "body": "Isotherms  The weather map in (a contour diagram contour diagram ) displays the predicted high temperature, , in degrees Fahrenheit throughout the United States on a particular day. Clearly, is a function of latitude and longitude . The curves, on which the high temperature is constant, are called isotherms isotherms .  A weather map of the United States (Source: weather.gov ).   A weather map of the United States.     Estimate the predicted high temperature in each given city.  New Orleans, LA  Chicago, IL  Buffalo, NY  St. Cloud, MN ( )       New Orleans, LA: approximately  Chicago, IL: approximately  Buffalo, NY: approximately  St. Cloud, MN: approximately     "
},
{
  "id": "windchillexercise",
  "level": "2",
  "url": "sec_functionnotation.html#windchillexercise",
  "type": "Checkpoint",
  "number": "3.1.6",
  "title": "Wind Chill.",
  "body": "Wind Chill  Wind chill is a temperature which tells you how cold it feels as a result of the combination of wind and temperature. Let where is the wind chill temperature (in degrees Fahrenheit) that is associated with a wind speed of miles per hour and a temperature of degrees Fahrenheit. Values for the function are given in . Table of wind chill values.                                                                        Evaluate and interpret .  How fast does the wind need to blow for it to feel like when the air temperature is really ?  If is held constant, is the single variable function you get increasing, decreasing, or neither?  If is held constant, is the single variable function you get increasing, decreasing, or neither?        ; When the wind speed is 20 mph and the temperature is , the windchill (or feels like temperature) is .  10 mph  increasing  decreasing    "
},
{
  "id": "snowfall1",
  "level": "2",
  "url": "sec_functionnotation.html#snowfall1",
  "type": "Checkpoint",
  "number": "3.1.8",
  "title": "Snowfall.",
  "body": "Snowfall  Consider where represents newly fallen snowfall (in inches) as a function of the melt water depth (in inches) and temperature (in ).  Newly fallen snowfall (in inches) as a function of melt water depth (in inches) and temperature (in ). (Source: www.SIMA.org )   Newly fallen snowfall     Compute .  If it is known that 10 inches of snowfall occurred, can the melt water depth be uniquely determined? If so, what is this value? If not, explain why not.  If is held constant, is the single variable function that results increasing, decreasing, or neither?       20 inches (of snowfall)  The value of cannot be determined. More than one combination of melt water depth and temperature could have produced this snowfall. For example, .  For a given melt water depth , as the temperature increases, the resulting snowfall decreases.    "
},
{
  "id": "sec_functionnotation-13",
  "level": "2",
  "url": "sec_functionnotation.html#sec_functionnotation-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "heat index "
},
{
  "id": "UHI1",
  "level": "2",
  "url": "sec_functionnotation.html#UHI1",
  "type": "Checkpoint",
  "number": "3.1.13",
  "title": "Urban Heat Island.",
  "body": "Urban Heat Island  Elevated urban temperatures are known as the urban heat island  urban heat island ( ), which is defined as the difference in air temperature difference between a city and the surrounding countryside. The daily maximum can by modeled using the empirical formula where denotes the sky-view factor (e.g. fraction of visible sky), denotes the vegetation fraction of the urban area, denotes the mean downward shortwave radiation ( ), denotes the diurnal temperature range ( ), and denotes the mean wind speed ( ) measured at a rural station nearby the city. is then a function of five variables. As such, understanding it graphically is challenging.  Is an increasing or decreasing function in the variable ? Does this seem logical?  Is an increasing or decreasing function in the variable ?  Based on the formula, is greater with light winds or strong winds present? Explain.  What is in the countryside where and ? Does this make sense?       As increases, decreases. This is logical since as the sky view improves, the urban heat island should be reduced.   is decreasing in the variable .   is greater with light winds (near ) than with strong winds as evident by the variable in the denominator. As increases, decreases.   in the countryside. This makes sense as the countryside serves as a basis for our measurement of the urban heat island.    "
},
{
  "id": "sec_functionnotation-15",
  "level": "2",
  "url": "sec_functionnotation.html#sec_functionnotation-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ideal gas law ideal gas constant "
},
{
  "id": "EvaluatefFromPoly",
  "level": "2",
  "url": "sec_functionnotation.html#EvaluatefFromPoly",
  "type": "Exercise",
  "number": "3.1.1",
  "title": "A Polynomial <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(f(x,y)\\)<\/span> in Two Variables.",
  "body": "A Polynomial in Two Variables "
},
{
  "id": "EvaluatefFromTable",
  "level": "2",
  "url": "sec_functionnotation.html#EvaluatefFromTable",
  "type": "Exercise",
  "number": "3.1.2",
  "title": "A Table Representing <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(f(x,y)\\)<\/span>.",
  "body": "A Table Representing "
},
{
  "id": "Library__FortLewis__Calc3__12-2-Multivariable-graphs__HGM4-12-2-16-Multivariable-functions-graphs.pg",
  "level": "2",
  "url": "sec_functionnotation.html#Library__FortLewis__Calc3__12-2-Multivariable-graphs__HGM4-12-2-16-Multivariable-functions-graphs.pg",
  "type": "Exercise",
  "number": "3.1.3",
  "title": "Concentration of a Drug in the Blood.",
  "body": "Concentration of a Drug in the Blood   Consider the concentration, C, (in mg\/liter) of a drug in the blood as a function of the amount of drug given, x, and the time since injection, t. For mg and hours, we have    Give a practical interpretation of your answer: is   the concentration of a 3 mg dose in the blood 2 hours after injection.    the amount of a 2 mg dose in the blood 3 hours after injection.    the change in concentration of a 2 mg dose in the blood 3 hours after injection.    the amount of a 3 mg dose in the blood 2 hours after injection.    the change in concentration of a 3 mg dose in the blood 2 hours after injection.    the concentration of a 2 mg dose in the blood 3 hours after injection.             "
},
{
  "id": "ez-windchilltable",
  "level": "2",
  "url": "sec_functionnotation.html#ez-windchilltable",
  "type": "Exercise",
  "number": "3.1.4",
  "title": "Wind Chill Table.",
  "body": "Wind Chill Table   The temperature adjusted for wind-chill, , is a temperature which tells you how cold it feels, as a result of the combination of wind and temperature [see wind-chill ]. See the table below, which gives temperature adjusted for wind-chill, , as a function of temperature and wind speed .                31  25  19  13  7  1  -5  -11     27  21  15  9  3  -4  -10  -16     25  19  13  6  0  -7  -13  -19     24  17  11  4  -2  -9  -15  -22     23  16  9  3  -4  -11  -17  -24    Use this table to make tables of the temperature adjusted for wind-chill ( ) as a function of temperature for wind speeds 5 and 15 mph:  :    independent variable = =            dependent variable = =            :    independent variable = =            dependent variable = =                                                                                                                                                                                                 and from the given data: When     35  30  25  20  15  10  5  0     31  25  19  13  7  1  -5  -11   When     35  30  25  20  15  10  5  0     25  19  13  6  0  -7  -13  -19        "
},
{
  "id": "ez-bankaccountbalance",
  "level": "2",
  "url": "sec_functionnotation.html#ez-bankaccountbalance",
  "type": "Exercise",
  "number": "3.1.5",
  "title": "Bank Account Balance.",
  "body": "Bank Account Balance   The balance, , in dollars, in a bank account depends on the amount deposited, dollars, the annual interest rate, %, and the time, , in months since the deposit, so .  (a) Is an increasing or decreasing function of:  ?   increasing    decreasing    neither increasing nor decreasing    somtimes increasing and sometimes decreasing    ?   increasing    decreasing    neither increasing nor decreasing    somtimes increasing and sometimes decreasing    ?   increasing    decreasing    neither increasing nor decreasing    somtimes increasing and sometimes decreasing    (b) Interpret the statement by writing a sentence, including units. Then use your sentence to complete the following:  The units of 1250 are:   percent    months    dollars    dollars\/month    percent\/month    The units of 1 are:   percent    months    dollars    dollars\/month    percent\/month    The units of 18 are:   percent    months    dollars    dollars\/month    percent\/month    The units of 1452 are:   percent    months    dollars    dollars\/month    percent\/month   .  (Note because this is all multiple choice, you will not see which parts of the problem are correct.)                                      (a) We expect to be an increasing function of all three variables. (b) A deposit of 1250 dollars at a 1 % annual interest rate for 18 months results in a balance of 1452 dollars.     "
},
{
  "id": "calcpressure",
  "level": "2",
  "url": "sec_functionnotation.html#calcpressure",
  "type": "Exercise",
  "number": "3.1.6",
  "title": "Applying the Ideal Gas Law.",
  "body": "Applying the Ideal Gas Law  What is the pressure exerted by an mol sample of nitrogen gas in a 10.0 liter container at 298 K? Hint: You will want to use the ideal gas law as in and to convert liters to cubic meters. Note also that 1 joule is 1 pascal .    pascals or 12.388 kilopascals.  "
},
{
  "id": "dewpoint",
  "level": "2",
  "url": "sec_functionnotation.html#dewpoint",
  "type": "Exercise",
  "number": "3.1.7",
  "title": "Dewpoint.",
  "body": "Dewpoint  A model for the dewpoint temperature is given by where , , is relative humidity (as a decimal), and is the temperature (in ).  is a function of how many variables?  Describe a reasonable domain for this function.       two ( and ); and are examples of parameters  parameter . We often write   , (based on world record temperatures)    "
},
{
  "id": "hdwindexexercise",
  "level": "2",
  "url": "sec_functionnotation.html#hdwindexexercise",
  "type": "Exercise",
  "number": "3.1.8",
  "title": "The Hot-Dry-Windy Index.",
  "body": "The Hot-Dry-Windy Index  The Hot-Dry-Windy Index can be written as a function of two variables - windspeed (measured in meters per second) and vapor pressure deficit (measured in hectopascals). Here, the vapor pressure deficit combines moisture and temperature into a single variable. The function is easily described as a product: .  What are the units of the Hot-Dry-Windy Index ?  Sketch a graph of the one-variable function that results from the Hot-Dry-Windy Index by holding windspeed constant at meters per second.  Create a table with inputs of ( ) and ( ) representing this function.       (which, due to lack of physical significance for fire processes, are recommended to be ignored for users of this index)  The graph will be a line with slope 10. The horizontal axis will be labeled with units of and the vertical axis will represent .  We simply evaluate the function at these ordered pairs.  Table of values.                                "
},
{
  "id": "usingcontourdiagram",
  "level": "2",
  "url": "sec_functionnotation.html#usingcontourdiagram",
  "type": "Exercise",
  "number": "3.1.9",
  "title": "The Trace.",
  "body": "The Trace  The contour diagram in displays the predicted high temperature, , in degrees Fahrenheit throughout the U.S. on a particular day. is a function of latitude (measured in degrees north of the equator) and longitude (measured in degrees east of the prime meridian). Sketch a possible graph (with axes labeled) of the predicted high temperature on a line north-south through Topeka, KS. Is this the graph of the trace  trace  or of the trace ?   This is the graph of the trace . It is decreasing.  "
},
{
  "id": "interpretingcontourmap",
  "level": "2",
  "url": "sec_functionnotation.html#interpretingcontourmap",
  "type": "Exercise",
  "number": "3.1.10",
  "title": "Pressure Contours.",
  "body": "Pressure Contours   shows contour lines for a function of two variables. What do , , and represent and what are the units for each?   Contours for . (Source: University of Illinois)   Pressure Contours      represents pressure (in millibars), represents degrees longitude (east of the prime meridian), represents degrees lattitude (north of the equator).  "
},
{
  "id": "MyFrostbite",
  "level": "2",
  "url": "sec_functionnotation.html#MyFrostbite",
  "type": "Exercise",
  "number": "3.1.11",
  "title": "Frostbite.",
  "body": "Frostbite Frostbite  frostbite is damage to body tissue caused by extreme cold. A wind chill of will cause frostbite in just 30 minutes. The table in gives the minutes to frostbite under varying conditions.   Minutes to frostbite (Source: weather.gov).   frost bite table     Just as wind chill is a function of wind speed and temperature (see ), the number of minutes until frostbite occurs is also a function of two variables. Define these two variables. Be sure to include units.  Compute . Then, carefully interpret the meaning of this equality with a single sentence.  Draw a contour diagram for the frostbite function . is an example of a contour diagram using isotherms. Rather than isotherms (constant temperatures), what is being held constant along these curves?     "
},
{
  "id": "sec_3space",
  "level": "1",
  "url": "sec_3space.html",
  "type": "Section",
  "number": "3.2",
  "title": "A Tour of 3-Space",
  "body": " A Tour of 3-Space     How do we mathematically represent locations in three-dimensional space?    Graphically, how can we understand functions of several variables?      To locate a point in a (2-D) plane, we use an ordered pair of real numbers where is the -coordinate and is the -coordinate. To locate a point in 3-space, we use an ordered triple where is the -coordinate. The direction of the -axis is determined by the right-hand rule .  The direction of the -axis is determined according to the right-hand rule.   The right-hand rule.     One of many ways to remember this rule is to imagine tightening a bolt using a ratchet. In the process, if the handle of the ratchet moves from along the positive -axis towards the positive -axis, the bolt will tighten - that is, the bolt will move in the direction of the positive -axis.  Using a ratchet. (Source: wonkeedonkeetools.co.uk )   A ratchet.     We represent a point in space by the ordered triple where  is the directed distance from the -plane to    is the directed distance from the -plane to    is the directed distance from the -plane to   The numbers , , and are called the coordinates of (the -coordinate, -coordinate, and -coordinate respectively).   Locating a point in space. In this case, is illustrated. (Source: www.geogebra.org\/m\/rA4fWtKH )   Locating a point in space.     Given coordinates we can locate a point as shown in (see also www.geogebra.org\/m\/rA4fWtKH ). We can also think of the coordinates as instructions telling you how to get to the point. To get to point , start at the origin, go units along the -axis, then units in the direction parallel to the -axis, and finally units in the direction parallel to the -axis.  The coordinates can be positive, negative or zero. A zero coordinate means \"don't move in this direction.\" A negative coordinate means \"go in the negative direction parallel to this axis.\"  Plotting Points in 3D  Plot the points , , and on the coordinate axes.  Coordinate axes for .   Coordinate axes.        Answer for .        Graphing in 3-Space  We can graph an equation involving variables and in 3-space; such a graph is a plot of all ordered triples that satisfy the equation.   The graph of in 3-space.   Graph of a Gaussian.     The graphs of , , and .   Graph of three planes.    Graphs in 1, 2, 3D  Graph   in 1-space.  in 2-space.  in 3-space.         The graph of in 1-space.   Graph of in 1-space.        The graph of in 2-space.   Graph of in 2-space.        The graph of in 3-space.   Graph of in 3-space.         Graphing Functions of Two Variables  The graph of is the set of all ordered pairs that make the equation true. Plotting each of these points in the plane yields a parabola as shown in .   The graph of in 2-space.   Graph of in 2-space.     The graph of is shown in . A few notes are in order.  This graph is never falls below the -plane and appears to be the graph of the parabola in the -plane rotated about the -axis.  The intersection of this surface with the -plane is a parabola (namely ) called a trace trace . The intersection of this surface with the -plane, another trace, is also a parabola (namely ).  For each in the -plane, there is a unique point on the graph. This is similar to the vertical line test for a function of one variable. That is, a curve in the -plane is the graph of a function if and only if it satisfies the vertical (i.e. parallel to the -axis) line test. Likewise, a surface in -space is the graph of a function if and only if it satisfies the vertical (i.e. parallel to the -axis) line test.     The graph of .   Graph of paraboloid.      Urban Planning  In an effort to determing the impact of various urban planning strategies on the urban heat island ( ) for The Hague (Netherlands), a numerical relationship between residential density (in residences per square kilometer), the sky view factor (as a percentage), and the vegetation fraction (again, as a percentage) was empirically found to be A graph of the resulting surface fitting collected data can be seen in .   A surface representing the empirical relationship between sky view factor ( ), the vegetation factor , and residential density . (Source: Quantifying the Effect of Different Urban Planning Strategies on Heat Stress for Current and Future Climates in the Agglomeration of The Hague (The Netherlands), Koopmans, et. al., Atmosphere, 2018.)   Urban Planning and SVF.     Plotting an Urban Planning Model Use GeoGebra 3d to plot the function on the domain , . Compare the shape of this surface with that of .   GeoGebra 3d produces the output in .   The graph of   Urban Planning and SVF plane.       Isobaric Surfaces   An isobaric surface. (Source: weather.gov )   An Isobaric Surface.    Shown in is an isobaric surface isobaric surface . Isobaric surfaces are surfaces of equal air pressure in the atmosphere. They are the graphs of a function of two variables - and for location. If is a variable representing height above location , and is the air pressure at , then an isobaric surface can be described by the set of points satisfying .  The relative location of isobaric surfaces gives an idea of the spatial distribution of air pressure. In a cyclone cyclone (that is, an area of reduced pressure) an isobaric surface is a concave surface and in an anticyclone anitcyclone (that is, an area of increased pressure) it is convex. The slope of isobaric surfaces determines wind speed: the greater the slope of the isobaric surfaces, the greater the wind speed, all other conditions being equal. The intersection of isobaric surfaces with a horizontal plane (at sea level or other heights) produces isobars (see ).   An Iosbaric Surface  Shown in is in isobaric surface representing 850 mb (millibars). Note that this pressure occurs at varying heights in the atmosphere. For example, where the temperature is warmest, it occurs at a height of 1800 meters. Where the temperature is coolest, 850 mb occurs at a height of 1200 meters. That is, temperatures change from average, to warm, back to average, to cold, and then to average again at the eastern edge of .   An isobaric surface for 850 mb. (Source: www.atmo.arizona.edu )   An Isobaric Surface.    If you imagine hiking along the 850 mb surface you can begin to understand where the term ridge comes from. On a ridge, the reference pressure is found at higher than average altitude above the ground. A trough is the opposite - it is a valley where the reference pressure is found at lower altitude. shows a height contour map associated with the isobaric surface of .   An isobaric surface for 850 mb. (Source: www.atmo.arizona.edu )   An Isobaric Surface.         Exercises  Where Am I?  A Plane  Projection onto a Coordinate Plane  A Plane Parallel to Coordinate Plane  Increase or Decrease in Given Direction?  Identify Traces of a Graph  Match Equations with the Graph     The Ideal Gas Law  The Ideal Gas Law, , relates the pressure ( , in pascals), temperature ( , in Kelvin), and volume ( , in cubic meters) of 1 mole of a gas ( is the universal gas constant), and describes the behavior of gases that do not liquefy easily, such as oxygen and hydrogen. We can solve the ideal gas law for the volume and hence treat the volume as a function of the pressure and temperature:    Explain in detail what the trace of with tells us about a key relationship between two quantities.    Explain in detail what the trace of with tells us.    Explain in detail what the level curve tells us.    Use 2 or three additional traces in each direction to make a rough sketch of the surface over the domain of where and are each nonnegative. Write at least one sentence that describes the way the surface looks.    Based on all your work above, write a couple of sentences that describe the effects that temperature and pressure have on volume.          represents the volume of 1 mole of a gas at a temp T, kelvin, when the pressure is 1000 pascals. This is a linear function with a positive slope of . As the temperature increases, the volume increases at a constant rate of .     represents the volume of 1 mole of a gas with a pressure of P, pascals, when the temperature is 5 Kelvin. This is a rational function. As the pressure increases, the volume decreases and approaches zero.     represents the combinations of temperature and pressure that result in a volume of 1 mole of gas of 0.5 .     are traces that are linear functions with a positive slope.   are traces that are positive rational functions for .  These traces indicate the graph of looks like a sheet of paper angling up through the axis in the first octant that bends up towards the -plane.    The volume is directly proportional to the temperature and inversely proportional to the pressure. As temperature increases, the volume increases. As pressure increases, the volume decreases.          represents the volume of 1 mole of a gas at a temp T, kelvin, when the pressure is 1000 pascals. This is a linear function with a positive slope of . As the temperature increases, the volume increases at a constant rate of .     represents the volume of 1 mole of a gas with a pressure of P, pascals, when the temperature is 5 Kelvin. This is a rational function. As the pressure increases, the volume decreases and approaches zero.     represents the combinations of temperature and pressure that result in a volume of 1 mole of gas of 0.5 .     are traces that are linear functions with a positive slope.   are traces that are positive rational functions for .  These traces indicate the graph of looks like a sheet of paper angling up through the axis in the first octant that bends up towards the -plane.    The volume is directly proportional to the temperature and inversely proportional to the pressure. As temperature increases, the volume increases. As pressure increases, the volume decreases.      Plotting in 3D with Technology  Technology is widely available to plot equations in 3-space.   GeoGebra 3d is one technology to utilize for plotting equations involving three variables. Use GeoGebra 3d to sketch the graph of the ellipsoid . Then attempt to reproduce .  Another easy tool to use for graphing is Wolfram Alpha . Use this tool to reproduce the graph of over the domain as shown in . Then, attempt to reproduce .  AI (such as Microsoft Copilot ) is another tool to utilize (carefully!) for producing images of functions of two variables. Prompt Copilot to graph over the domain .       GeoGebra 3d input of produces .  Graph of .   An ellipsoid.     The Wolfram Alpha input plot3d(exp(-x^2-y^2),x=-5..5, y=-5..5,z=0..1) produces .  Graph of .   A gaussian.     Microsoft Copilot produces   Graph of on domain .   The graph of a hyperboloid.        "
},
{
  "id": "sec_3space-2",
  "level": "2",
  "url": "sec_3space.html#sec_3space-2",
  "type": "Motivating Questions",
  "number": "3.2",
  "title": "",
  "body": "   How do we mathematically represent locations in three-dimensional space?    Graphically, how can we understand functions of several variables?    "
},
{
  "id": "sec_3space-3-1",
  "level": "2",
  "url": "sec_3space.html#sec_3space-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right-hand rule "
},
{
  "id": "sec_3space-3-2-4",
  "level": "2",
  "url": "sec_3space.html#sec_3space-3-2-4",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " Using a ratchet. (Source: wonkeedonkeetools.co.uk )   A ratchet.   "
},
{
  "id": "locatepoint1",
  "level": "2",
  "url": "sec_3space.html#locatepoint1",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " Locating a point in space. In this case, is illustrated. (Source: www.geogebra.org\/m\/rA4fWtKH )   Locating a point in space.   "
},
{
  "id": "plotpoints1",
  "level": "2",
  "url": "sec_3space.html#plotpoints1",
  "type": "Checkpoint",
  "number": "3.2.4",
  "title": "Plotting Points in 3D.",
  "body": "Plotting Points in 3D  Plot the points , , and on the coordinate axes.  Coordinate axes for .   Coordinate axes.        Answer for .      "
},
{
  "id": "NegExpGraph",
  "level": "2",
  "url": "sec_3space.html#NegExpGraph",
  "type": "Figure",
  "number": "3.2.7",
  "title": "",
  "body": " The graph of in 3-space.   Graph of a Gaussian.   "
},
{
  "id": "ThreeFlatPlanes",
  "level": "2",
  "url": "sec_3space.html#ThreeFlatPlanes",
  "type": "Figure",
  "number": "3.2.8",
  "title": "",
  "body": " The graphs of , , and .   Graph of three planes.   "
},
{
  "id": "Plotting3D2",
  "level": "2",
  "url": "sec_3space.html#Plotting3D2",
  "type": "Checkpoint",
  "number": "3.2.9",
  "title": "Graphs in 1, 2, 3D.",
  "body": "Graphs in 1, 2, 3D  Graph   in 1-space.  in 2-space.  in 3-space.         The graph of in 1-space.   Graph of in 1-space.        The graph of in 2-space.   Graph of in 2-space.        The graph of in 3-space.   Graph of in 3-space.       "
},
{
  "id": "graphin2d",
  "level": "2",
  "url": "sec_3space.html#graphin2d",
  "type": "Example",
  "number": "3.2.13",
  "title": "Graphing Functions of Two Variables.",
  "body": " Graphing Functions of Two Variables  The graph of is the set of all ordered pairs that make the equation true. Plotting each of these points in the plane yields a parabola as shown in .   The graph of in 2-space.   Graph of in 2-space.     The graph of is shown in . A few notes are in order.  This graph is never falls below the -plane and appears to be the graph of the parabola in the -plane rotated about the -axis.  The intersection of this surface with the -plane is a parabola (namely ) called a trace trace . The intersection of this surface with the -plane, another trace, is also a parabola (namely ).  For each in the -plane, there is a unique point on the graph. This is similar to the vertical line test for a function of one variable. That is, a curve in the -plane is the graph of a function if and only if it satisfies the vertical (i.e. parallel to the -axis) line test. Likewise, a surface in -space is the graph of a function if and only if it satisfies the vertical (i.e. parallel to the -axis) line test.     The graph of .   Graph of paraboloid.    "
},
{
  "id": "urbanplanning",
  "level": "2",
  "url": "sec_3space.html#urbanplanning",
  "type": "Example",
  "number": "3.2.16",
  "title": "Urban Planning.",
  "body": " Urban Planning  In an effort to determing the impact of various urban planning strategies on the urban heat island ( ) for The Hague (Netherlands), a numerical relationship between residential density (in residences per square kilometer), the sky view factor (as a percentage), and the vegetation fraction (again, as a percentage) was empirically found to be A graph of the resulting surface fitting collected data can be seen in .   A surface representing the empirical relationship between sky view factor ( ), the vegetation factor , and residential density . (Source: Quantifying the Effect of Different Urban Planning Strategies on Heat Stress for Current and Future Climates in the Agglomeration of The Hague (The Netherlands), Koopmans, et. al., Atmosphere, 2018.)   Urban Planning and SVF.    "
},
{
  "id": "plottingurbanplanning",
  "level": "2",
  "url": "sec_3space.html#plottingurbanplanning",
  "type": "Checkpoint",
  "number": "3.2.18",
  "title": "Plotting an Urban Planning Model.",
  "body": "Plotting an Urban Planning Model Use GeoGebra 3d to plot the function on the domain , . Compare the shape of this surface with that of .   GeoGebra 3d produces the output in .   The graph of   Urban Planning and SVF plane.    "
},
{
  "id": "IsobaricSurfacePic",
  "level": "2",
  "url": "sec_3space.html#IsobaricSurfacePic",
  "type": "Figure",
  "number": "3.2.20",
  "title": "",
  "body": " An isobaric surface. (Source: weather.gov )   An Isobaric Surface.   "
},
{
  "id": "sec_3space-8-3",
  "level": "2",
  "url": "sec_3space.html#sec_3space-8-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isobaric surface "
},
{
  "id": "sec_3space-8-4",
  "level": "2",
  "url": "sec_3space.html#sec_3space-8-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cyclone anticyclone "
},
{
  "id": "sec_3space-8-5",
  "level": "2",
  "url": "sec_3space.html#sec_3space-8-5",
  "type": "Example",
  "number": "3.2.21",
  "title": "An Iosbaric Surface.",
  "body": " An Iosbaric Surface  Shown in is in isobaric surface representing 850 mb (millibars). Note that this pressure occurs at varying heights in the atmosphere. For example, where the temperature is warmest, it occurs at a height of 1800 meters. Where the temperature is coolest, 850 mb occurs at a height of 1200 meters. That is, temperatures change from average, to warm, back to average, to cold, and then to average again at the eastern edge of .   An isobaric surface for 850 mb. (Source: www.atmo.arizona.edu )   An Isobaric Surface.    If you imagine hiking along the 850 mb surface you can begin to understand where the term ridge comes from. On a ridge, the reference pressure is found at higher than average altitude above the ground. A trough is the opposite - it is a valley where the reference pressure is found at lower altitude. shows a height contour map associated with the isobaric surface of .   An isobaric surface for 850 mb. (Source: www.atmo.arizona.edu )   An Isobaric Surface.    "
},
{
  "id": "WhereAreYou",
  "level": "2",
  "url": "sec_3space.html#WhereAreYou",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "Where Am I?",
  "body": "Where Am I? "
},
{
  "id": "Plane1",
  "level": "2",
  "url": "sec_3space.html#Plane1",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "A Plane.",
  "body": "A Plane "
},
{
  "id": "ProjectionPlane",
  "level": "2",
  "url": "sec_3space.html#ProjectionPlane",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "Projection onto a Coordinate Plane.",
  "body": "Projection onto a Coordinate Plane "
},
{
  "id": "CoordinatePlaneParallel",
  "level": "2",
  "url": "sec_3space.html#CoordinatePlaneParallel",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "A Plane Parallel to Coordinate Plane.",
  "body": "A Plane Parallel to Coordinate Plane "
},
{
  "id": "IncDecGivenDirection",
  "level": "2",
  "url": "sec_3space.html#IncDecGivenDirection",
  "type": "Exercise",
  "number": "3.2.5",
  "title": "Increase or Decrease in Given Direction?",
  "body": "Increase or Decrease in Given Direction? "
},
{
  "id": "GraphGivenTraces",
  "level": "2",
  "url": "sec_3space.html#GraphGivenTraces",
  "type": "Exercise",
  "number": "3.2.6",
  "title": "Identify Traces of a Graph.",
  "body": "Identify Traces of a Graph "
},
{
  "id": "MathEqnsWithGraph",
  "level": "2",
  "url": "sec_3space.html#MathEqnsWithGraph",
  "type": "Exercise",
  "number": "3.2.7",
  "title": "Match Equations with the Graph.",
  "body": "Match Equations with the Graph "
},
{
  "id": "Ez-9-1-2",
  "level": "2",
  "url": "sec_3space.html#Ez-9-1-2",
  "type": "Exercise",
  "number": "3.2.8",
  "title": "The Ideal Gas Law.",
  "body": "The Ideal Gas Law  The Ideal Gas Law, , relates the pressure ( , in pascals), temperature ( , in Kelvin), and volume ( , in cubic meters) of 1 mole of a gas ( is the universal gas constant), and describes the behavior of gases that do not liquefy easily, such as oxygen and hydrogen. We can solve the ideal gas law for the volume and hence treat the volume as a function of the pressure and temperature:    Explain in detail what the trace of with tells us about a key relationship between two quantities.    Explain in detail what the trace of with tells us.    Explain in detail what the level curve tells us.    Use 2 or three additional traces in each direction to make a rough sketch of the surface over the domain of where and are each nonnegative. Write at least one sentence that describes the way the surface looks.    Based on all your work above, write a couple of sentences that describe the effects that temperature and pressure have on volume.          represents the volume of 1 mole of a gas at a temp T, kelvin, when the pressure is 1000 pascals. This is a linear function with a positive slope of . As the temperature increases, the volume increases at a constant rate of .     represents the volume of 1 mole of a gas with a pressure of P, pascals, when the temperature is 5 Kelvin. This is a rational function. As the pressure increases, the volume decreases and approaches zero.     represents the combinations of temperature and pressure that result in a volume of 1 mole of gas of 0.5 .     are traces that are linear functions with a positive slope.   are traces that are positive rational functions for .  These traces indicate the graph of looks like a sheet of paper angling up through the axis in the first octant that bends up towards the -plane.    The volume is directly proportional to the temperature and inversely proportional to the pressure. As temperature increases, the volume increases. As pressure increases, the volume decreases.          represents the volume of 1 mole of a gas at a temp T, kelvin, when the pressure is 1000 pascals. This is a linear function with a positive slope of . As the temperature increases, the volume increases at a constant rate of .     represents the volume of 1 mole of a gas with a pressure of P, pascals, when the temperature is 5 Kelvin. This is a rational function. As the pressure increases, the volume decreases and approaches zero.     represents the combinations of temperature and pressure that result in a volume of 1 mole of gas of 0.5 .     are traces that are linear functions with a positive slope.   are traces that are positive rational functions for .  These traces indicate the graph of looks like a sheet of paper angling up through the axis in the first octant that bends up towards the -plane.    The volume is directly proportional to the temperature and inversely proportional to the pressure. As temperature increases, the volume increases. As pressure increases, the volume decreases.     "
},
{
  "id": "PlottingWA",
  "level": "2",
  "url": "sec_3space.html#PlottingWA",
  "type": "Exercise",
  "number": "3.2.9",
  "title": "Plotting in 3D with Technology.",
  "body": "Plotting in 3D with Technology  Technology is widely available to plot equations in 3-space.   GeoGebra 3d is one technology to utilize for plotting equations involving three variables. Use GeoGebra 3d to sketch the graph of the ellipsoid . Then attempt to reproduce .  Another easy tool to use for graphing is Wolfram Alpha . Use this tool to reproduce the graph of over the domain as shown in . Then, attempt to reproduce .  AI (such as Microsoft Copilot ) is another tool to utilize (carefully!) for producing images of functions of two variables. Prompt Copilot to graph over the domain .       GeoGebra 3d input of produces .  Graph of .   An ellipsoid.     The Wolfram Alpha input plot3d(exp(-x^2-y^2),x=-5..5, y=-5..5,z=0..1) produces .  Graph of .   A gaussian.     Microsoft Copilot produces   Graph of on domain .   The graph of a hyperboloid.      "
},
{
  "id": "sec_contour_diagrams",
  "level": "1",
  "url": "sec_contour_diagrams.html",
  "type": "Section",
  "number": "3.3",
  "title": "Contour Diagrams",
  "body": " Contour Diagrams     What is a contour diagram and how can it be used to understand functions of two variables?    What do isobars, isotherms, and isodrosotherms have in common and how are they related to various surfaces?    What is a level set? How can level sets be used to represent functions of several variables?      A surface representing the graph of often gives a good idea of behavior of function. However, it can be difficult to read at times. Contour maps (see ) are more often used. The curves on a topographical map that separate lower elevations from higher elevations are called contour lines contour lines because they outline the contour or shape of the land.   A topographical map. (Source: greenbelly.com )   A topographical map.    Because every point along the same contour has the same elevation, contour lines are also called level curves level curves or level sets level sets . We usually draw contours for equally spaced values of height . In this way the more closely spaced the contours, the steeper the terrain.    Isobars  Atmospheric pressure, a function of location, is measured in millibars. The map in shows the sea-level pressures for various locations.   Atmospheric pressure as measured at several locations. (Source: weather.gov )   Sea-level pressures.    In , lines of equal values have been connected and labeled (using only the last two digits of the millibar measurement). These level curves for atmospheric pressure are called isobars isobars . Isobars can be used to identify \"Highs\" and \"Lows\". These too have been labeled in .   Level curves denote locations of equal atmospheric pressure. (Source: weather.gov )   Level curves of atmospheric pressure.     Drawing Isotherms Draw temperature contours, also known as isotherms isotherms , on the map given in starting with and ending with with a contour interval of .   Contour map for . (Source: weather.gov )   Drawing isotherms on midwest map.     Contour diagrams and graphs are two geometric ways of representing a function of two variables. A contour diagram is formed by joining all the points at the same height on the surface and dropping the curve that is formed into the -plane (think of slicing the surface with equally spaced horizontal planes). In much the same way as shown in , the graph of a function (a surface) is found by taking each contour and lifting it above the plane to a height of equal value.   Contour lines are obtained from a surface by slicing it with horizontal planes.   Slicing a surface with horizontal planes.    Contours and Graphs   The graph of and the three planes , , and .   Cutting a paraboloid.      The graph of together with the planes , , and is shown in . Find equations for the contours associated with these three planes.  Shown in is a contour plot of . Note that the circles in the plot are not equally spaced. What information does this give you about the function ?    A contour plot of .   Contours of a paraboloid.         gives , an ellipse centered at the origin ; gives , an ellipse; gives an ellipse .  This indicates that the graph of gets steeper as we move away from the origin. In other words, close contours indicate the steepness of a graph.     Linear Functions in 3-Space  In 2-space, a linear function is written in the form The graph of was a line and the level sets were equally-spaced points on the -axis (see ). Differentiable functions of one variable have graphs that look like a line when we zoom in. That is, they are locally linear at with slope .   A linear function in one variable has equally-spaced level sets consisting of points on the -axis.   Level Sets in 1D.     A linear function of two variables is one that can be written in the form The graphs of linear functions in two variables are planes and their level sets are equally-spaced parallel lines in the -plane (see ). Differentiable functions of two-variables have graphs that look like a plane when we zoom in. They are locally linear at and, just like a plane, have two slopes - one in the -direction and one in the -direction.   Planes are surfaces having equally-spaced, parallel contour lines.   Contours for Planes are Equally Spaced.      Functions of Three Variables  The graph of a function of one variable is a curve in 2-space. It has a one-dimensional level set (points on a line) as seen in . The graph of a function of two variables is a surface in 3-space. It has a two-dimensional level set (curves in a plane) as seen in . The graph of a function of three variables would be a solid in 4-space. It has a three-dimensional level set (surfaces in space). An example of a single level set (surface) for the function of three variables that gives the atmospheric pressure at location is shown in .   The isobaric surface mb. (Source: flightliteracy.com )   An Isobaric Surface.     Level Surfaces  A level surface level surface (or level set) of a function of three variables, , is a surface of the form , where is constant.  A function may be represented in each of the following four ways.  (geometrically) As the family of level surfaces obtained by allowing to vary.  (algebraically) As a formula .  (verbally) As a description of how the function behaves (e.g. is directly proportional to the distance from a point in space).  (numerically) As a 3D table of values.    Isobaric Maps  One way to understand the atmospheric pressure function is through a series of 2D isobaric maps. Essentially, for a given pressure (e.g. 500 mb), contours showing the values at which are drawn.   A series of 2D isobaric maps represents atmospheric pressure . (Source: Meteorology Today, by C.D. Ahrens)   Another way to understand an isobaric surface.      Numerical Representation  Imagine a three-dimensional grid space consisting of several planes at different heights. Each point is a point in the three-dimensional space (longitude , latitude , and altitude ), and the value for a specific point is that point's value of a physical quantity (e.g. temperature ).   Planes at different heights are used to numerically represent a function of three variables. (Source: https:\/\/www.alibabacloud.com\/blog\/meteorological-data-storage-and-querying-with-nosql_594635 )   Numerically representing a 3D function.    For example, an altitude of , produces the table in for temperature .   Temperature at various locations for which .   Numerically representing a 3D function for z=1.    At altitude , we might have the table in for temperature .   Temperature at various locations for which .   Numerically representing a 3D function for z=2.    Elements in a database representing temperature would be 4-tuples:(30.0,90,1,68.2), (30.0,90.5,1,72.1), (30.0, 91.0, 1, 72.5), ... (30.0,90,2,70.9), (30.0,90.5,2,70.5), ...      Exercises  Reading a Contour Plot  Reading a Contour Plot II  Slope of Contour Line  Draw Contour Diagram: Linear Function  Draw Contour Diagram  Buck River  Match the Contour to the Graph    Contour Through a Point   Find an equation for the contour of that goes through the point .  Equation:        , an equation for the contour is        Intersecting Contours? Can two contour lines intersect? If so, when? If not, why not? No. Contour lines represent output of a function. Functions can only have one output for any given input.  Windchill Contours  The wind chill tells you how cold it feels as a function of the air temperature and wind speed. is a contour diagram of wind chill .   Contour diagram for .   Contours for windchill.      If the wind speed is 15 mph, what temperature feels like ?  Estimate the wind chill if the temperature is and the wind speed is 10 mph.  Humans are at extreme risk when the wind chill is below . If the temperature is , estimate the wind speed at which extreme risk begins.  If the wind speed is 15 mph and the temperature drops by , approximately how much colder do you feel?        approximately   approximately 20 mph  approximately colder    Level Sets in 1, 2, 3 Variables Compare and contrast the level sets for the following functions.  linear functions of one variable (e.g. )  linear functions of two variables (e.g. )  linear functions of three variables (e.g. )     The level sets of a linear function of one variable are equally spaced points on the -axis (i.e. in the domain space). See also .  The level sets of a linear function in two variables are parallel, equally spaced lines. See also .  The level sets of a linear function in three variables are parallel, equally spaced planes in space.     "
},
{
  "id": "sec_contour_diagrams-2",
  "level": "2",
  "url": "sec_contour_diagrams.html#sec_contour_diagrams-2",
  "type": "Motivating Questions",
  "number": "3.3",
  "title": "",
  "body": "   What is a contour diagram and how can it be used to understand functions of two variables?    What do isobars, isotherms, and isodrosotherms have in common and how are they related to various surfaces?    What is a level set? How can level sets be used to represent functions of several variables?    "
},
{
  "id": "sec_contour_diagrams-3-1",
  "level": "2",
  "url": "sec_contour_diagrams.html#sec_contour_diagrams-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contour lines "
},
{
  "id": "greenbelly",
  "level": "2",
  "url": "sec_contour_diagrams.html#greenbelly",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": " A topographical map. (Source: greenbelly.com )   A topographical map.   "
},
{
  "id": "sec_contour_diagrams-3-3",
  "level": "2",
  "url": "sec_contour_diagrams.html#sec_contour_diagrams-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "level curves level sets "
},
{
  "id": "isobars",
  "level": "2",
  "url": "sec_contour_diagrams.html#isobars",
  "type": "Example",
  "number": "3.3.2",
  "title": "Isobars.",
  "body": " Isobars  Atmospheric pressure, a function of location, is measured in millibars. The map in shows the sea-level pressures for various locations.   Atmospheric pressure as measured at several locations. (Source: weather.gov )   Sea-level pressures.    In , lines of equal values have been connected and labeled (using only the last two digits of the millibar measurement). These level curves for atmospheric pressure are called isobars isobars . Isobars can be used to identify \"Highs\" and \"Lows\". These too have been labeled in .   Level curves denote locations of equal atmospheric pressure. (Source: weather.gov )   Level curves of atmospheric pressure.    "
},
{
  "id": "drawingisotherms",
  "level": "2",
  "url": "sec_contour_diagrams.html#drawingisotherms",
  "type": "Checkpoint",
  "number": "3.3.5",
  "title": "Drawing Isotherms.",
  "body": "Drawing Isotherms Draw temperature contours, also known as isotherms isotherms , on the map given in starting with and ending with with a contour interval of .   Contour map for . (Source: weather.gov )   Drawing isotherms on midwest map.    "
},
{
  "id": "Plotting3D4",
  "level": "2",
  "url": "sec_contour_diagrams.html#Plotting3D4",
  "type": "Figure",
  "number": "3.3.7",
  "title": "",
  "body": " Contour lines are obtained from a surface by slicing it with horizontal planes.   Slicing a surface with horizontal planes.   "
},
{
  "id": "contoursandgraphs",
  "level": "2",
  "url": "sec_contour_diagrams.html#contoursandgraphs",
  "type": "Checkpoint",
  "number": "3.3.8",
  "title": "Contours and Graphs.",
  "body": "Contours and Graphs   The graph of and the three planes , , and .   Cutting a paraboloid.      The graph of together with the planes , , and is shown in . Find equations for the contours associated with these three planes.  Shown in is a contour plot of . Note that the circles in the plot are not equally spaced. What information does this give you about the function ?    A contour plot of .   Contours of a paraboloid.         gives , an ellipse centered at the origin ; gives , an ellipse; gives an ellipse .  This indicates that the graph of gets steeper as we move away from the origin. In other words, close contours indicate the steepness of a graph.   "
},
{
  "id": "LevelSets1D",
  "level": "2",
  "url": "sec_contour_diagrams.html#LevelSets1D",
  "type": "Figure",
  "number": "3.3.11",
  "title": "",
  "body": " A linear function in one variable has equally-spaced level sets consisting of points on the -axis.   Level Sets in 1D.    "
},
{
  "id": "EquallySpacedContours",
  "level": "2",
  "url": "sec_contour_diagrams.html#EquallySpacedContours",
  "type": "Figure",
  "number": "3.3.12",
  "title": "",
  "body": " Planes are surfaces having equally-spaced, parallel contour lines.   Contours for Planes are Equally Spaced.   "
},
{
  "id": "isobaricsurface1",
  "level": "2",
  "url": "sec_contour_diagrams.html#isobaricsurface1",
  "type": "Figure",
  "number": "3.3.13",
  "title": "",
  "body": " The isobaric surface mb. (Source: flightliteracy.com )   An Isobaric Surface.   "
},
{
  "id": "levelsetdefn",
  "level": "2",
  "url": "sec_contour_diagrams.html#levelsetdefn",
  "type": "Definition",
  "number": "3.3.14",
  "title": "Level Surfaces.",
  "body": " Level Surfaces  A level surface level surface (or level set) of a function of three variables, , is a surface of the form , where is constant.  "
},
{
  "id": "isobaricmaps",
  "level": "2",
  "url": "sec_contour_diagrams.html#isobaricmaps",
  "type": "Example",
  "number": "3.3.15",
  "title": "Isobaric Maps.",
  "body": " Isobaric Maps  One way to understand the atmospheric pressure function is through a series of 2D isobaric maps. Essentially, for a given pressure (e.g. 500 mb), contours showing the values at which are drawn.   A series of 2D isobaric maps represents atmospheric pressure . (Source: Meteorology Today, by C.D. Ahrens)   Another way to understand an isobaric surface.    "
},
{
  "id": "numericalrepresentation",
  "level": "2",
  "url": "sec_contour_diagrams.html#numericalrepresentation",
  "type": "Example",
  "number": "3.3.17",
  "title": "Numerical Representation.",
  "body": " Numerical Representation  Imagine a three-dimensional grid space consisting of several planes at different heights. Each point is a point in the three-dimensional space (longitude , latitude , and altitude ), and the value for a specific point is that point's value of a physical quantity (e.g. temperature ).   Planes at different heights are used to numerically represent a function of three variables. (Source: https:\/\/www.alibabacloud.com\/blog\/meteorological-data-storage-and-querying-with-nosql_594635 )   Numerically representing a 3D function.    For example, an altitude of , produces the table in for temperature .   Temperature at various locations for which .   Numerically representing a 3D function for z=1.    At altitude , we might have the table in for temperature .   Temperature at various locations for which .   Numerically representing a 3D function for z=2.    Elements in a database representing temperature would be 4-tuples:(30.0,90,1,68.2), (30.0,90.5,1,72.1), (30.0, 91.0, 1, 72.5), ... (30.0,90,2,70.9), (30.0,90.5,2,70.5), ...  "
},
{
  "id": "Estimatefvaluefromcontours",
  "level": "2",
  "url": "sec_contour_diagrams.html#Estimatefvaluefromcontours",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "Reading a Contour Plot.",
  "body": "Reading a Contour Plot "
},
{
  "id": "IncOrDecfromcontours",
  "level": "2",
  "url": "sec_contour_diagrams.html#IncOrDecfromcontours",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "Reading a Contour Plot II.",
  "body": "Reading a Contour Plot II "
},
{
  "id": "SlopeOfContourLine",
  "level": "2",
  "url": "sec_contour_diagrams.html#SlopeOfContourLine",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "Slope of Contour Line.",
  "body": "Slope of Contour Line "
},
{
  "id": "DrawContourDiagram1",
  "level": "2",
  "url": "sec_contour_diagrams.html#DrawContourDiagram1",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "Draw Contour Diagram: Linear Function.",
  "body": "Draw Contour Diagram: Linear Function "
},
{
  "id": "DrawContourDiagram2",
  "level": "2",
  "url": "sec_contour_diagrams.html#DrawContourDiagram2",
  "type": "Exercise",
  "number": "3.3.5",
  "title": "Draw Contour Diagram.",
  "body": "Draw Contour Diagram "
},
{
  "id": "BuckRiver",
  "level": "2",
  "url": "sec_contour_diagrams.html#BuckRiver",
  "type": "Exercise",
  "number": "3.3.6",
  "title": "Buck River.",
  "body": "Buck River "
},
{
  "id": "MatchContourGraph",
  "level": "2",
  "url": "sec_contour_diagrams.html#MatchContourGraph",
  "type": "Exercise",
  "number": "3.3.7",
  "title": "Match the Contour to the Graph.",
  "body": "Match the Contour to the Graph "
},
{
  "id": "ContourThruPoint",
  "level": "2",
  "url": "sec_contour_diagrams.html#ContourThruPoint",
  "type": "Exercise",
  "number": "3.3.8",
  "title": "Contour Through a Point.",
  "body": "Contour Through a Point   Find an equation for the contour of that goes through the point .  Equation:        , an equation for the contour is      "
},
{
  "id": "intersectingcontours",
  "level": "2",
  "url": "sec_contour_diagrams.html#intersectingcontours",
  "type": "Exercise",
  "number": "3.3.9",
  "title": "Intersecting Contours?",
  "body": "Intersecting Contours? Can two contour lines intersect? If so, when? If not, why not? No. Contour lines represent output of a function. Functions can only have one output for any given input. "
},
{
  "id": "winchillcontours",
  "level": "2",
  "url": "sec_contour_diagrams.html#winchillcontours",
  "type": "Exercise",
  "number": "3.3.10",
  "title": "Windchill Contours.",
  "body": "Windchill Contours  The wind chill tells you how cold it feels as a function of the air temperature and wind speed. is a contour diagram of wind chill .   Contour diagram for .   Contours for windchill.      If the wind speed is 15 mph, what temperature feels like ?  Estimate the wind chill if the temperature is and the wind speed is 10 mph.  Humans are at extreme risk when the wind chill is below . If the temperature is , estimate the wind speed at which extreme risk begins.  If the wind speed is 15 mph and the temperature drops by , approximately how much colder do you feel?        approximately   approximately 20 mph  approximately colder   "
},
{
  "id": "levelsetsin3d",
  "level": "2",
  "url": "sec_contour_diagrams.html#levelsetsin3d",
  "type": "Exercise",
  "number": "3.3.11",
  "title": "Level Sets in 1, 2, 3 Variables.",
  "body": "Level Sets in 1, 2, 3 Variables Compare and contrast the level sets for the following functions.  linear functions of one variable (e.g. )  linear functions of two variables (e.g. )  linear functions of three variables (e.g. )     The level sets of a linear function of one variable are equally spaced points on the -axis (i.e. in the domain space). See also .  The level sets of a linear function in two variables are parallel, equally spaced lines. See also .  The level sets of a linear function in three variables are parallel, equally spaced planes in space.   "
},
{
  "id": "sec_spherical_coords",
  "level": "1",
  "url": "sec_spherical_coords.html",
  "type": "Section",
  "number": "3.4",
  "title": "Additional Coordinate Systems",
  "body": " Additional Coordinate Systems     Are there alternative methods for representing locations in space?    What are polar coordinates? How are polar coordinates useful?    What are spherical coordinates? How are spherical coordinates related to rectangular coordinates? How is the conversion done?      When it comes to describing locations in two or three dimensions, there are various approaches beyond using the rectangular coordinate system. In this section, we study a few coordinate systems that are generally useful in meteorology.   Pressure as a Vertical Coordinate  In modeling the atmosphere, it often makes sense to change the vertical coordinate height ( ) to pressure ( ). The hydrostatic equation hydrostatic equation  is what allows us to do this. Here is the density of air, is the gravitational constant, represents pressure, and represents height. For an ideal gas, density is proportional to pressure and inversely proportional to temperature . That is, for some constant . That is, This equation tells us that pressure falls off exponentially with height (the only functions whose derivatives are constant multiples of themselves are exponential functions). That is, there is a one-to-one correspondence between a heights and pressures . This is why we can uniquely describe the location of any air parcel using its pressure rather than its height . There are advantages and disadvantages to using pressure as the vertical coordinate.   Left: Atmospheric pressure (in hPa) is in one-to-one correspondence with height (in km). Right: Heights in a column of air correspond to distinct pressure readings.            Isentropic Coordinates  A less familiar vertical coordinate to use in place of height is potential temperature  -- a combination of temperature and pressure. Its value gets larger the higher you go in the atmosphere, sort of like altitude. In large-scale stratospheric flow conditions, air parcels move so as to conserve potential temperature (i.e. adiabatically, without losing or gaining heat). Winds in the atmosphere blow along surfaces of constant potential temperature most of the time, making it an advantageous choice for a vertical coordinate. A simple rule-of-thumb for converting potential temperature to height (via Crutzen and Freie) is given by where is measured in kilometers. Other formulas relating potential temperature to height , or , also demonstrate the one-to-one correspondence between these variables ( John Knox, NASA ).   Left: Example potential temperature profile with latitude for February. Right: Example potential temperature profile with latitude for July. Source: NWS Climate Prediction Center .        In what follows, we study coordinate systems in widespread use due to their value in describing behavior involving circular or spherical regions.    Polar Coordinates  The rectangular coordinate system can be thought of as a means to provide directions to a particular location in the plane. From a \"home\" position (the origin), if we walked unit east and units south to reach a location , we would denote such directions by the ordered pair . shows another ways we could describe how to reach location from the origin. If we are standing at the origin facing east (in the direction of the positive -axis), we could reach by turning our body ( radians) clockwise and walking units forward. Such directions could be represented by the ordered pair or . We use a negative sign for the angle of rotation since counterclockwise is normally treated positively in mathematics. These ordered pairs, or directions, are polar coordinates polar coordinates .   Different directions to reach location .   Polar coordinates     It is often easier to describe circular behavior using polar coordinates than by using rectangular coordinates. The equation of a unit circle, for example, can be describe by in polar coordinates. This is less complicated than the equation used to describe this circle using rectangular coordinates.  The rectangular coordinates of a point are given by an ordered pair , where is the (signed) distance the point lies from the -axis to and is the (signed) distance the point lies from the -axis to . In polar coordinates, we locate the point by considering the distance the point lies from the origin, , and the angle the line segment from the origin to forms with the positive -axis.   Polar to Rectangular Conversions  Point lies 2 units east of the origin and makes an angle of ( radians) with the positive -axis. The polar coordinates for point are . The rectangular coordinates for point are .   Point has polar coordinates of and rectangular coordinates of .   Polar coordinates of (0,2).      More Polar and Rectangular Conversions  Determine both polar and rectangular coordinates of the following points.    The point that lies 1 unit east of the origin on the positive -axis.    The point that lies 3 units from the origin such that makes an angle of ( radians) with the positive -axis.      Polar coordinates are . Rectangular coordinates are the same, .  Polar coordinates are or . Rectangular coordinates are or .  Point has polar coordinates of and rectangular coordinates of .   Polar coordinates .         Converting from Polar to Rectangular Coordinates Convert each of the following from polar to rectangular coordinates.         Using equations with and gives and . Therefore this point can be represented as in rectangular coordinates.  Using equations with and gives and . Therefore this point can be represented as in rectangular coordinates.  Using equations with and gives and . Therefore this point can be represented as in rectangular coordinates.     and indicate that the two pieces of information completely determine the location of a point: either the traditional coordinates, or alternately, the distance from the point to the origin along with the angle that the line through the origin and the point makes with the positive -axis. We write to denote the point's location in its polar coordinate representation.   Left: The relationship between the polar coordinates of a point and the rectangular coordinates of . Right: The polar coordinate grid.       The rectangular coordinate system is best suited for graphs and regions that are naturally considered over a rectangular grid. The polar coordinate system is an alternative that offers good options for functions and domains that have more circular characteristics. Trigonometry and the Pythagorean theorem allow for straightforward conversion from rectangular to polar coordinate systems, and vice versa.   Converting between rectangular and polar coordinates     Converting from rectangular to polar  If we are given the rectangular coordinates of a point , then the polar coordinates of satisfy     Converting from polar to rectangular  If we are given the polar coordinates of a point , then the rectangular coordinates of satisfy        Note: The sign of does not uniquely determine the quadrant in which lies, so we have to determine the value of from the location of the point. In other words, more care has to be paid when using polar coordinates than rectangular coordinates.   Converting from Rectangular to Polar Coordinates  Convert each of the following points from rectangular to polar coordinates.          Using equations , with and gives or and or . The point can be represented as either or in polar coordinates.  Again using equations , but this time with and gives or and . Since the point lies in quadrant II, we compute radians (about 127 degrees).  Here so that . From equations we also have . Direct application of the second equation leads to division by zero! Graphing the point on the rectangular coordinate system reveals that the point is located on the positive -axis. The angle between the positive -axis and the positive -axis is ( radians). Therefore this point can be represented as either or in polar coordinates.  Using equations , with and gives or and or . The point can thus be represented as either or in polar coordinates.      PPI (Radar)  Radar supplies data in a format closely related to polar coordinates. Rather than supplying the polar angle , data is stored in a table of range-azimuth ordered pairs where is the azimuth sometimes also denoted by . The azimuth measures the angle in a clockwise fashion with as due north.   Left: Image of a thunderstorm on a PPI. (Source: Public Domain (NOAA)) Right: Radar supplies the location at point as a range-azimuth ordered pair . The angle is the angle measured clockwise from the axis pointing due north and the segment connecting the pole with the point .     Radar uses range-azimuth ordered pairs.      A plan position indicator (PPI) plan position indicator is a type of radar display that represents the radar antenna in the center of the display, with the distance from it drawn as concentric circles. As the radar antenna rotates, a radial trace on the PPI sweeps in unison with it about the center point. To generate a picture similar to a PPI on a raster scan monitor with a line sequential image (such as a television or computer monitor), this radar data must first be converted to rectangular coordinates . Since , the equations accomplish this task.   Converting PPI Data  Convert PPI data sent in to rectangular coordinates and a color for a computer monitor. Place the radar antenna at the center of the screen.   PPI data.      color    2  90  blue    30  120  white    30  180  red      In order for the antenna to be located at the center of the screen, each -value must be shifted units right and each -value must be shifted units up. For example, the ordered pair is converted to and   Converted PPI data.      color    962  540  blue    986  525  white    960  510  red       The polar representation of a point is not unique. For example, the polar coordinates and both represent the point in the rectangular system. Also, the value of can be negative. Therefore, the point with polar coordinates also represents the point in the rectangular system. Every point in the plane has an infinite number of representations in polar coordinates. However, each point in the plane has only one representation in the rectangular coordinate system.    Spherical Coordinates  We have encountered two different coordinate systems in the plane the rectangular and polar coordinates systems and seen how polar coordinates form a convenient alternative. In a similar way, there is an additional natural coordinate system, spherical coordinates spherical coordinates , in three-dimensional space. We now investigate this system (which builds upon polar coordinates in the plane).   The spherical coordinates of a point. Any point in space can be represented in spherical coordinates with , , and . See, for example, https:\/\/www.geogebra.org\/m\/h9xS5ZZs .    The spherical coordinates of a point in space are (rho), , and (phi), where is the distance from the point to the origin, has the same interpretation it does in polar coordinates, and is the angle between the positive axis and the vector from the origin to the point, as illustrated in . You should convince yourself that any point in space can be represented in spherical coordinates with , , and .   Converting Latitude and Longitude to Spherical Coordinates  The latitude of Columbus, Ohio, is N and the longitude is W. The radius of Earth is 3961 miles. The location of Columbus in spherical coordinates can be described by . We use since that is the angle Columbus makes with the positive -axis which is runs from the center of Earth through the north pole. is the angle Columbus makes with the equator. Longitude is measured in degrees east of the -plane.   In the latitude–longitude system, angles describe the location of a point on Earth relative to the equator and the prime meridian. Source: OpenStax Calculus Volume 3 .     Where in the World is Washington, DC?  Washington, DC, is located at N and W (see ). The radius of Earth is 3961 miles. Express the location of Washington, DC, in spherical coordinates.   Washington, DC, as viewed from space. Source: OpenStax Calculus Volume 3 .     We have , , and . So the spherical coordinates are .   demonstrates why the angle is sometimes called the cone angle or the colatitude colatitude . The angle is called the polar angle or longitude.   For the following questions, consider the point whose Cartesian coordinates are .    What is the distance from to the origin? Your result is the value of in the spherical coordinates of .    Determine the point that is the projection of onto the -plane. Then, use this projection to find the value of in the polar coordinates of the projection of that lies in the plane. Your result is also the value of for the spherical coordinates of the point.    Based on the illustration in Figure , how is the angle determined by and the coordinate of ? Use a well-chosen right triangle to find the value of , which is the final component in the spherical coordinates of . Draw a carefully labeled picture that clearly illustrates the values of , , and in this example, along with the original rectangular coordinates of .    Based on your responses to (a), (b), and (c), if we are given the Cartesian coordinates of a point , how are the values of , , and in the spherical coordinates of determined by , , and ?     As we saw in Activity , the spherical coordinates spherical coordinates of a point in 3-space have the form , where is the distance from the point to the origin, has the same meaning as in polar coordinates, and is the angle between the positive axis and the vector from the origin to the point. The overall situation is illustrated in .   Converting from spherical to Cartesian coordinates.    The example in Activity and suggest how to convert between Cartesian and spherical coordinates.   Coverting between Cartesian and spherical coordinates     Converting from Cartesian to spherical  If we are given the Cartesian coordinates of a point , then the spherical coordinates of satisfy where in the latter two equations, we require and .    Converting from spherical to Cartesian  If we are given the spherical coordinates of a point , then the Cartesian coordinates of satisfy        Rectangular Coordinates of Columbus, OH  In , the spherical coordinates of Columbus, OH, were described by . Here we assumed, and continue to assume, that the origin is at the center of the earth, the positive -axis runs from the origin to where the prime meridian and the equator intersect on the surface, and the positive -axis runs from the origin through the north pole. In rectangular coordinates, we use to locate Columbus at where all the units are miles (as measured from the center of the earth).   When it comes to thinking about particular surfaces in spherical coordinates, we usually write as a function of and ; this is a natural analog to polar coordinates, where we often think of our distance from the origin in the plane as being a function of . In spherical coordinates, we likewise often view as a function of and , thus viewing distance from the origin as a function of two key angles.  In the following activity, we explore several basic equations in spherical coordinates and the surfaces they generate.   In this activity, we graph some surfaces using spherical coordinates. To improve your intuition and test your understanding, you should first think about what each graph should look like before you plot it using appropriate technology.   What familiar surface is described by the points in spherical coordinates with , , and ? How does this particular example demonstrate the reason for the name of this coordinate system? What if we restrict to ?    What familiar surface is described by the points in spherical coordinates with , , and ?    What familiar shape is described by the points in spherical coordinates with , , and ?    Plot the graph of , for and . How does the resulting surface appear?      As the name and Activity indicate, spherical coordinates are particularly useful for describing curves and surfaces that are spherical in nature.   Describing a Line of Latitude  The set of spherical coordinates describes the set of locations on the earth at the S line of latitude.   A line of latitude at S.   Latitude of 20 degrees south.      Describing a Line of Longitude  Use spherical coordinates to describe the E line of longitude.   Assuming that the prime meridian is located in the -plane and crosses the positive -axis, the set of spherical coordinates describe this line.   Finally, we note that the use of spherical coordinates varies significantly. Mathematicians and meteorologists use a variety of notations and sometimes define variables differently. To illustrate this point, note that one common means of defining spherical coordinates by meteorologists appears in .   Meteorologists often use spherical coordinates where is the location's distance from the origin, is longitude, and is latitude. Longitude is measured in degrees east of the prime meridian and latitude is measured in degrees north of the equator.   Spherical Coordinates used by meteorologists.      The Haversine Distance Formula  Using notation for locations on the earth, we can compute the great circle distance (as one would traverse the surface of our beloved sphere) using the Haversine distance formula Haversine distance formula . With representing longitude and representing latitude of a location, and representing the radius of the planet, we have . Note that when computing the arcsine, the result must be in radians.   The great circle distance between two points and on a sphere is given by the Haversine distance formula .   The Haversine Distance Formula.         Exercises  Identify Polar Coordinates  Plot Point Given in Polar Coordinates  Convert Polar Coordinates to Cartesian  Convert Cartesian Coordinates to Polar  Convert Cartesian Coordinates to Polar II  Match Expressions  Convert from Rectangular to Spherical Coordinates  Convert from Spherical to Rectangular Coordinates  Match Surfaces with Equations Described in Spherical Coordinates   Convert from Cartesian Coordinates to Spherical Coordinates Convert from Cartesian to spherical coordinates.                  , ,   , ,    , ,    , ,    The point   lies in the -plane (i.e. has ) and so has and  lies on the negative -axis and so has and  is a distance from the origin and so has .    The point   lies in the -plane (i.e. has ) and so has and  lies on the positive -axis and so has and  is a distance from the origin and so has .    The point   lies on the negative -axis and so has and arbitrary and  is a distance from the origin and so has .    The point   has and  has so that and and  has so that . As is in the second quadrant, we have and so .      Land Down Under  Sydney, Australia is at S and E. Express Sydney’s location in spherical coordinates. Assume Earth has a radius of 4000 miles.   , , and so the spherical coordinates of Sydney are .   Sydney's Rectangular Coordinates  Sydney, Australia is at S and E. Express Sydney’s location in rectangular coordinates. Spherical coordinates for Sydney were found in .   The spherical coordinates of Sydney are . In rectangular coordinates, we use to locate Sydney at where the units are miles.   Describing the Antartic  The Antarctic is usually defined simply as that region south of south latitude, S. Use spherical coordinates to describe this region as a set.     Describing the Troposphere and Stratosphere  According to NASA, the combined troposphere and stratosphere reach 31 miles above the surface of the earth. Use spherical coordinates to describe this region.   or, more compactly,   Distance Between Latitude Lines  Earth has a radius of approximately 3961 miles (6371 km). Use the Haversine formula to determine the great circle distance between N and N.   .   Radar and Spherical Coordinates  Radars use electromagnetic waves to detect objects and measure their positions in space. Object positioning is done by determining distance in relation to the radar equipment. Three coordinates: azimuth (clockwise around the vertical axis), elevation (from the horizontal axis) and the distance from the pointing equipment. The set of measurements distance-azimuth-elevation constitutes a set of spherical coordinates with the radar itself at the origin. Determine the rectangular coordiantes in terms of these spherical coordinates.   Spherical coordinates for radar where is the location's distance from the radar (origin), the azimuth (measured clockwise from the positive -axis, and the angle of elevation (from the -plane).   Spherical Coordinates for radar.      The rectangular coordinates are    "
},
{
  "id": "sec_spherical_coords-2",
  "level": "2",
  "url": "sec_spherical_coords.html#sec_spherical_coords-2",
  "type": "Motivating Questions",
  "number": "3.4",
  "title": "",
  "body": "   Are there alternative methods for representing locations in space?    What are polar coordinates? How are polar coordinates useful?    What are spherical coordinates? How are spherical coordinates related to rectangular coordinates? How is the conversion done?    "
},
{
  "id": "pressurevertical",
  "level": "2",
  "url": "sec_spherical_coords.html#pressurevertical",
  "type": "Example",
  "number": "3.4.1",
  "title": "Pressure as a Vertical Coordinate.",
  "body": " Pressure as a Vertical Coordinate  In modeling the atmosphere, it often makes sense to change the vertical coordinate height ( ) to pressure ( ). The hydrostatic equation hydrostatic equation  is what allows us to do this. Here is the density of air, is the gravitational constant, represents pressure, and represents height. For an ideal gas, density is proportional to pressure and inversely proportional to temperature . That is, for some constant . That is, This equation tells us that pressure falls off exponentially with height (the only functions whose derivatives are constant multiples of themselves are exponential functions). That is, there is a one-to-one correspondence between a heights and pressures . This is why we can uniquely describe the location of any air parcel using its pressure rather than its height . There are advantages and disadvantages to using pressure as the vertical coordinate.   Left: Atmospheric pressure (in hPa) is in one-to-one correspondence with height (in km). Right: Heights in a column of air correspond to distinct pressure readings.          "
},
{
  "id": "isentropiccoordinates",
  "level": "2",
  "url": "sec_spherical_coords.html#isentropiccoordinates",
  "type": "Example",
  "number": "3.4.3",
  "title": "Isentropic Coordinates.",
  "body": " Isentropic Coordinates  A less familiar vertical coordinate to use in place of height is potential temperature  -- a combination of temperature and pressure. Its value gets larger the higher you go in the atmosphere, sort of like altitude. In large-scale stratospheric flow conditions, air parcels move so as to conserve potential temperature (i.e. adiabatically, without losing or gaining heat). Winds in the atmosphere blow along surfaces of constant potential temperature most of the time, making it an advantageous choice for a vertical coordinate. A simple rule-of-thumb for converting potential temperature to height (via Crutzen and Freie) is given by where is measured in kilometers. Other formulas relating potential temperature to height , or , also demonstrate the one-to-one correspondence between these variables ( John Knox, NASA ).   Left: Example potential temperature profile with latitude for February. Right: Example potential temperature profile with latitude for July. Source: NWS Climate Prediction Center .       "
},
{
  "id": "sec_spherical_coords-4-2",
  "level": "2",
  "url": "sec_spherical_coords.html#sec_spherical_coords-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polar coordinates "
},
{
  "id": "polarcoordsintro",
  "level": "2",
  "url": "sec_spherical_coords.html#polarcoordsintro",
  "type": "Figure",
  "number": "3.4.5",
  "title": "",
  "body": " Different directions to reach location .   Polar coordinates    "
},
{
  "id": "convertrectangulartopolar",
  "level": "2",
  "url": "sec_spherical_coords.html#convertrectangulartopolar",
  "type": "Example",
  "number": "3.4.6",
  "title": "Polar to Rectangular Conversions.",
  "body": " Polar to Rectangular Conversions  Point lies 2 units east of the origin and makes an angle of ( radians) with the positive -axis. The polar coordinates for point are . The rectangular coordinates for point are .   Point has polar coordinates of and rectangular coordinates of .   Polar coordinates of (0,2).     "
},
{
  "id": "PA-7B-3",
  "level": "2",
  "url": "sec_spherical_coords.html#PA-7B-3",
  "type": "Checkpoint",
  "number": "3.4.8",
  "title": "More Polar and Rectangular Conversions.",
  "body": "More Polar and Rectangular Conversions  Determine both polar and rectangular coordinates of the following points.    The point that lies 1 unit east of the origin on the positive -axis.    The point that lies 3 units from the origin such that makes an angle of ( radians) with the positive -axis.      Polar coordinates are . Rectangular coordinates are the same, .  Polar coordinates are or . Rectangular coordinates are or .  Point has polar coordinates of and rectangular coordinates of .   Polar coordinates .       "
},
{
  "id": "ez-sphericalp2r",
  "level": "2",
  "url": "sec_spherical_coords.html#ez-sphericalp2r",
  "type": "Checkpoint",
  "number": "3.4.10",
  "title": "Converting from Polar to Rectangular Coordinates.",
  "body": "Converting from Polar to Rectangular Coordinates Convert each of the following from polar to rectangular coordinates.         Using equations with and gives and . Therefore this point can be represented as in rectangular coordinates.  Using equations with and gives and . Therefore this point can be represented as in rectangular coordinates.  Using equations with and gives and . Therefore this point can be represented as in rectangular coordinates.   "
},
{
  "id": "F_11_5_Polar_coords",
  "level": "2",
  "url": "sec_spherical_coords.html#F_11_5_Polar_coords",
  "type": "Figure",
  "number": "3.4.11",
  "title": "",
  "body": " Left: The relationship between the polar coordinates of a point and the rectangular coordinates of . Right: The polar coordinate grid.      "
},
{
  "id": "rectangulartopolar4",
  "level": "2",
  "url": "sec_spherical_coords.html#rectangulartopolar4",
  "type": "Example",
  "number": "3.4.12",
  "title": "Converting from Rectangular to Polar Coordinates.",
  "body": " Converting from Rectangular to Polar Coordinates  Convert each of the following points from rectangular to polar coordinates.          Using equations , with and gives or and or . The point can be represented as either or in polar coordinates.  Again using equations , but this time with and gives or and . Since the point lies in quadrant II, we compute radians (about 127 degrees).  Here so that . From equations we also have . Direct application of the second equation leads to division by zero! Graphing the point on the rectangular coordinate system reveals that the point is located on the positive -axis. The angle between the positive -axis and the positive -axis is ( radians). Therefore this point can be represented as either or in polar coordinates.  Using equations , with and gives or and or . The point can thus be represented as either or in polar coordinates.    "
},
{
  "id": "dopplerradar",
  "level": "2",
  "url": "sec_spherical_coords.html#dopplerradar",
  "type": "Example",
  "number": "3.4.13",
  "title": "PPI (Radar).",
  "body": " PPI (Radar)  Radar supplies data in a format closely related to polar coordinates. Rather than supplying the polar angle , data is stored in a table of range-azimuth ordered pairs where is the azimuth sometimes also denoted by . The azimuth measures the angle in a clockwise fashion with as due north.   Left: Image of a thunderstorm on a PPI. (Source: Public Domain (NOAA)) Right: Radar supplies the location at point as a range-azimuth ordered pair . The angle is the angle measured clockwise from the axis pointing due north and the segment connecting the pole with the point .     Radar uses range-azimuth ordered pairs.      A plan position indicator (PPI) plan position indicator is a type of radar display that represents the radar antenna in the center of the display, with the distance from it drawn as concentric circles. As the radar antenna rotates, a radial trace on the PPI sweeps in unison with it about the center point. To generate a picture similar to a PPI on a raster scan monitor with a line sequential image (such as a television or computer monitor), this radar data must first be converted to rectangular coordinates . Since , the equations accomplish this task.  "
},
{
  "id": "PPIcalculation",
  "level": "2",
  "url": "sec_spherical_coords.html#PPIcalculation",
  "type": "Checkpoint",
  "number": "3.4.15",
  "title": "Converting PPI Data.",
  "body": "Converting PPI Data  Convert PPI data sent in to rectangular coordinates and a color for a computer monitor. Place the radar antenna at the center of the screen.   PPI data.      color    2  90  blue    30  120  white    30  180  red      In order for the antenna to be located at the center of the screen, each -value must be shifted units right and each -value must be shifted units up. For example, the ordered pair is converted to and   Converted PPI data.      color    962  540  blue    986  525  white    960  510  red     "
},
{
  "id": "sphericalcoordinatesection-2",
  "level": "2",
  "url": "sec_spherical_coords.html#sphericalcoordinatesection-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spherical coordinates "
},
{
  "id": "F_11_8_Spherical_coords",
  "level": "2",
  "url": "sec_spherical_coords.html#F_11_8_Spherical_coords",
  "type": "Figure",
  "number": "3.4.18",
  "title": "",
  "body": " The spherical coordinates of a point. Any point in space can be represented in spherical coordinates with , , and . See, for example, https:\/\/www.geogebra.org\/m\/h9xS5ZZs .   "
},
{
  "id": "ColumbusOH",
  "level": "2",
  "url": "sec_spherical_coords.html#ColumbusOH",
  "type": "Example",
  "number": "3.4.19",
  "title": "Converting Latitude and Longitude to Spherical Coordinates.",
  "body": " Converting Latitude and Longitude to Spherical Coordinates  The latitude of Columbus, Ohio, is N and the longitude is W. The radius of Earth is 3961 miles. The location of Columbus in spherical coordinates can be described by . We use since that is the angle Columbus makes with the positive -axis which is runs from the center of Earth through the north pole. is the angle Columbus makes with the equator. Longitude is measured in degrees east of the -plane.   In the latitude–longitude system, angles describe the location of a point on Earth relative to the equator and the prime meridian. Source: OpenStax Calculus Volume 3 .    "
},
{
  "id": "WashingtonDC",
  "level": "2",
  "url": "sec_spherical_coords.html#WashingtonDC",
  "type": "Checkpoint",
  "number": "3.4.21",
  "title": "Where in the World is Washington, DC?",
  "body": "Where in the World is Washington, DC?  Washington, DC, is located at N and W (see ). The radius of Earth is 3961 miles. Express the location of Washington, DC, in spherical coordinates.   Washington, DC, as viewed from space. Source: OpenStax Calculus Volume 3 .     We have , , and . So the spherical coordinates are .  "
},
{
  "id": "sphericalcoordinatesection-7",
  "level": "2",
  "url": "sec_spherical_coords.html#sphericalcoordinatesection-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "colatitude "
},
{
  "id": "PA_11_8",
  "level": "2",
  "url": "sec_spherical_coords.html#PA_11_8",
  "type": "Activity",
  "number": "1",
  "title": "",
  "body": " For the following questions, consider the point whose Cartesian coordinates are .    What is the distance from to the origin? Your result is the value of in the spherical coordinates of .    Determine the point that is the projection of onto the -plane. Then, use this projection to find the value of in the polar coordinates of the projection of that lies in the plane. Your result is also the value of for the spherical coordinates of the point.    Based on the illustration in Figure , how is the angle determined by and the coordinate of ? Use a well-chosen right triangle to find the value of , which is the final component in the spherical coordinates of . Draw a carefully labeled picture that clearly illustrates the values of , , and in this example, along with the original rectangular coordinates of .    Based on your responses to (a), (b), and (c), if we are given the Cartesian coordinates of a point , how are the values of , , and in the spherical coordinates of determined by , , and ?    "
},
{
  "id": "F_11_8_Spherical_to_Cartesian",
  "level": "2",
  "url": "sec_spherical_coords.html#F_11_8_Spherical_to_Cartesian",
  "type": "Figure",
  "number": "3.4.23",
  "title": "",
  "body": " Converting from spherical to Cartesian coordinates.   "
},
{
  "id": "ColumbusOHRectangular",
  "level": "2",
  "url": "sec_spherical_coords.html#ColumbusOHRectangular",
  "type": "Example",
  "number": "3.4.24",
  "title": "Rectangular Coordinates of Columbus, OH.",
  "body": " Rectangular Coordinates of Columbus, OH  In , the spherical coordinates of Columbus, OH, were described by . Here we assumed, and continue to assume, that the origin is at the center of the earth, the positive -axis runs from the origin to where the prime meridian and the equator intersect on the surface, and the positive -axis runs from the origin through the north pole. In rectangular coordinates, we use to locate Columbus at where all the units are miles (as measured from the center of the earth).  "
},
{
  "id": "A_11_8_7",
  "level": "2",
  "url": "sec_spherical_coords.html#A_11_8_7",
  "type": "Activity",
  "number": "2",
  "title": "",
  "body": " In this activity, we graph some surfaces using spherical coordinates. To improve your intuition and test your understanding, you should first think about what each graph should look like before you plot it using appropriate technology.   What familiar surface is described by the points in spherical coordinates with , , and ? How does this particular example demonstrate the reason for the name of this coordinate system? What if we restrict to ?    What familiar surface is described by the points in spherical coordinates with , , and ?    What familiar shape is described by the points in spherical coordinates with , , and ?    Plot the graph of , for and . How does the resulting surface appear?     "
},
{
  "id": "S20Latitude",
  "level": "2",
  "url": "sec_spherical_coords.html#S20Latitude",
  "type": "Example",
  "number": "3.4.25",
  "title": "Describing a Line of Latitude.",
  "body": " Describing a Line of Latitude  The set of spherical coordinates describes the set of locations on the earth at the S line of latitude.   A line of latitude at S.   Latitude of 20 degrees south.     "
},
{
  "id": "Longitude70",
  "level": "2",
  "url": "sec_spherical_coords.html#Longitude70",
  "type": "Checkpoint",
  "number": "3.4.27",
  "title": "Describing a Line of Longitude.",
  "body": "Describing a Line of Longitude  Use spherical coordinates to describe the E line of longitude.   Assuming that the prime meridian is located in the -plane and crosses the positive -axis, the set of spherical coordinates describe this line.  "
},
{
  "id": "MetSpherical",
  "level": "2",
  "url": "sec_spherical_coords.html#MetSpherical",
  "type": "Figure",
  "number": "3.4.28",
  "title": "",
  "body": " Meteorologists often use spherical coordinates where is the location's distance from the origin, is longitude, and is latitude. Longitude is measured in degrees east of the prime meridian and latitude is measured in degrees north of the equator.   Spherical Coordinates used by meteorologists.    "
},
{
  "id": "haversinedistance",
  "level": "2",
  "url": "sec_spherical_coords.html#haversinedistance",
  "type": "Example",
  "number": "3.4.29",
  "title": "The Haversine Distance Formula.",
  "body": " The Haversine Distance Formula  Using notation for locations on the earth, we can compute the great circle distance (as one would traverse the surface of our beloved sphere) using the Haversine distance formula Haversine distance formula . With representing longitude and representing latitude of a location, and representing the radius of the planet, we have . Note that when computing the arcsine, the result must be in radians.   The great circle distance between two points and on a sphere is given by the Haversine distance formula .   The Haversine Distance Formula.     "
},
{
  "id": "IdentifyPolarCoords",
  "level": "2",
  "url": "sec_spherical_coords.html#IdentifyPolarCoords",
  "type": "Exercise",
  "number": "3.4.3.1",
  "title": "Identify Polar Coordinates.",
  "body": "Identify Polar Coordinates "
},
{
  "id": "PlotPolarPoint",
  "level": "2",
  "url": "sec_spherical_coords.html#PlotPolarPoint",
  "type": "Exercise",
  "number": "3.4.3.2",
  "title": "Plot Point Given in Polar Coordinates.",
  "body": "Plot Point Given in Polar Coordinates "
},
{
  "id": "ConvertPolar2Cartesian",
  "level": "2",
  "url": "sec_spherical_coords.html#ConvertPolar2Cartesian",
  "type": "Exercise",
  "number": "3.4.3.3",
  "title": "Convert Polar Coordinates to Cartesian.",
  "body": "Convert Polar Coordinates to Cartesian "
},
{
  "id": "ConvertCartesian2PolarPlus",
  "level": "2",
  "url": "sec_spherical_coords.html#ConvertCartesian2PolarPlus",
  "type": "Exercise",
  "number": "3.4.3.4",
  "title": "Convert Cartesian Coordinates to Polar.",
  "body": "Convert Cartesian Coordinates to Polar "
},
{
  "id": "ConvertCartesian2PolarMinus",
  "level": "2",
  "url": "sec_spherical_coords.html#ConvertCartesian2PolarMinus",
  "type": "Exercise",
  "number": "3.4.3.5",
  "title": "Convert Cartesian Coordinates to Polar II.",
  "body": "Convert Cartesian Coordinates to Polar II "
},
{
  "id": "MatchPolarCartesianExp",
  "level": "2",
  "url": "sec_spherical_coords.html#MatchPolarCartesianExp",
  "type": "Exercise",
  "number": "3.4.3.6",
  "title": "Match Expressions.",
  "body": "Match Expressions "
},
{
  "id": "ConvertRectSphere",
  "level": "2",
  "url": "sec_spherical_coords.html#ConvertRectSphere",
  "type": "Exercise",
  "number": "3.4.3.7",
  "title": "Convert from Rectangular to Spherical Coordinates.",
  "body": "Convert from Rectangular to Spherical Coordinates "
},
{
  "id": "ConvertSphereRect",
  "level": "2",
  "url": "sec_spherical_coords.html#ConvertSphereRect",
  "type": "Exercise",
  "number": "3.4.3.8",
  "title": "Convert from Spherical to Rectangular Coordinates.",
  "body": "Convert from Spherical to Rectangular Coordinates "
},
{
  "id": "MatchSpherical",
  "level": "2",
  "url": "sec_spherical_coords.html#MatchSpherical",
  "type": "Exercise",
  "number": "3.4.3.9",
  "title": "Match Surfaces with Equations Described in Spherical Coordinates.",
  "body": "Match Surfaces with Equations Described in Spherical Coordinates "
},
{
  "id": "ez-CartesianToSpherical",
  "level": "2",
  "url": "sec_spherical_coords.html#ez-CartesianToSpherical",
  "type": "Exercise",
  "number": "3.4.3.10",
  "title": "Convert from Cartesian Coordinates to Spherical Coordinates.",
  "body": "Convert from Cartesian Coordinates to Spherical Coordinates Convert from Cartesian to spherical coordinates.                  , ,   , ,    , ,    , ,    The point   lies in the -plane (i.e. has ) and so has and  lies on the negative -axis and so has and  is a distance from the origin and so has .    The point   lies in the -plane (i.e. has ) and so has and  lies on the positive -axis and so has and  is a distance from the origin and so has .    The point   lies on the negative -axis and so has and arbitrary and  is a distance from the origin and so has .    The point   has and  has so that and and  has so that . As is in the second quadrant, we have and so .     "
},
{
  "id": "ez-Sydney",
  "level": "2",
  "url": "sec_spherical_coords.html#ez-Sydney",
  "type": "Exercise",
  "number": "3.4.3.11",
  "title": "Land Down Under.",
  "body": "Land Down Under  Sydney, Australia is at S and E. Express Sydney’s location in spherical coordinates. Assume Earth has a radius of 4000 miles.   , , and so the spherical coordinates of Sydney are .  "
},
{
  "id": "ez-SydneyRectangular",
  "level": "2",
  "url": "sec_spherical_coords.html#ez-SydneyRectangular",
  "type": "Exercise",
  "number": "3.4.3.12",
  "title": "Sydney’s Rectangular Coordinates.",
  "body": "Sydney's Rectangular Coordinates  Sydney, Australia is at S and E. Express Sydney’s location in rectangular coordinates. Spherical coordinates for Sydney were found in .   The spherical coordinates of Sydney are . In rectangular coordinates, we use to locate Sydney at where the units are miles.  "
},
{
  "id": "ez-antartica",
  "level": "2",
  "url": "sec_spherical_coords.html#ez-antartica",
  "type": "Exercise",
  "number": "3.4.3.13",
  "title": "Describing the Antartic.",
  "body": "Describing the Antartic  The Antarctic is usually defined simply as that region south of south latitude, S. Use spherical coordinates to describe this region as a set.    "
},
{
  "id": "ez-stratosphere",
  "level": "2",
  "url": "sec_spherical_coords.html#ez-stratosphere",
  "type": "Exercise",
  "number": "3.4.3.14",
  "title": "Describing the Troposphere and Stratosphere.",
  "body": "Describing the Troposphere and Stratosphere  According to NASA, the combined troposphere and stratosphere reach 31 miles above the surface of the earth. Use spherical coordinates to describe this region.   or, more compactly,  "
},
{
  "id": "ez-latitudegcdistance",
  "level": "2",
  "url": "sec_spherical_coords.html#ez-latitudegcdistance",
  "type": "Exercise",
  "number": "3.4.3.15",
  "title": "Distance Between Latitude Lines.",
  "body": "Distance Between Latitude Lines  Earth has a radius of approximately 3961 miles (6371 km). Use the Haversine formula to determine the great circle distance between N and N.   .  "
},
{
  "id": "ez-3Dradar",
  "level": "2",
  "url": "sec_spherical_coords.html#ez-3Dradar",
  "type": "Exercise",
  "number": "3.4.3.16",
  "title": "Radar and Spherical Coordinates.",
  "body": "Radar and Spherical Coordinates  Radars use electromagnetic waves to detect objects and measure their positions in space. Object positioning is done by determining distance in relation to the radar equipment. Three coordinates: azimuth (clockwise around the vertical axis), elevation (from the horizontal axis) and the distance from the pointing equipment. The set of measurements distance-azimuth-elevation constitutes a set of spherical coordinates with the radar itself at the origin. Determine the rectangular coordiantes in terms of these spherical coordinates.   Spherical coordinates for radar where is the location's distance from the radar (origin), the azimuth (measured clockwise from the positive -axis, and the angle of elevation (from the -plane).   Spherical Coordinates for radar.      The rectangular coordinates are  "
},
{
  "id": "sec_displacementvectors",
  "level": "1",
  "url": "sec_displacementvectors.html",
  "type": "Section",
  "number": "4.1",
  "title": "Displacement Vectors",
  "body": " Displacement Vectors     What is a vector?    How can vectors be used to model wind? How do wind barbs compare to mathematical vectors?     How can the pressure gradient force be represented by a vector?     Air flow in the atmosphere has both a speed and direction. Meteorological maps (such as surface maps) often illustrate winds using a representation called a wind barb wind barbs . Wind barbs have flags in the direction the wind is coming from; the barbs describe the speed of the wind in knots. See .   A wind barb illustrating a 35-knot, wind (i.e. from the north).   A wind barb illustrating a 35-knot, wind (i.e. from the north).     Mathematically, we represent quantities having both a speed and a direction using a displacement vector. A wind arrow  wind arrow (an example of a displacement vector) is an arrow pointing in the direction the wind is blowing towards.   A wind arrow.   A wind arrow.     A displacement vector  displacement vector from one point to another is an arrow with its tail at the first point and its tip at the second. The magnitude  magnitude (of a vector) (or length) of the displacement vector is the distance between the points and is represented by the length of the arrow. The direction  direction (of a vector) of the displacement vector is the direction of the arrow.   Magnitude of a Vector Determine the magnitude of the displacement vector shown in .  Vector for .   Compute magnitude of vector.      The magnitude, or length, of vector is .   Displacement vectors which point in the same direction and have the same magnitude are considered to be the same, even if they do not coincide.  A vector is used to represent a quantity (like velocity, force, or wind) having both magnitude and direction. In comparison, a quantity specified only by a number, but no direction, such as wind speed or temperature is called a scalar .  Vector or Scalar? Classify each of the following quantities as a vector or a scalar.  Wind Speed  Wind Velocity  Gravitational Force  Relative Humidity  Temperature  Temperature Gradient  Advection  Coriolis Force  Pressure Gradient Force (PGF)     Wind Speed (scalar)  Wind Velocity (vector)  Gravitational Force (vector)  Relative Humidity (scalar)  Temperature (scalar)  Temperature Gradient (vector)  Advection (scalar)  Coriolis Force (vector)  Pressure Gradient Force (PGF) (vector)     By convention, we speak of winds in terms of the direction they are coming from. So if we say \"a south wind\", that is a wind coming from the south. The wind barb would have flags on the bottom (south), and the wind arrow would be pointed up (north). The way winds are reported in the raw observations (e.g. METARs) is for a north wind to be , an east wind to be , a south wind to be , a west wind to be , etc. See .   Raw wind observations.   Raw wind observations.      METARs Code Wind Barbs  Below is a METAR for the Saint Cloud, MN airport showing a 35-knot wind from . A wind barb representing this wind is shown in . KSTC 260053Z 24035KT 10SM CLR M10\/M14 A2994 RMK AO2 SLP173 T11001139   A 35-knot wind from .   A 35-knot wind from 240.      Wind Barb from a METAR Draw a wind barb representing the wind in Phoenix, AZ given in the METAR data. KPHX 260051Z 19015KT 10SM FEW100 23\/M06 A2982 RMK AO2 SLP087 T02281056    The wind being described is from at 15 knots. This is a SSW wind. See .   A 15-knot wind from .   A 15-knot wind from 190.      Once we start thinking of wind as a mathematical vector, we will want to use the mathematical convention (see ) for the direction.   Mathematical convention for direction.   Mathematical convention for direction.     A west wind will produce a vector pointing along the -axis and a mathematical direction of , a north wind will produce a vector pointing towards the negative -axis and a mathematical direction of , and so on.  Converting a Meteorological Direction  Convert the meteorological direction of to a mathematical wind direction .     is equivalent to .   The meteoroogical angle of 40 is equivalent to the polar angle of 230.       Wind Barbs and Mathematical Vectors The wind barb given in can be thought of as a mathematical vector . What is the mathematical angle for this vector ? What is the magnitude of this vector?  Wind barb for   Wind barb.      Since makes an angle of with the positive -axis pointing north, the mathematical angle is ; the magnitude of this vector is 35 knots.   is equivalent to .   The meteorological angle of 320 is equivalent to the polar angle of 310.      Wind Barb Conversion  Much like Fahrenheit to Celsius conversion, derive a formula (in degrees) that converts a meteorological wind direction to a mathematical direction (and vice-versa). Be sure to consider how to handle an angle less than zero.    where is the mathematical wind direction, and is the meteorological wind direction. If this value is less than zero, we add 360.    Pressure Gradient Force  The speed and direction of the wind is mainly governed by three forces; the pressure gradient force (PGF)  pressure gradient force , the Coriolis Force Coriolis force and friction. The PGF is the force produced by differences in barometric pressure between two locations and is responsible for the flow of air from an area of high pressure to an area of low pressure. The PGF can be represented by a vector since it has both magnitude and direction.  The direction of the PGF is from the center of high pressure to the center of low pressure (see ).  The magnitude of the PGF, , can be calculated by where represents mass in kg, represents air density (in kg\/m ), and represents the change in pressure (in mb).  The units for the magnitude can be understood by conversion to mks-units: If pressure is typically reported in millibars (mb), we can convert that to Pascals (Pa) since 1 mb = 100 Pa. We can then convert Pascals to Newtons per square meter. We see that 1 Pa = 1 kg\/( ). Air density can be measured in units of kg\/m . So, the units for the magnitude of mass are leaving units of to be , or Newtons as expected for a force.   Having both magnitude and direction, the pressure gradient force can be represented by a vector. Shown here is the pressure gradient vector for .   A pressure gradient vector.     Calculating PGF   is a simplified weather map showing isobars. Assuming air density of 1 , determine the magnitude of the pressure gradient vector shown. Be sure to pay particularly close attention to units.   First, we convert the pressure values into mks-units. We see that 1012 = 101,200 = 101,200 and 1004 = 100,400 = 100,400 . Then, we have So, for every 1 of mass, we have . This is 0.008 Newtons.      Vector Arithmetic  Think of as representing the velocity given to a paper airplane and as the velocity of the wind. Then represents the sum of these two forces (called a resultant  resultant ). See .   Vector Addition  The sum sum (of vectors) , , of two vectors and is the combined displacement resulting from first applying and then .    Vector addition. forms the diagonal of a parallelogram.   Vector addition.     If represents a displacement vector, the vector represents a displacement of twice the magnitude in the same direction as . Likewise, the vector represents a displacement of half the magnitude in the same direction and represents a displacement of the same magnitude but in the opposite direction. See .   Scalar Multiplication.   Scalar Multiplication.      Geostrophic Wind  The observed wind is the sum of the geostrophic wind geostrophic wind  and the ageostrophic wind ageostrophic wind  . That is, For the observed wind and geostrophic wind given in , a vector representing the ageostrophic wind is shown. The observed wind is found via the \"tip to tail\" method of vector addition - we place the tail of on the tip of the vector and draw an arrow from the tail of to the tip of as shown . Important note: Normally, ageostrophic wind is much smaller (relatively speaking) than the geostrophic wind.  Observed, geostrophic, and ageostrophic wind vectors for .   Geostrophic and Ageostrophic wind.       Vector Arithmetic in 2D Determine a displacement vector for vectors and shown in .  Vectors used in .   Vectors used in an exercise on addition.      By placing two copies of at the end of , the resultant can be found by connecting the tail of to the tip of the second . (see ).   from .   Solution to exercise on addition.      Vector Arithmetic in 3D Add vectors , , and as shown in .  Vectors , , and for .   Adding in 3D.      Since is a displacement vector, it can be moved to make the addition of these vectors geometrically as easy as connecting the tail of to the tip of .   The sum for .   Adding in 3D - an answer.        Vector Resolution  Suppose a wind is blowing from the NW (generally speaking) and that we are interested in the strength of the westerly component and the (relative) strength of the northerly component. Using components components (of a vector) of the wind vector allows us to specify each of these.  In , the displacement vector from to is . Here is a unit vector pointing east, is a unit vector pointing north, and and are the components of the vector.   Resolving the displacement vector from to as .   Resolving our first vector.     In a similar fashion, we can resolve resolution (of a vector) any displacement vector in space by writing it in the form The vectors , , and are unit vectors pointing in the direction of the positive -axis, the positive -axis, and positive -axis respectively (see . We call , , and the components of .   Unit basis vectors , , and .   The basis vectors.      Resolving Geostrophic Wind  A resolution of the vectors representing both the geostrophic wind and ageostrophic wind given in is and . The observed wind has resolution .   Resolving a 3D Vector Suppose that points from the point to the point . Resolve into components.   Resolve into components.   Resolve this 3D Vector.      as illustrated in .   .   Resolving a 3D Vector.        Horizontal Wind Vectors  The horizontal wind vector horizontal wind vector  can be represented in multiple ways. We describe two ways of representing this vector.     Component representation.  can be represented in terms of perpendicular velocity components. For this representation, vectors and represent unit vectors in directions East and North respectively. We then write . Here is the zonal velocity zonal velocity , the magnitude of the horizontal wind towards East. Scalar is the meridional velocity meridional velocity , the magnitude of the horizontal wind towards North.    Wind speed and direction representation. The wind speed is simply the magnitude of being specified. That is, is prescribed. Two opposite conventions are commonly used to describe wind direction.   is the wind vector azimuth wind vector azimuth , i.e. the direction towards which the wind is blowing. increases clockwise from North when viewed from above. Terms such as northward, eastward, etc. imply wind vector azimuths.  is the meteorological wind direction meteorological wind direction , i.e. the direction from which the wind is blowing. also increases clockwise from North when viewed from above. Terms such as northerly, easterly, etc. imply meteorological wind directions.    The polar angle is the standard angle used in mathematics to measure the angle that makes with the positive -axis.   Representing the horizontal wind vector . Here the horizontal wind is coming from an angle of and has azimuth .   Representing the horizontal wind vector .     The Horizontal Wind Vector   If is the component representation of the horizontal wind, what is the wind speed? What is the wind vector azimuth ? What is the meteorlogical wind direction ?  Consider a northwest (southward and eastward) wind at 5 km\/h. What is ? What is ? What is the component representation for ?       km\/h; ;    ; ;      Vertical Wind Shear  The change of horizontal wind speed and\/or direction with height, called vertical wind shear wind shear (vertical) , is a requirement for thunderstorm formation. The vertical wind shear across a layer of air is the vector difference between the winds at the top of the layer and winds at the bottom, divided by layer thickness .  Suppose, for example, the wind at an altitude of km is given by (in units of m\/s) and the wind at altitude km is (also in units of m\/s) as shown in . Then, the shear vector is given by . The shear magnitude is then . The direction (but not the magnitude!) of the shear vector is the same as the red vector shown in . The units of vertical wind shear in this example are .   Vertical wind shear is proportional to the difference of the wind vectors.   Wind shear.      The vertical wind shear between the surface and a height of km is a standard tool in storm prediction. When the vertical distance between layers is fixed (as it is here at 6 km), just the difference of the wind at the upper layer km and the wind at the surface called the bulk shear bulk shear is used. The bulk shear is the wind difference over a layer calculated by vector subtraction. A tool that illustrates and calculates bulk shear between two layers can be found here .  The 6-km Bulk Wind Shear  Suppose that the surface wind is known to be 10 knots at and the wind at 6 km is known to be 40 knots at as illustrated in . Determine the 6-km bulk wind shear by giving both its meteorological direction and its magnitude. Then, sketch on .  Bulk wind shear at 6 km used in .   Bulk wind shear at 6 km used in .       The magnitude of can be determined by the law of cosines: means that knots. The meteorological direction of is . One way to find this angle is using vector resolution: So, . We can then evaluate (or ). This gives a meteorological angle of .  Bulk wind shear at 6 km is the difference of two vectors.   Bulk wind shear at 6 km is the difference of two vectors.          Exercises  The Position Vector A position vector position vector is one that has its tail at the origin.   Adding Vectors in Component Form  Draw the Sum of Vectors  Combining Vectors  Vector Length  Net Force   Resolve a Vector   Resolve the vector given in . That is, write for some and .  Resolve if is the vector given in .           Resolving a Wind Barb  Resolve the horizontal wind vector shown in as a wind barb. That is, describe this wind in the form where and are in units of knots.  Wind barb for .   Wind barb.       .   Converting Between and  We have seen that the relationship between a meteorological angle and a mathematical angle is given by the equation . Determine the relationship between a mathematical angle and the wind azimuth as illustrated in .   where can be added to make the angle positive if desired.   Directions and Vectors Suppose that north is the direction of the positive -axis and east is the direction of the positive -axis.  Describe a mathematical vector representing a Southeast wind. That is, determine values of and giving the resolution of .  Give a vector parallel, but not equal to .  Give a vector pointing in the opposite direction of . This vector should represent a Northwest wind.  Give a unit vector representing a Southeast wind.  How many vectors can you find in each case above?    (infinitely-many such vectors exist)  Answers vary; for example, (infinitely-many such vectors exist)   (infinitely-many such vectors exist)   (exactly one such vector exists)    Storm Motion Vectors  When a thunderstorm already exists, its motion can be tracked on radar or satellite (which gives a vector based on its actual speed and direction of movement). One can determine the storm motion vector storm motion vector by marking a point on the radar display then going forward in time to the next radar scan and measuring the distance to that point. The speed is calculated based on radar time and distance. The vector is commonly reported via the azimuth angle and the speed in knots. For example, shows radar being used to generate a storm motion vector with azimuth of and a speed of 47 knots.   The storm motion vector can be estimated using a radar. Source: https:\/\/support.allisonhouse.com\/hc\/en-us\/articles\/206870313--GR2AE-Finding-Setting-Storm-Motion-Vector-Manually   A storm motion vector.    The storm motion vector described by the radar in is illustrated in .   The storm motion vector for .   Representing the storm motion vector.     Resolve the vector into components. That is, write where and are measured in knots.  First, notice that . Then, .   Resolving a Storm Motion Vector  Resolve the vector described in into components using units of km\/hr. That is, write where and are measured in units of kilometers per hour.  Storm vector for . Source: https:\/\/support.allisonhouse.com\/hc\/en-us\/articles\/206870313--GR2AE-Finding-Setting-Storm-Motion-Vector-Manually .   Storm vector for . Source: https:\/\/support.allisonhouse.com\/hc\/en-us\/articles\/206870313--GR2AE-Finding-Setting-Storm-Motion-Vector-Manually .     The mathematical direction is given by . Resolving a mathematical vector with angle (with the positive -axis) and length of km\/hr (the equivalent of 25 knots) yields .  The Mean Wind Vector  Given in are vectors representing the surface wind ( ) and the wind at 5 km ( ).  Winds for .   Winds for exercise.      The mean wind mean wind is defined to be the average of the vectors and . That is,   Draw and label the mean wind vector on .  Resolve vectors and into components. Then, use the resolutions to write the mean wind as for some constants and .  In a supercell thunderstorm, there can be propagation due to the rotating updraft (called updraft-shear propagation updraft-shear propagation ). The resultant storm motion vector is the vector sum of the mean wind vector ( ) and the propagation due to the rotating updraft ( ). Suppose then that the mean wind vector is from the Southwest at knots and that the updraft-shear propagation vector is from the South at 1 knot. Draw and label the three vectors , , and on the diagram below. Then, determine (approximately) the meteorlogical direction of the storm motion vector (i.e. the direction from which the storm is moving).  Winds for .   Winds for exercise.            Geometrically, the mean wind lies exactly between the surface wind and the 5 km wind.  for .   for exercise.        and . So,  Note that and . This makes . The meteorlogical direction will then be given by .  for .   Storm motion vector for an Exercise.         More Mean Wind Vectors  gives wind measurements at various pressure levels at 12Z on March 5, 2023 for Minneapolis, MN. A rain\/snow event was nearing.  A vertical wind profile for KMSP at 12Z 05 Mar 2023.    Pressure (mb)  (degrees)  wind speed (knots)  (knots)  (knots)                                        Forecasters are interested in the mean wind of the sounding because it affects how fast storms move. For each level of the atmosphere, we can write the wind vector as . Determine the appropriate values of and (in knots) in . Then, calculate the mean wind vector and mean wind speed from the given sounding data.   The components of the wind vectors at the given pressures are shown in .  A vertical wind profile for KMSP at 12Z 05 Mar 2023.    Pressure (mb)  (degrees)  wind speed (knots)  (knots)  (knots)                                        The mean wind is then found to be or . This give a mean wind speed of knots.   Storm-relative Winds Because tornadoes translate with their parent thunderstorms, the winds that influence supercell and tornado rotation are the environmental wind vectors relative to a coordinate system that moves with the thunderstorm. Such winds are called storm-relative winds storm-relative winds . One way to think about this is as the wind felt by the storm. An analogy is driving a car 50 miles per hour into a 20 mile per hour wind. The wind sensed by the car is a 70 mile per hour wind.  First, we find the storm motion vector (see ). Next, to find storm-relative winds, we take the vector difference between the actual wind vectors (at various heights in the atmosphere) and the storm-motion vector.  Suppose the vertical wind profile is given by .  A vertical wind profile.    (km)  (degrees)  (m\/s)                                       Suppose also that the storm motion vector has azimuth of degrees (from SW) and the speed is 12 m\/s. Determine, geometrically, the storm-relative winds. The storm-relative wind vector for is shown in .   The storm-relative wind (dotted, in red) at km for .   Storm-relative winds.      ; ; ; ; ; ;    "
},
{
  "id": "sec_displacementvectors-2",
  "level": "2",
  "url": "sec_displacementvectors.html#sec_displacementvectors-2",
  "type": "Motivating Questions",
  "number": "4.1",
  "title": "",
  "body": "   What is a vector?    How can vectors be used to model wind? How do wind barbs compare to mathematical vectors?     How can the pressure gradient force be represented by a vector?    "
},
{
  "id": "sec_displacementvectors-3",
  "level": "2",
  "url": "sec_displacementvectors.html#sec_displacementvectors-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "wind barb "
},
{
  "id": "figure-windbarbs",
  "level": "2",
  "url": "sec_displacementvectors.html#figure-windbarbs",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": " A wind barb illustrating a 35-knot, wind (i.e. from the north).   A wind barb illustrating a 35-knot, wind (i.e. from the north).    "
},
{
  "id": "sec_displacementvectors-5",
  "level": "2",
  "url": "sec_displacementvectors.html#sec_displacementvectors-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "wind arrow "
},
{
  "id": "figure-windarrow",
  "level": "2",
  "url": "sec_displacementvectors.html#figure-windarrow",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": " A wind arrow.   A wind arrow.    "
},
{
  "id": "sec_displacementvectors-7",
  "level": "2",
  "url": "sec_displacementvectors.html#sec_displacementvectors-7",
  "type": "Definition",
  "number": "4.1.3",
  "title": "",
  "body": "A displacement vector  displacement vector from one point to another is an arrow with its tail at the first point and its tip at the second. The magnitude  magnitude (of a vector) (or length) of the displacement vector is the distance between the points and is represented by the length of the arrow. The direction  direction (of a vector) of the displacement vector is the direction of the arrow.  "
},
{
  "id": "vectormagnitude",
  "level": "2",
  "url": "sec_displacementvectors.html#vectormagnitude",
  "type": "Checkpoint",
  "number": "4.1.4",
  "title": "Magnitude of a Vector.",
  "body": "Magnitude of a Vector Determine the magnitude of the displacement vector shown in .  Vector for .   Compute magnitude of vector.      The magnitude, or length, of vector is .  "
},
{
  "id": "sec_displacementvectors-10",
  "level": "2",
  "url": "sec_displacementvectors.html#sec_displacementvectors-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector scalar "
},
{
  "id": "VectorOrScalar",
  "level": "2",
  "url": "sec_displacementvectors.html#VectorOrScalar",
  "type": "Checkpoint",
  "number": "4.1.6",
  "title": "Vector or Scalar?",
  "body": "Vector or Scalar? Classify each of the following quantities as a vector or a scalar.  Wind Speed  Wind Velocity  Gravitational Force  Relative Humidity  Temperature  Temperature Gradient  Advection  Coriolis Force  Pressure Gradient Force (PGF)     Wind Speed (scalar)  Wind Velocity (vector)  Gravitational Force (vector)  Relative Humidity (scalar)  Temperature (scalar)  Temperature Gradient (vector)  Advection (scalar)  Coriolis Force (vector)  Pressure Gradient Force (PGF) (vector)    "
},
{
  "id": "figure-windobservations",
  "level": "2",
  "url": "sec_displacementvectors.html#figure-windobservations",
  "type": "Figure",
  "number": "4.1.7",
  "title": "",
  "body": " Raw wind observations.   Raw wind observations.    "
},
{
  "id": "sec_displacementvectors-14",
  "level": "2",
  "url": "sec_displacementvectors.html#sec_displacementvectors-14",
  "type": "Example",
  "number": "4.1.8",
  "title": "METARs Code Wind Barbs.",
  "body": " METARs Code Wind Barbs  Below is a METAR for the Saint Cloud, MN airport showing a 35-knot wind from . A wind barb representing this wind is shown in . KSTC 260053Z 24035KT 10SM CLR M10\/M14 A2994 RMK AO2 SLP173 T11001139   A 35-knot wind from .   A 35-knot wind from 240.     "
},
{
  "id": "WindFromMETAR",
  "level": "2",
  "url": "sec_displacementvectors.html#WindFromMETAR",
  "type": "Checkpoint",
  "number": "4.1.10",
  "title": "Wind Barb from a METAR.",
  "body": "Wind Barb from a METAR Draw a wind barb representing the wind in Phoenix, AZ given in the METAR data. KPHX 260051Z 19015KT 10SM FEW100 23\/M06 A2982 RMK AO2 SLP087 T02281056    The wind being described is from at 15 knots. This is a SSW wind. See .   A 15-knot wind from .   A 15-knot wind from 190.     "
},
{
  "id": "figure-windconventions",
  "level": "2",
  "url": "sec_displacementvectors.html#figure-windconventions",
  "type": "Figure",
  "number": "4.1.12",
  "title": "",
  "body": " Mathematical convention for direction.   Mathematical convention for direction.    "
},
{
  "id": "windbarbexer",
  "level": "2",
  "url": "sec_displacementvectors.html#windbarbexer",
  "type": "Checkpoint",
  "number": "4.1.13",
  "title": "Converting a Meteorological Direction.",
  "body": "Converting a Meteorological Direction  Convert the meteorological direction of to a mathematical wind direction .     is equivalent to .   The meteoroogical angle of 40 is equivalent to the polar angle of 230.      "
},
{
  "id": "windbarbexer2",
  "level": "2",
  "url": "sec_displacementvectors.html#windbarbexer2",
  "type": "Checkpoint",
  "number": "4.1.15",
  "title": "Wind Barbs and Mathematical Vectors.",
  "body": "Wind Barbs and Mathematical Vectors The wind barb given in can be thought of as a mathematical vector . What is the mathematical angle for this vector ? What is the magnitude of this vector?  Wind barb for   Wind barb.      Since makes an angle of with the positive -axis pointing north, the mathematical angle is ; the magnitude of this vector is 35 knots.   is equivalent to .   The meteorological angle of 320 is equivalent to the polar angle of 310.     "
},
{
  "id": "windbarbexer3",
  "level": "2",
  "url": "sec_displacementvectors.html#windbarbexer3",
  "type": "Checkpoint",
  "number": "4.1.18",
  "title": "Wind Barb Conversion.",
  "body": "Wind Barb Conversion  Much like Fahrenheit to Celsius conversion, derive a formula (in degrees) that converts a meteorological wind direction to a mathematical direction (and vice-versa). Be sure to consider how to handle an angle less than zero.    where is the mathematical wind direction, and is the meteorological wind direction. If this value is less than zero, we add 360.  "
},
{
  "id": "sec_displacementvectors-22-2",
  "level": "2",
  "url": "sec_displacementvectors.html#sec_displacementvectors-22-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pressure gradient force (PGF) direction magnitude "
},
{
  "id": "figure-pgfexercisePic",
  "level": "2",
  "url": "sec_displacementvectors.html#figure-pgfexercisePic",
  "type": "Figure",
  "number": "4.1.19",
  "title": "",
  "body": " Having both magnitude and direction, the pressure gradient force can be represented by a vector. Shown here is the pressure gradient vector for .   A pressure gradient vector.    "
},
{
  "id": "pgfexercise",
  "level": "2",
  "url": "sec_displacementvectors.html#pgfexercise",
  "type": "Checkpoint",
  "number": "4.1.20",
  "title": "Calculating PGF.",
  "body": "Calculating PGF   is a simplified weather map showing isobars. Assuming air density of 1 , determine the magnitude of the pressure gradient vector shown. Be sure to pay particularly close attention to units.   First, we convert the pressure values into mks-units. We see that 1012 = 101,200 = 101,200 and 1004 = 100,400 = 100,400 . Then, we have So, for every 1 of mass, we have . This is 0.008 Newtons.  "
},
{
  "id": "sec_displacementvectors-23-2",
  "level": "2",
  "url": "sec_displacementvectors.html#sec_displacementvectors-23-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "resultant "
},
{
  "id": "sec_displacementvectors-23-3",
  "level": "2",
  "url": "sec_displacementvectors.html#sec_displacementvectors-23-3",
  "type": "Definition",
  "number": "4.1.21",
  "title": "Vector Addition.",
  "body": " Vector Addition  The sum sum (of vectors) , , of two vectors and is the combined displacement resulting from first applying and then .  "
},
{
  "id": "vectoraddition",
  "level": "2",
  "url": "sec_displacementvectors.html#vectoraddition",
  "type": "Figure",
  "number": "4.1.22",
  "title": "",
  "body": " Vector addition. forms the diagonal of a parallelogram.   Vector addition.    "
},
{
  "id": "scalarmultiplication",
  "level": "2",
  "url": "sec_displacementvectors.html#scalarmultiplication",
  "type": "Figure",
  "number": "4.1.23",
  "title": "",
  "body": " Scalar Multiplication.   Scalar Multiplication.    "
},
{
  "id": "GeostrophicWind",
  "level": "2",
  "url": "sec_displacementvectors.html#GeostrophicWind",
  "type": "Example",
  "number": "4.1.24",
  "title": "Geostrophic Wind.",
  "body": " Geostrophic Wind  The observed wind is the sum of the geostrophic wind geostrophic wind  and the ageostrophic wind ageostrophic wind  . That is, For the observed wind and geostrophic wind given in , a vector representing the ageostrophic wind is shown. The observed wind is found via the \"tip to tail\" method of vector addition - we place the tail of on the tip of the vector and draw an arrow from the tail of to the tip of as shown . Important note: Normally, ageostrophic wind is much smaller (relatively speaking) than the geostrophic wind.  Observed, geostrophic, and ageostrophic wind vectors for .   Geostrophic and Ageostrophic wind.      "
},
{
  "id": "vectordiff",
  "level": "2",
  "url": "sec_displacementvectors.html#vectordiff",
  "type": "Checkpoint",
  "number": "4.1.26",
  "title": "Vector Arithmetic in 2D.",
  "body": "Vector Arithmetic in 2D Determine a displacement vector for vectors and shown in .  Vectors used in .   Vectors used in an exercise on addition.      By placing two copies of at the end of , the resultant can be found by connecting the tail of to the tip of the second . (see ).   from .   Solution to exercise on addition.     "
},
{
  "id": "Add3D",
  "level": "2",
  "url": "sec_displacementvectors.html#Add3D",
  "type": "Checkpoint",
  "number": "4.1.29",
  "title": "Vector Arithmetic in 3D.",
  "body": "Vector Arithmetic in 3D Add vectors , , and as shown in .  Vectors , , and for .   Adding in 3D.      Since is a displacement vector, it can be moved to make the addition of these vectors geometrically as easy as connecting the tail of to the tip of .   The sum for .   Adding in 3D - an answer.     "
},
{
  "id": "sec_displacementvectors-24-2",
  "level": "2",
  "url": "sec_displacementvectors.html#sec_displacementvectors-24-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "components "
},
{
  "id": "components1",
  "level": "2",
  "url": "sec_displacementvectors.html#components1",
  "type": "Figure",
  "number": "4.1.32",
  "title": "",
  "body": " Resolving the displacement vector from to as .   Resolving our first vector.    "
},
{
  "id": "sec_displacementvectors-24-5",
  "level": "2",
  "url": "sec_displacementvectors.html#sec_displacementvectors-24-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "resolve "
},
{
  "id": "basisvectors",
  "level": "2",
  "url": "sec_displacementvectors.html#basisvectors",
  "type": "Figure",
  "number": "4.1.33",
  "title": "",
  "body": " Unit basis vectors , , and .   The basis vectors.    "
},
{
  "id": "resolvegeowind",
  "level": "2",
  "url": "sec_displacementvectors.html#resolvegeowind",
  "type": "Example",
  "number": "4.1.34",
  "title": "Resolving Geostrophic Wind.",
  "body": " Resolving Geostrophic Wind  A resolution of the vectors representing both the geostrophic wind and ageostrophic wind given in is and . The observed wind has resolution .  "
},
{
  "id": "Resolve3DVector",
  "level": "2",
  "url": "sec_displacementvectors.html#Resolve3DVector",
  "type": "Checkpoint",
  "number": "4.1.35",
  "title": "Resolving a 3D Vector.",
  "body": "Resolving a 3D Vector Suppose that points from the point to the point . Resolve into components.   Resolve into components.   Resolve this 3D Vector.      as illustrated in .   .   Resolving a 3D Vector.     "
},
{
  "id": "sec_displacementvectors-25-2",
  "level": "2",
  "url": "sec_displacementvectors.html#sec_displacementvectors-25-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "horizontal wind vector "
},
{
  "id": "sec_displacementvectors-25-3",
  "level": "2",
  "url": "sec_displacementvectors.html#sec_displacementvectors-25-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zonal velocity meridional velocity wind vector azimuth meteorological wind direction "
},
{
  "id": "HorizontalWind",
  "level": "2",
  "url": "sec_displacementvectors.html#HorizontalWind",
  "type": "Figure",
  "number": "4.1.38",
  "title": "",
  "body": " Representing the horizontal wind vector . Here the horizontal wind is coming from an angle of and has azimuth .   Representing the horizontal wind vector .    "
},
{
  "id": "horizontalwindvector",
  "level": "2",
  "url": "sec_displacementvectors.html#horizontalwindvector",
  "type": "Checkpoint",
  "number": "4.1.39",
  "title": "The Horizontal Wind Vector.",
  "body": "The Horizontal Wind Vector   If is the component representation of the horizontal wind, what is the wind speed? What is the wind vector azimuth ? What is the meteorlogical wind direction ?  Consider a northwest (southward and eastward) wind at 5 km\/h. What is ? What is ? What is the component representation for ?       km\/h; ;    ; ;    "
},
{
  "id": "verticalwindshear",
  "level": "2",
  "url": "sec_displacementvectors.html#verticalwindshear",
  "type": "Example",
  "number": "4.1.40",
  "title": "Vertical Wind Shear.",
  "body": " Vertical Wind Shear  The change of horizontal wind speed and\/or direction with height, called vertical wind shear wind shear (vertical) , is a requirement for thunderstorm formation. The vertical wind shear across a layer of air is the vector difference between the winds at the top of the layer and winds at the bottom, divided by layer thickness .  Suppose, for example, the wind at an altitude of km is given by (in units of m\/s) and the wind at altitude km is (also in units of m\/s) as shown in . Then, the shear vector is given by . The shear magnitude is then . The direction (but not the magnitude!) of the shear vector is the same as the red vector shown in . The units of vertical wind shear in this example are .   Vertical wind shear is proportional to the difference of the wind vectors.   Wind shear.     "
},
{
  "id": "sec_displacementvectors-25-7",
  "level": "2",
  "url": "sec_displacementvectors.html#sec_displacementvectors-25-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bulk shear "
},
{
  "id": "verticalwindsheardiff",
  "level": "2",
  "url": "sec_displacementvectors.html#verticalwindsheardiff",
  "type": "Checkpoint",
  "number": "4.1.42",
  "title": "The 6-km Bulk Wind Shear.",
  "body": "The 6-km Bulk Wind Shear  Suppose that the surface wind is known to be 10 knots at and the wind at 6 km is known to be 40 knots at as illustrated in . Determine the 6-km bulk wind shear by giving both its meteorological direction and its magnitude. Then, sketch on .  Bulk wind shear at 6 km used in .   Bulk wind shear at 6 km used in .       The magnitude of can be determined by the law of cosines: means that knots. The meteorological direction of is . One way to find this angle is using vector resolution: So, . We can then evaluate (or ). This gives a meteorological angle of .  Bulk wind shear at 6 km is the difference of two vectors.   Bulk wind shear at 6 km is the difference of two vectors.      "
},
{
  "id": "PositionVector",
  "level": "2",
  "url": "sec_displacementvectors.html#PositionVector",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "The Position Vector.",
  "body": "The Position Vector A position vector position vector is one that has its tail at the origin.  "
},
{
  "id": "SimpleAddition",
  "level": "2",
  "url": "sec_displacementvectors.html#SimpleAddition",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "Adding Vectors in Component Form.",
  "body": "Adding Vectors in Component Form "
},
{
  "id": "DrawSumVectors",
  "level": "2",
  "url": "sec_displacementvectors.html#DrawSumVectors",
  "type": "Exercise",
  "number": "4.1.3",
  "title": "Draw the Sum of Vectors.",
  "body": "Draw the Sum of Vectors "
},
{
  "id": "LinearCombos",
  "level": "2",
  "url": "sec_displacementvectors.html#LinearCombos",
  "type": "Exercise",
  "number": "4.1.4",
  "title": "Combining Vectors.",
  "body": "Combining Vectors "
},
{
  "id": "Magnitudes",
  "level": "2",
  "url": "sec_displacementvectors.html#Magnitudes",
  "type": "Exercise",
  "number": "4.1.5",
  "title": "Vector Length.",
  "body": "Vector Length "
},
{
  "id": "NetForce",
  "level": "2",
  "url": "sec_displacementvectors.html#NetForce",
  "type": "Exercise",
  "number": "4.1.6",
  "title": "Net Force.",
  "body": "Net Force "
},
{
  "id": "ResolveVector",
  "level": "2",
  "url": "sec_displacementvectors.html#ResolveVector",
  "type": "Exercise",
  "number": "4.1.7",
  "title": "Resolve a Vector.",
  "body": "Resolve a Vector   Resolve the vector given in . That is, write for some and .  Resolve if is the vector given in .          "
},
{
  "id": "WindBarb2VectorEx",
  "level": "2",
  "url": "sec_displacementvectors.html#WindBarb2VectorEx",
  "type": "Exercise",
  "number": "4.1.8",
  "title": "Resolving a Wind Barb.",
  "body": "Resolving a Wind Barb  Resolve the horizontal wind vector shown in as a wind barb. That is, describe this wind in the form where and are in units of knots.  Wind barb for .   Wind barb.       .  "
},
{
  "id": "Convertmathangleazimuth",
  "level": "2",
  "url": "sec_displacementvectors.html#Convertmathangleazimuth",
  "type": "Exercise",
  "number": "4.1.9",
  "title": "Converting Between <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\phi_{polar}\\)<\/span> and <span class=\"process-math\">\\(\\phi_{vect}\\)<\/span>.",
  "body": "Converting Between and  We have seen that the relationship between a meteorological angle and a mathematical angle is given by the equation . Determine the relationship between a mathematical angle and the wind azimuth as illustrated in .   where can be added to make the angle positive if desired.  "
},
{
  "id": "directionsandvectors",
  "level": "2",
  "url": "sec_displacementvectors.html#directionsandvectors",
  "type": "Exercise",
  "number": "4.1.10",
  "title": "Directions and Vectors.",
  "body": "Directions and Vectors Suppose that north is the direction of the positive -axis and east is the direction of the positive -axis.  Describe a mathematical vector representing a Southeast wind. That is, determine values of and giving the resolution of .  Give a vector parallel, but not equal to .  Give a vector pointing in the opposite direction of . This vector should represent a Northwest wind.  Give a unit vector representing a Southeast wind.  How many vectors can you find in each case above?    (infinitely-many such vectors exist)  Answers vary; for example, (infinitely-many such vectors exist)   (infinitely-many such vectors exist)   (exactly one such vector exists)   "
},
{
  "id": "stormmotionvectorexample",
  "level": "2",
  "url": "sec_displacementvectors.html#stormmotionvectorexample",
  "type": "Exercise",
  "number": "4.1.11",
  "title": "Storm Motion Vectors.",
  "body": "Storm Motion Vectors  When a thunderstorm already exists, its motion can be tracked on radar or satellite (which gives a vector based on its actual speed and direction of movement). One can determine the storm motion vector storm motion vector by marking a point on the radar display then going forward in time to the next radar scan and measuring the distance to that point. The speed is calculated based on radar time and distance. The vector is commonly reported via the azimuth angle and the speed in knots. For example, shows radar being used to generate a storm motion vector with azimuth of and a speed of 47 knots.   The storm motion vector can be estimated using a radar. Source: https:\/\/support.allisonhouse.com\/hc\/en-us\/articles\/206870313--GR2AE-Finding-Setting-Storm-Motion-Vector-Manually   A storm motion vector.    The storm motion vector described by the radar in is illustrated in .   The storm motion vector for .   Representing the storm motion vector.     Resolve the vector into components. That is, write where and are measured in knots.  First, notice that . Then, .  "
},
{
  "id": "MyStormVector2",
  "level": "2",
  "url": "sec_displacementvectors.html#MyStormVector2",
  "type": "Exercise",
  "number": "4.1.12",
  "title": "Resolving a Storm Motion Vector.",
  "body": "Resolving a Storm Motion Vector  Resolve the vector described in into components using units of km\/hr. That is, write where and are measured in units of kilometers per hour.  Storm vector for . Source: https:\/\/support.allisonhouse.com\/hc\/en-us\/articles\/206870313--GR2AE-Finding-Setting-Storm-Motion-Vector-Manually .   Storm vector for . Source: https:\/\/support.allisonhouse.com\/hc\/en-us\/articles\/206870313--GR2AE-Finding-Setting-Storm-Motion-Vector-Manually .     The mathematical direction is given by . Resolving a mathematical vector with angle (with the positive -axis) and length of km\/hr (the equivalent of 25 knots) yields . "
},
{
  "id": "meanwindvectors0",
  "level": "2",
  "url": "sec_displacementvectors.html#meanwindvectors0",
  "type": "Exercise",
  "number": "4.1.13",
  "title": "The Mean Wind Vector.",
  "body": "The Mean Wind Vector  Given in are vectors representing the surface wind ( ) and the wind at 5 km ( ).  Winds for .   Winds for exercise.      The mean wind mean wind is defined to be the average of the vectors and . That is,   Draw and label the mean wind vector on .  Resolve vectors and into components. Then, use the resolutions to write the mean wind as for some constants and .  In a supercell thunderstorm, there can be propagation due to the rotating updraft (called updraft-shear propagation updraft-shear propagation ). The resultant storm motion vector is the vector sum of the mean wind vector ( ) and the propagation due to the rotating updraft ( ). Suppose then that the mean wind vector is from the Southwest at knots and that the updraft-shear propagation vector is from the South at 1 knot. Draw and label the three vectors , , and on the diagram below. Then, determine (approximately) the meteorlogical direction of the storm motion vector (i.e. the direction from which the storm is moving).  Winds for .   Winds for exercise.            Geometrically, the mean wind lies exactly between the surface wind and the 5 km wind.  for .   for exercise.        and . So,  Note that and . This makes . The meteorlogical direction will then be given by .  for .   Storm motion vector for an Exercise.        "
},
{
  "id": "meanwindvectors",
  "level": "2",
  "url": "sec_displacementvectors.html#meanwindvectors",
  "type": "Exercise",
  "number": "4.1.14",
  "title": "More Mean Wind Vectors.",
  "body": "More Mean Wind Vectors  gives wind measurements at various pressure levels at 12Z on March 5, 2023 for Minneapolis, MN. A rain\/snow event was nearing.  A vertical wind profile for KMSP at 12Z 05 Mar 2023.    Pressure (mb)  (degrees)  wind speed (knots)  (knots)  (knots)                                        Forecasters are interested in the mean wind of the sounding because it affects how fast storms move. For each level of the atmosphere, we can write the wind vector as . Determine the appropriate values of and (in knots) in . Then, calculate the mean wind vector and mean wind speed from the given sounding data.   The components of the wind vectors at the given pressures are shown in .  A vertical wind profile for KMSP at 12Z 05 Mar 2023.    Pressure (mb)  (degrees)  wind speed (knots)  (knots)  (knots)                                        The mean wind is then found to be or . This give a mean wind speed of knots.  "
},
{
  "id": "StormRelativeWind",
  "level": "2",
  "url": "sec_displacementvectors.html#StormRelativeWind",
  "type": "Exercise",
  "number": "4.1.15",
  "title": "Storm-relative Winds.",
  "body": "Storm-relative Winds Because tornadoes translate with their parent thunderstorms, the winds that influence supercell and tornado rotation are the environmental wind vectors relative to a coordinate system that moves with the thunderstorm. Such winds are called storm-relative winds storm-relative winds . One way to think about this is as the wind felt by the storm. An analogy is driving a car 50 miles per hour into a 20 mile per hour wind. The wind sensed by the car is a 70 mile per hour wind.  First, we find the storm motion vector (see ). Next, to find storm-relative winds, we take the vector difference between the actual wind vectors (at various heights in the atmosphere) and the storm-motion vector.  Suppose the vertical wind profile is given by .  A vertical wind profile.    (km)  (degrees)  (m\/s)                                       Suppose also that the storm motion vector has azimuth of degrees (from SW) and the speed is 12 m\/s. Determine, geometrically, the storm-relative winds. The storm-relative wind vector for is shown in .   The storm-relative wind (dotted, in red) at km for .   Storm-relative winds.      ; ; ; ; ; ;  "
},
{
  "id": "sec_dotproduct",
  "level": "1",
  "url": "sec_dotproduct.html",
  "type": "Section",
  "number": "4.2",
  "title": "Dot Product",
  "body": " Dot Product     How can we measure how much two vectors are aligned?    How can we quantify advection?       Advection  advection is the process of transport of an atmospheric property solely by the mass motion of the atmosphere. One may also wish to think of it as the rate of change of the value of the advected property at a given point.  Temperature is an example of an advected property. Winds transport air parcels from regions of one temperature to regions of a different temperature. In the process, air masses are warmed or cooled. illustrates temperature advection at 925 mb over the central United States. Regions shaded in red are being warmed the most; regions shaded blue are being cooled the most. The rate at which temperature is being advected (or changed) depends on two factors - the temperature gradient and the wind velocity at that location. For example, in central Iowa, it appears that winds are blowing from the Southeast. Since there is a strong temperature gradient that points north, warm-air advection will occur. Conversely, in southeast Nebraska, we see that winds are blowing from the northeast. Since the temperature gradient points north, cold-air advection will occur.  Temperature advection over the central United States. (Source: spc.noaa.gov ).   Temperature advection over central United States     Using vectors to quantify both the temperature gradient and the horizontal wind velocity allows a more precise measure of advection. What is needed is some mechanism that tells us (a) how aligned these two vectors are and (b) the strength (i.e. the magnitude) of the combined vectors. A dot product of two vectors will do this.  The dot product  dot product is a measure of the amount one vector goes in the direction of another. It is useful to think of it as a way to measure the similarity of two vectors.    Geometric Definition of Dot Product  For any two vectors and , we define where is the angle between and and .    The geometric definition of the dot product: .   The geometric definition of dot product.     Notice that the dot product of two vectors is a number . When two vectors and have the same direction (i.e. ), . That is, we simply multiply the lengths of the two vectors. On the other hand, when the vectors are pointing in opposite directions (i.e. ), we have . This yields the opposite of the product of the two lengths. Angles between and produce values between these extremes. The more that vectors and are aligned, the closer the dot product is to the positive extreme and the less aligned and are, the closer the dot product is to the negative extreme, .  The applet found at www.geogebra.org\/m\/N9pvSPf4 illustrates the above idea well.  Computing a Dot Product - Part I  Suppose , , and makes a angle with the positive -axis as shown in . Calculate using the geometric definition.  Vectors used in .   Computing a Dot Product - Part I.            Algebraic Definition of Dot Product For any two vectors and , we define   The geometric and algebraic definitions can be shown to give the same result by using the law of cosines. For now, we let the calculation in convince us.  Computing a Dot Product - Part II  Suppose , , and makes a angle with the positive -axis as shown in . Calculate using the algebraic definition .   Resolving vector gives . It follows that , just as in .    Angles and Signs There is a connection between the sign of the dot product and the angle between the two vectors involved.   Plot the vector on the grid in .  Grid for .   Grid for .       For each of the following vectors , plot the vector on the grid in and then compute the dot product .                    Based upon the previous part of this activity, what do you think is the sign of the dot product in the three cases shown in .  Cases to consider for .   Angles to consider.          Positive, Negative, and Zero Dot Products   Computing Dot Products  Compute for each pair of vectors shown in .  Vectors used in .   Computing Dot Products.        , and -8 respectively   3D Dot Product  Compute for the pair of vectors shown in .  Vectors used in .   Computing 3D Dot Products.        and so that     Mario Kart and Dot Product  If you have ever played a game called Mario Kart, you are well-positioned to understand the dot product in action. To this end, in Mario Kart, there are ``boost pads\" that increase your speed. Imagine the red vector in is your speed ( and direction), and the blue vector is the orientation of the boost pad ( and direction). Larger numbers are more power. How much boost will you get?   Understanding the dot product through Mario Kart (Source: betterexplained.com ).   mario kart dot product    Essentially the pad multiplies your speed.   If you come in going 0, you'll get nothing [if you are just dropped onto the pad, there's no boost].  If you cross the pad perpendicularly, you'll get 0.  If we have some overlap, our -speed will get an -boost, and our -speed gets a -boost:   Your incoming speed is , and the max boost is . The amount of boost you actually get (for being lined up with it) is , for the total .   Advection  Mathematically, temperature advection is the negative of the dot product of the horizontal wind vector and the temperature gradient . That is, The negative sign is due to the fact that the temperature gradient always points in the direction of higher temperatures. However, air masses warm (positive advection) when the wind is generally pointing in the direction from higher temperatures to lower temperatures.  We can use this to our advantage in thinking about advection as a rate of change. Then, we see that That is, the forcast temperature at a given location is the current temperature combined with the temperature change at that location due to advection. Let's investigate this in 1 and 2 dimensions.  In one dimension, the horizontal wind vector and the temperature gradient are completely aligned. This allows us to treat and as scalars: where is the speed of the horizontal wind and the negative sign has been absorbed into the temperature gradient .   One-Dimensional Advection  The current temperature in Jackson, MS, is . In Memphis, TN (318 km to the north) the current temperature is . The average wind between the two cities is 37 km\/hr from the north. Suppose that the only process affecting temperature is advection and assume the wind stays constant. We can now determine the temperature in Jackson in 6 hours.  Mathematically, we model the current wind using a one-dimensional vector (e.g. a scalar), . We know that km\/hr. So,    In two dimensions, where is the horizontal wind vector and , the horizontal temperature gradient, is also a vector.   Two-Dimensional Advection   shows current temperatures observed near Rochester, MN. Suppose the horizontal wind vector is   Temperatures near Rochester, MN. Hammond is 35 km north of Rochester. Stewartville is 21 km south of Rochester. Owatonna is 66 km west of Rochester. Winona is 87 km east of Rochester.   Two-Dimensional Advection.      Here, It follows that the temperature advection at Rochester is   If the current temperature at Rochester is , the temperature 2 hours from now is given by .   Advection may refer to more than temperature advection. In general, advection refers to the horizontal transport of some property of the atmosphere or ocean, such as heat, humidity or salinity. For example, moisture advection moisture advection is the horizontal transport of water vapor by the wind. The advection of dew point can be thought of as moisture advection - found by the dot product of the horizontal wind vector and the dewpoint temperature gradient .     Exercises  Calculating the Dot Product Geometrically  An Algebraic Dot Product  Calculating the Angle Between Two Vectors  Calculating the Dot Product   Dot Products of Basic Vectors  Compute each dot product of basis vectors basis vectors .                   0  0  0  1     Product of Wind Vectors  Compute . What are the units in the resulting value? Be sure to include units.  Wind vectors and for .   Product of Wind Vectors.        square knots!   700 mb Temperature Advection shows regions of cold-air and warm-air advection at a height of 700 mb.  Temperature advection at 700 mb over the central United States. (Source: spc.noaa.gov ).   Temperature advection at 700 mb over central United States     On approximately which isotherm is Saint Cloud, MN located? Are the winds parallel or perpendicular to this isotherm here?  Estimate the angle between the temperature gradient and the horizontal wind vector at Saint Cloud, MN. If the angle was changed by , how would temperature advection at Saint Cloud be impacted?     ; the winds are perpendicular to this isotherm.  The angle between the temperature gradient and the horizontal wind appears to be close to zero (the temperature gradient points south). This angle maximizes the temperature advection for the given wind speed and temperature gradient. If the angle differed by , there would be less temperature advection at this location.    Advection in New York   shows temperatures observed at four New York stations at 2000 UTC 21 February 2018 as a strong cold front was moving through the area.  Temperature readings near Glenville, NY used in . Edinburg is 65 km north of Voorheesville. Schaghticoke is 87 km east of Oppenheim.   Advection in NY.      Calculate the temperature gradient vector at Glenville, NY. Be sure to include appropriate units.  The horizontal wind vector at this time was Estimate the temperature advection at Glenville, NY. Be sure to include units in your response.               Advection in Sartell shows horizontal isotherms near Sartell, MN. The distance between these contours is nautical miles (nm). In addition, the horizontal wind vector is from at a speed of .   Isotherms near Sartell, MN used in .   Advection in Sartell.      Find a resolution of the temperature gradient vector at Sartell, MN.  Find a resolution of the horizontal wind vector .  Estimate the temperature advection at Sartell, MN. Be sure to include appropriate units in your response.      Remember that the temperature gradient is always pointed in the direction of the steepest increase. So the gradient in this case will clearly point in the negative direction.    Remember to convert the meteorological angle to a mathematical angle .        Temperature Prediction in Cold Spring   shows current temperatures observed near Cold Spring, MN.  Current temperatures at and near Cold Spring, MN for . Avon is 21.2 km north of Cold Spring. Watkins is 16.5 km south of Cold Spring. Richmond is 8.3 km west of Cold Spring. Rockville is 8.6 km east of Cold Spring.   Current temperatures near Cold Spring, MN.    The horizontal wind vector is shown in .  Horizontal wind vector near Cold Spring, MN.   Horizontal wind vector near Cold Spring, MN.      The horizontal wind vector can be written as . Determine the values of and (in knots). Then, convert each of these components to units of km\/hr.  Compute the temperature advection at Cold Spring. What will be the temperature at Cold Spring 30 minutes from now?      We have That is, knots and knots.  Here, The advection is Note that this is negative (cooling). This is mainly since Richmond is so much closer than Avon. So, in 30 minutes (i.e., 0.5 hours), the temperature in Cold Spring will be      "
},
{
  "id": "sec_dotproduct-2",
  "level": "2",
  "url": "sec_dotproduct.html#sec_dotproduct-2",
  "type": "Motivating Questions",
  "number": "4.2",
  "title": "",
  "body": "   How can we measure how much two vectors are aligned?    How can we quantify advection?    "
},
{
  "id": "sec_dotproduct-3-1",
  "level": "2",
  "url": "sec_dotproduct.html#sec_dotproduct-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Advection "
},
{
  "id": "advectedtemp925",
  "level": "2",
  "url": "sec_dotproduct.html#advectedtemp925",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": " Temperature advection over the central United States. (Source: spc.noaa.gov ).   Temperature advection over central United States   "
},
{
  "id": "sec_dotproduct-3-4",
  "level": "2",
  "url": "sec_dotproduct.html#sec_dotproduct-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product "
},
{
  "id": "sec_dotproduct-4",
  "level": "2",
  "url": "sec_dotproduct.html#sec_dotproduct-4",
  "type": "Definition",
  "number": "4.2.2",
  "title": "Geometric Definition of Dot Product.",
  "body": " Geometric Definition of Dot Product  For any two vectors and , we define where is the angle between and and .  "
},
{
  "id": "figure-dotproductdefn",
  "level": "2",
  "url": "sec_dotproduct.html#figure-dotproductdefn",
  "type": "Figure",
  "number": "4.2.3",
  "title": "",
  "body": " The geometric definition of the dot product: .   The geometric definition of dot product.    "
},
{
  "id": "FirstGeometricDotProduct",
  "level": "2",
  "url": "sec_dotproduct.html#FirstGeometricDotProduct",
  "type": "Checkpoint",
  "number": "4.2.4",
  "title": "Computing a Dot Product - Part I.",
  "body": "Computing a Dot Product - Part I  Suppose , , and makes a angle with the positive -axis as shown in . Calculate using the geometric definition.  Vectors used in .   Computing a Dot Product - Part I.          "
},
{
  "id": "sec_dotproduct-9",
  "level": "2",
  "url": "sec_dotproduct.html#sec_dotproduct-9",
  "type": "Definition",
  "number": "4.2.6",
  "title": "Algebraic Definition of Dot Product.",
  "body": " Algebraic Definition of Dot Product For any two vectors and , we define  "
},
{
  "id": "SecondGeometricDotProduct",
  "level": "2",
  "url": "sec_dotproduct.html#SecondGeometricDotProduct",
  "type": "Checkpoint",
  "number": "4.2.7",
  "title": "Computing a Dot Product - Part II.",
  "body": "Computing a Dot Product - Part II  Suppose , , and makes a angle with the positive -axis as shown in . Calculate using the algebraic definition .   Resolving vector gives . It follows that , just as in .  "
},
{
  "id": "AnglesAndSigns",
  "level": "2",
  "url": "sec_dotproduct.html#AnglesAndSigns",
  "type": "Activity",
  "number": "3",
  "title": "Angles and Signs.",
  "body": " Angles and Signs There is a connection between the sign of the dot product and the angle between the two vectors involved.   Plot the vector on the grid in .  Grid for .   Grid for .       For each of the following vectors , plot the vector on the grid in and then compute the dot product .                    Based upon the previous part of this activity, what do you think is the sign of the dot product in the three cases shown in .  Cases to consider for .   Angles to consider.        "
},
{
  "id": "ActivityDiscoverPatternAngle",
  "level": "2",
  "url": "sec_dotproduct.html#ActivityDiscoverPatternAngle",
  "type": "Activity",
  "number": "4",
  "title": "Positive, Negative, and Zero Dot Products.",
  "body": " Positive, Negative, and Zero Dot Products  "
},
{
  "id": "ThirdDotProduct",
  "level": "2",
  "url": "sec_dotproduct.html#ThirdDotProduct",
  "type": "Checkpoint",
  "number": "4.2.10",
  "title": "Computing Dot Products.",
  "body": "Computing Dot Products  Compute for each pair of vectors shown in .  Vectors used in .   Computing Dot Products.        , and -8 respectively  "
},
{
  "id": "FourthDotProduct",
  "level": "2",
  "url": "sec_dotproduct.html#FourthDotProduct",
  "type": "Checkpoint",
  "number": "4.2.12",
  "title": "3D Dot Product.",
  "body": "3D Dot Product  Compute for the pair of vectors shown in .  Vectors used in .   Computing 3D Dot Products.        and so that   "
},
{
  "id": "sec_dotproduct-16",
  "level": "2",
  "url": "sec_dotproduct.html#sec_dotproduct-16",
  "type": "Example",
  "number": "4.2.14",
  "title": "Mario Kart and Dot Product.",
  "body": " Mario Kart and Dot Product  If you have ever played a game called Mario Kart, you are well-positioned to understand the dot product in action. To this end, in Mario Kart, there are ``boost pads\" that increase your speed. Imagine the red vector in is your speed ( and direction), and the blue vector is the orientation of the boost pad ( and direction). Larger numbers are more power. How much boost will you get?   Understanding the dot product through Mario Kart (Source: betterexplained.com ).   mario kart dot product    Essentially the pad multiplies your speed.   If you come in going 0, you'll get nothing [if you are just dropped onto the pad, there's no boost].  If you cross the pad perpendicularly, you'll get 0.  If we have some overlap, our -speed will get an -boost, and our -speed gets a -boost:   Your incoming speed is , and the max boost is . The amount of boost you actually get (for being lined up with it) is , for the total . "
},
{
  "id": "sec_dotproduct-17-5",
  "level": "2",
  "url": "sec_dotproduct.html#sec_dotproduct-17-5",
  "type": "Example",
  "number": "4.2.16",
  "title": "One-Dimensional Advection.",
  "body": " One-Dimensional Advection  The current temperature in Jackson, MS, is . In Memphis, TN (318 km to the north) the current temperature is . The average wind between the two cities is 37 km\/hr from the north. Suppose that the only process affecting temperature is advection and assume the wind stays constant. We can now determine the temperature in Jackson in 6 hours.  Mathematically, we model the current wind using a one-dimensional vector (e.g. a scalar), . We know that km\/hr. So,   "
},
{
  "id": "sec_dotproduct-17-7",
  "level": "2",
  "url": "sec_dotproduct.html#sec_dotproduct-17-7",
  "type": "Example",
  "number": "4.2.17",
  "title": "Two-Dimensional Advection.",
  "body": " Two-Dimensional Advection   shows current temperatures observed near Rochester, MN. Suppose the horizontal wind vector is   Temperatures near Rochester, MN. Hammond is 35 km north of Rochester. Stewartville is 21 km south of Rochester. Owatonna is 66 km west of Rochester. Winona is 87 km east of Rochester.   Two-Dimensional Advection.      Here, It follows that the temperature advection at Rochester is   If the current temperature at Rochester is , the temperature 2 hours from now is given by .  "
},
{
  "id": "sec_dotproduct-17-8",
  "level": "2",
  "url": "sec_dotproduct.html#sec_dotproduct-17-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "moisture advection "
},
{
  "id": "GeometricDotProduct",
  "level": "2",
  "url": "sec_dotproduct.html#GeometricDotProduct",
  "type": "Exercise",
  "number": "4.2.1",
  "title": "Calculating the Dot Product Geometrically.",
  "body": "Calculating the Dot Product Geometrically "
},
{
  "id": "RandomDotProductAlgebraic",
  "level": "2",
  "url": "sec_dotproduct.html#RandomDotProductAlgebraic",
  "type": "Exercise",
  "number": "4.2.2",
  "title": "An Algebraic Dot Product.",
  "body": "An Algebraic Dot Product "
},
{
  "id": "AngleBetweenVectors",
  "level": "2",
  "url": "sec_dotproduct.html#AngleBetweenVectors",
  "type": "Exercise",
  "number": "4.2.3",
  "title": "Calculating the Angle Between Two Vectors.",
  "body": "Calculating the Angle Between Two Vectors "
},
{
  "id": "GeometricDotProduct2",
  "level": "2",
  "url": "sec_dotproduct.html#GeometricDotProduct2",
  "type": "Exercise",
  "number": "4.2.4",
  "title": "Calculating the Dot Product.",
  "body": "Calculating the Dot Product "
},
{
  "id": "dotproductbasic",
  "level": "2",
  "url": "sec_dotproduct.html#dotproductbasic",
  "type": "Exercise",
  "number": "4.2.5",
  "title": "Dot Products of Basic Vectors.",
  "body": "Dot Products of Basic Vectors  Compute each dot product of basis vectors basis vectors .                   0  0  0  1    "
},
{
  "id": "DotProductWindVectors",
  "level": "2",
  "url": "sec_dotproduct.html#DotProductWindVectors",
  "type": "Exercise",
  "number": "4.2.6",
  "title": "Product of Wind Vectors.",
  "body": "Product of Wind Vectors  Compute . What are the units in the resulting value? Be sure to include units.  Wind vectors and for .   Product of Wind Vectors.        square knots!  "
},
{
  "id": "advectioncentralUS",
  "level": "2",
  "url": "sec_dotproduct.html#advectioncentralUS",
  "type": "Exercise",
  "number": "4.2.7",
  "title": "700 mb Temperature Advection.",
  "body": "700 mb Temperature Advection shows regions of cold-air and warm-air advection at a height of 700 mb.  Temperature advection at 700 mb over the central United States. (Source: spc.noaa.gov ).   Temperature advection at 700 mb over central United States     On approximately which isotherm is Saint Cloud, MN located? Are the winds parallel or perpendicular to this isotherm here?  Estimate the angle between the temperature gradient and the horizontal wind vector at Saint Cloud, MN. If the angle was changed by , how would temperature advection at Saint Cloud be impacted?     ; the winds are perpendicular to this isotherm.  The angle between the temperature gradient and the horizontal wind appears to be close to zero (the temperature gradient points south). This angle maximizes the temperature advection for the given wind speed and temperature gradient. If the angle differed by , there would be less temperature advection at this location.   "
},
{
  "id": "AdvectionInNY",
  "level": "2",
  "url": "sec_dotproduct.html#AdvectionInNY",
  "type": "Exercise",
  "number": "4.2.8",
  "title": "Advection in New York.",
  "body": "Advection in New York   shows temperatures observed at four New York stations at 2000 UTC 21 February 2018 as a strong cold front was moving through the area.  Temperature readings near Glenville, NY used in . Edinburg is 65 km north of Voorheesville. Schaghticoke is 87 km east of Oppenheim.   Advection in NY.      Calculate the temperature gradient vector at Glenville, NY. Be sure to include appropriate units.  The horizontal wind vector at this time was Estimate the temperature advection at Glenville, NY. Be sure to include units in your response.              "
},
{
  "id": "advectionsartell",
  "level": "2",
  "url": "sec_dotproduct.html#advectionsartell",
  "type": "Exercise",
  "number": "4.2.9",
  "title": "Advection in Sartell.",
  "body": "Advection in Sartell shows horizontal isotherms near Sartell, MN. The distance between these contours is nautical miles (nm). In addition, the horizontal wind vector is from at a speed of .   Isotherms near Sartell, MN used in .   Advection in Sartell.      Find a resolution of the temperature gradient vector at Sartell, MN.  Find a resolution of the horizontal wind vector .  Estimate the temperature advection at Sartell, MN. Be sure to include appropriate units in your response.      Remember that the temperature gradient is always pointed in the direction of the steepest increase. So the gradient in this case will clearly point in the negative direction.    Remember to convert the meteorological angle to a mathematical angle .       "
},
{
  "id": "advectioncoldspring",
  "level": "2",
  "url": "sec_dotproduct.html#advectioncoldspring",
  "type": "Exercise",
  "number": "4.2.10",
  "title": "Temperature Prediction in Cold Spring.",
  "body": "Temperature Prediction in Cold Spring   shows current temperatures observed near Cold Spring, MN.  Current temperatures at and near Cold Spring, MN for . Avon is 21.2 km north of Cold Spring. Watkins is 16.5 km south of Cold Spring. Richmond is 8.3 km west of Cold Spring. Rockville is 8.6 km east of Cold Spring.   Current temperatures near Cold Spring, MN.    The horizontal wind vector is shown in .  Horizontal wind vector near Cold Spring, MN.   Horizontal wind vector near Cold Spring, MN.      The horizontal wind vector can be written as . Determine the values of and (in knots). Then, convert each of these components to units of km\/hr.  Compute the temperature advection at Cold Spring. What will be the temperature at Cold Spring 30 minutes from now?      We have That is, knots and knots.  Here, The advection is Note that this is negative (cooling). This is mainly since Richmond is so much closer than Avon. So, in 30 minutes (i.e., 0.5 hours), the temperature in Cold Spring will be    "
},
{
  "id": "sec_cross_product",
  "level": "1",
  "url": "sec_cross_product.html",
  "type": "Section",
  "number": "4.3",
  "title": "The Cross Product",
  "body": " The Cross Product     What is the cross product of two vectors?    How does the cross product allow us to quantify the Corliolis effect on a moving object?      Imagine sitting at the center of a spinning merry-go-round, holding a ball. If you gently toss the ball away from you and watch the trajectory of the ball, you will notice it curve rather than travel away in a straight line. In reality, the ball is traveling in a straight line (as viewed from an observer standing on the ground), but from your perspective on the merry-go-round, it appears to be deﬂected by an apparent force which we call the Coriolis force Coriolis force .     A video explanation of the Coriolis force.    illustrates our merry-go-round and the curved motion of the ball being tossed. We attach a velocity vector to the ball which encodes information for both the magnitude and direction of its motion. In addition, according to the right hand rule, we define a vector as one pointing out of the disk along the axis of rotation whose magnitude is the angular speed of the rotating disk.   A ball is tossed from the center of a rotating disk.   A ball is tossed from the center of a rotating disk.    better illustrates the top of the rotating disk in . A mass moving with velocity vector is perpendicular to (which now points out of the screen). At any given time, the Coriolis force is perpendicular to both (a) the velocity vector and (b) the vector . Our goal in this section is to determine a means of calculating such a vector given and . That is, given two vectors and , we aim to find a third vector perpendicular to both whose magnitude increases in proportion to each. The cross product is a tool we can use to do this.   The Coriolis force is perpendicular to both (a) the velocity vector of a mass and (b) the axis of rotation.   Ilustrating the Coriolis force.      Defining the Cross Product Geometrically  We have previously seen how to combine two vectors to get a number (the dot product) that tells us the degree to which two vectors are aligned. In 3-space, we now combine two vectors in another manner in which the result is a vector that also gives us geometric information about our two original vectors. To start, we review the area of a parallelogram.   Area of a Parallelogram  The area of a parallelogram formed by vectors and with an angle between them is     Area of a parallelogram determined by and : .   Area of a Parallelogram.      Cross Product  We define the cross product  cross product of vectors and , denoted , to be  [Direction] a vector perpendicular to both and and  [Magnitude] having length equal to the area of the parallelogram formed by and .    The direction of is given by the normal vector to the plane defined by and . There are two perpendicular vectors to the plane (pointing out of the plane in opposite directions). We choose according to the right-hand rule. From this definition, you may now see why the cross product can be thought of a directed area .   Geometric Computation of Cross Product  If and are not parallel, then where is the angle between and and is the unit vector perpendicular to and in the direction given by the right-hand rule.    Calculating  To calculate , we start with sketching both vectors as shown in . Vectors and form a parallelogram that lives in the -plane. Since and , and the angle between and is , the area of the parallelogram is Since the unit vector is a vector perpendicular to both, we have . Note that is also perpendicular to both and . However, by the right-hand rule, since is being crossed into , the cross product will point in the positive direction. Note though that by the right-hand rule.     Computing a cross product.      Six fundamental cross product calculations can be remembered with the help of . In addition, you may also want to note some cross product properties listed in .   , , , , , and   Cross product calculations.     These six calculations along with suggest a general property - if we change the order of vectors in computing a cross product, the resulting vector points in the opposite direction with the same size. summarizes this and two additional properties of the cross product.   Properties of the Cross Product  For vectors , and , and scalar                 For some unit vector perpendicular to both and we have Rather than find this vector , we can use properties to compute the cross product. Since and , we see that . This vector is shown in . Finally, you may wish to note that is the unit vector that we could have pursued above.     Using properties of cross product.      Calculating a Cross Product  Calculate geometrically or by using properties of the cross product.   From a geometric perspective, we notice the parallelogram formed by and form a square in the -plane. The area of this parallelogram (square) is . So, by the right hand rule, we have .   The parallelogram formed by and form a square.   Computing another cross product.     Using properties of the cross product, we obtain      Defining the Cross Product Algebraically  There is an equivalent means to compute a cross product in which no angles, parallelograms, or diagrams are needed! But before stating an algebraic definition of cross product, we take a side trip into matrices in order to help us in a computation we later perform. To begin, we define a number called a determinant that can be used to ``determine'' key information about the matrix when thought of as an operator. Rather than dwell on the purpose of this number, we will focus only on how it is computed.  You have likely computed the determinant of a matrix before: But how can this be extended to larger matrices? Below we state how it is done for matrices.  Determinant  The determinant  determinant of a matrix is given by    There are several other ways to compute determinants of matrices. Our definition is typically thought of as an expansion about the first row. One could expand about any row or column and, with the use of proper signs in each term, arrive at the same result. However, for our purposes we will always expand about the first row of elements.   A Determinant    Determinant Computations  Compute each determinant.                        Algebraic Calculation of Cross Product  If and , then    It should be noted that in the algebraic calculation of a cross product, the determinant contains vector entries , , and . However, the calculation of the determinant still utilizes the same process as if all entries were numbers.   Algebraic and Geometric Computations Produce The Same Cross Product  Compare the algebraic calculation below to the geometric calculation applied in .    Algebraic and Geometric Computations Produce The Same Cross Product - Part II  Compare the algebraic calculation below to the geometric calculation applied in .   Two Ways to a Cross Product Calculate from algebraically. Compare results.   Naturally, the result is the same.   Use a Determinant to Compute a Cross Product Compute .      Coriolis Force  Earth’s rotation makes atmospheric circulation more complex than otherwise would be the case. The paths of the winds on a rotating Earth are deflected by the Coriolis force. The Coriolis effect is a result of the fact that different latitudes on Earth rotate at different speeds. In 24 hours a point on the equator must complete a rotation distance equal to the circumference of the Earth, while a point right on the poles covers no distance in that time; it just turns in a circle. So the speed of rotation at the equator is about 1600 km\/hr, while at the poles the speed is 0 km\/hr. Latitudes in between rotate at intermediate speeds; approximately 1400 km\/hr at 30 and 800 km\/hr at 60 . As objects move over the surface of the Earth they encounter regions of varying speed, which causes their path to be deflected.  Imagine now a cannon positioned at the equator and facing north. Even though the cannon appears stationary to someone on Earth, it is in fact moving east at about 1600 km\/hr due to Earth’s rotation. When the cannon fires, the projectile travels north towards its target; but it also continues to move to the east at 1600 km\/hr, the speed it had while it was still in the cannon. As the shell moves over higher latitudes, its momentum carries it eastward faster than the speed at which the ground beneath it is rotating. For example, by 30 latitude the shell is moving east at 1600 km\/hr while the ground is moving east at only 1400 km\/hr. Therefore, the shell gets “ahead” of its target, and will land to the east of its intended destination. From the point of view of the cannon, the path of the projectile appears to have been deflected to the right (red arrow, ). Similarly, a cannon located at 60 and facing the equator will be moving east at 800 km\/hr. When its shell is fired towards the equator, the shell will be moving east at 800 km\/hr, but as it approaches the equator it will be moving over land that is traveling east faster than the projectile. So the projectile gets “behind” its target, and will land to the west of its destination. But from the point of view of the cannon facing the equator, the path of the shell still appears to have been deflected to the right (green arrow, ). Therefore, in the Northern Hemisphere, the apparent Coriolis deflection will always be to the right. In the Southern Hemisphere, deflection is to the left.   The spin of the Earth is the cause of the Coriolis Effect. Source: Introduction to Oceanography by Paul Webb licensed under CC BY-SA 4.0 .   The Coriolis Effect.    Movements of air in the atmosphere and water in the ocean are notable examples of this behavior: rather than flowing directly from areas of high pressure to low pressure, as they would on a non-rotating planet, winds and currents tend to flow to the right of this direction north of the equator (see ) and left of this direction south of the equator. This effect is responsible for the rotation of large cyclones and tornados.   In the northern hemisphere, winds veer right rather than directly towards low pressure. This causes low pressure systems to rotate in a counterclockwise fashion.   The Coriolis Effect.     The magnitude and direction of the Coriolis acceleration is where is the velocity vector of the mass and (i.e. the rotation vector) is Earth’s angular velocity vector. Since the Earth rotates to the east, is along the Earth’s axis, northward out of the north pole and is the rotation rate of the Earth.  The Coriolis force on an object of mass moving with velocity is thus   The Earth rotates about vector . In this portion of a sphere, a local coordinate system is defined at a latitude of by perpendicular vectors , , and .   The vector Omega around which the Earth spins.     Consider now a location with latitude on a sphere (such as the Earth) that is rotating around as in . Set up a new, local coordinate system with the location at the origin and with -axis horizontally due east ( ), the -axis horizontally due north ( ) and the -axis vertically upwards ( ).   Denote the velocity of movement in this local coordinate system as   The rotation vector in this local coordinate system is   Coriolis acceleration expressed in this coordinate system is then    If (i.e. there is no vertical motion) and we the ignore vertical (i.e. ) component of Coriolis acceleration (which is reasonable since gravity is usually far larger in magnitude), we have   We define the factor as the Coriolis parameter Coriolis parameter . In this situation, note the following:  If and (motion is due east), then is south .  If and (motion is due north), then is east .    Coriolis Force on a Golf Ball We are on the surface of the Earth at a golf course in Saint Cloud, Minnesota (latitude of ). We hit a golf ball due south with speed .   Explain why the magnitude of the Coriolis force on the golf ball has value    The Coriolis effect is very slight. To see this, calculate the magnitude of the force on the golf ball due to gravity and compare it (as a percentage) to the magnitude of the Coriolis force . Assume the mass of the golf ball is g and travels at a typical ball speed of 50 m\/s. [Hint: You are calculating .]    Since the angle between and is , we have  We calculate . And, This gives . That is, the Coriolis force on the golf ball is about 0.05% that of the gravitational force on the golf ball.      Geostrophic Wind  An air parcel initially at rest will move from high pressure to low pressure because of the pressure gradient force (PGF). However, as that air parcel begins to move, it is deflected by the Coriolis force to the right in the northern hemisphere (to the left in the southern hemisphere). See . As the wind gains speed, the deflection increases until the Coriolis force equals the pressure gradient force. At this point, the wind will be blowing parallel to the isobars. When this happens, the wind is referred to as geostrophic geostrophic wind .   Air moved by the pressure gradient force (PGF) is deflected by the Coriolis force. Source: Figure 6.13 in The Atmosphere , Lutgens and Tarbuck, 8th edition, 2001.   PGF deflection due to Coriolis Effect.    Winds in nature are rarely exactly geostrophic, but to a good approximation, the winds in the upper troposphere can be close. This is because winds are only considered truly geostrophic when the isobars are straight and there are no other forces acting on it -- and these conditions just aren't found too often in nature.   Geostrophic winds, blowing parallel to isobars, result when the Coriolis force balances the Pressure Gradient Force (PGF).   PGF equals Coriolis Effect.        Exercises  Finding the Area of a Parallelogram  Computing a Cross Product  Scalar, Vector, or Meaningless?  Scalar, Vector, or Meaningless? II  Scalar, Vector, or Meaningless? III  Direction of the Cross Product   Seeing a Cross Product Compute . That is, give the resolution of this product. Then, plot on the vector .  Vectors and for .   Area of a Parallelogram.     We resolve and . So . This means .   .   Drawing a cross product.      Seeing a Cross Product II Suppose and . Compute the cross product . Sketch and label all three vectors ( , , and ) on the axes in .   Axes for .   Axes for a cross product.      . Both and are in the -plane and are perpendicular to each other.   .   Drawing a cross product again.      Vector, Scalar, or Undefined  Decide if each of the following quantities is a vector, a scalar, or undefined.                        scalar  vector  scalar  undefined  vector  undefined     Cross Product with No Vertical Component  In Coriolis calculations, it is common to compute cross products of vectors in which the first vector has a zero first component.   Vectors for .   Axes for a cross product.      Find a resolution (i.e., write it in the form ) of vector shown in . Note that the head of this vector is located at the halfway point of the bottom edge of the box. Also, be sure to note that the box is 2 by 1 by 1.  Find a resolution of the vector .  Compute .           Coriolis on Venus  Venus rotates in a direction opposite to that of the Earth and does so at a different rate.   Do a web search to determine the rotation rate of Venus. How does this rate of rotation compare to that of our planet? How does this impact the Coriolis effect on Venus?  How does the direction of rotation on Venus impact the Coriolis effect on Venus?  Just as in , calculate the magnitude of force on a golf ball due to gravity on Venus ( on venus is ) and compare it (as a percentage) to the impact of the Coriolis force on Venus. Assume a mass of grams, a typical ball speed of , and a latitude of .     Venus rotates much more slowly than Earth (roughly radians per second). This means the Coriolis effect is far less.  Since the rotation is opposite that of the rotation of Earth, the Coriolis effect is opposite that of the Earth. Winds in the northern hemisphere on Venus would curl as those in the southern hemisphere of earth and vice-versa.  The magnitude of force on a golf ball due to gravity on Venus is Newtons. The force due to Coriolis has magnitude This is very small comparison to . In fact, .    Three Forces Sum to Zero The sum of three vectors - the PGF, the Coriolis force, and the frictional force - at a given location is approximately zero. Sketch a vector representing the frictional force on . Given are vectors representing the PGF and Coriolis force at that location.   Vectors for .   Vectors summing to zero.       Solution to .   Vectors summing to zero.       The Component  The dotted lines in form a box.  Vector for .   Pick off the k component.      Resolve the vector into its components.   Is the dot product positive, negative, or zero?   Compute .       negative     Technology and Vector Products  Technology can really help with computation of cross products. Try it!  Pick two vectors and at random. Use your favorite technology (such as Wolfram Alpha) to compute and . Hint: In Wolfram Alpha, try typing something like ( <1,2,3> cross <4,5,6>) dot <1,2,3> .  Would the above result be obvious by geometric or algebraic computation?      "
},
{
  "id": "sec_cross_product-2",
  "level": "2",
  "url": "sec_cross_product.html#sec_cross_product-2",
  "type": "Motivating Questions",
  "number": "4.3",
  "title": "",
  "body": "   What is the cross product of two vectors?    How does the cross product allow us to quantify the Corliolis effect on a moving object?    "
},
{
  "id": "sec_cross_product-3-1",
  "level": "2",
  "url": "sec_cross_product.html#sec_cross_product-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Coriolis force "
},
{
  "id": "figure-coriolismovie",
  "level": "2",
  "url": "sec_cross_product.html#figure-coriolismovie",
  "type": "Figure",
  "number": "4.3.1",
  "title": "",
  "body": "   A video explanation of the Coriolis force.  "
},
{
  "id": "CoriolisflowmetersMyEdit",
  "level": "2",
  "url": "sec_cross_product.html#CoriolisflowmetersMyEdit",
  "type": "Figure",
  "number": "4.3.2",
  "title": "",
  "body": " A ball is tossed from the center of a rotating disk.   A ball is tossed from the center of a rotating disk.   "
},
{
  "id": "figure-tikzcoriolis",
  "level": "2",
  "url": "sec_cross_product.html#figure-tikzcoriolis",
  "type": "Figure",
  "number": "4.3.3",
  "title": "",
  "body": " The Coriolis force is perpendicular to both (a) the velocity vector of a mass and (b) the axis of rotation.   Ilustrating the Coriolis force.    "
},
{
  "id": "sec_cross_product-4-3",
  "level": "2",
  "url": "sec_cross_product.html#sec_cross_product-4-3",
  "type": "Theorem",
  "number": "4.3.4",
  "title": "Area of a Parallelogram.",
  "body": " Area of a Parallelogram  The area of a parallelogram formed by vectors and with an angle between them is   "
},
{
  "id": "figure-areaparallelogram",
  "level": "2",
  "url": "sec_cross_product.html#figure-areaparallelogram",
  "type": "Figure",
  "number": "4.3.5",
  "title": "",
  "body": " Area of a parallelogram determined by and : .   Area of a Parallelogram.    "
},
{
  "id": "sec_cross_product-4-5",
  "level": "2",
  "url": "sec_cross_product.html#sec_cross_product-4-5",
  "type": "Definition",
  "number": "4.3.6",
  "title": "Cross Product.",
  "body": " Cross Product  We define the cross product  cross product of vectors and , denoted , to be  [Direction] a vector perpendicular to both and and  [Magnitude] having length equal to the area of the parallelogram formed by and .   "
},
{
  "id": "sec_cross_product-4-7",
  "level": "2",
  "url": "sec_cross_product.html#sec_cross_product-4-7",
  "type": "Theorem",
  "number": "4.3.7",
  "title": "Geometric Computation of Cross Product.",
  "body": " Geometric Computation of Cross Product  If and are not parallel, then where is the angle between and and is the unit vector perpendicular to and in the direction given by the right-hand rule.  "
},
{
  "id": "CrossProductEx1",
  "level": "2",
  "url": "sec_cross_product.html#CrossProductEx1",
  "type": "Example",
  "number": "4.3.8",
  "title": "Calculating <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\vec{i} \\times (\\vec{i} + \\vec{j})\\)<\/span>.",
  "body": " Calculating  To calculate , we start with sketching both vectors as shown in . Vectors and form a parallelogram that lives in the -plane. Since and , and the angle between and is , the area of the parallelogram is Since the unit vector is a vector perpendicular to both, we have . Note that is also perpendicular to both and . However, by the right-hand rule, since is being crossed into , the cross product will point in the positive direction. Note though that by the right-hand rule.     Computing a cross product.     "
},
{
  "id": "ijkcompute",
  "level": "2",
  "url": "sec_cross_product.html#ijkcompute",
  "type": "Figure",
  "number": "4.3.10",
  "title": "",
  "body": " , , , , , and   Cross product calculations.    "
},
{
  "id": "propcross",
  "level": "2",
  "url": "sec_cross_product.html#propcross",
  "type": "Theorem",
  "number": "4.3.11",
  "title": "Properties of the Cross Product.",
  "body": " Properties of the Cross Product  For vectors , and , and scalar              "
},
{
  "id": "CrossProductEx3",
  "level": "2",
  "url": "sec_cross_product.html#CrossProductEx3",
  "type": "Example",
  "number": "4.3.12",
  "title": "<span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\((2\\vec{j}+\\vec{k}) \\times \\vec{i}\\)<\/span>.",
  "body": "  For some unit vector perpendicular to both and we have Rather than find this vector , we can use properties to compute the cross product. Since and , we see that . This vector is shown in . Finally, you may wish to note that is the unit vector that we could have pursued above.     Using properties of cross product.     "
},
{
  "id": "calculategeocross",
  "level": "2",
  "url": "sec_cross_product.html#calculategeocross",
  "type": "Checkpoint",
  "number": "4.3.14",
  "title": "Calculating a Cross Product.",
  "body": "Calculating a Cross Product  Calculate geometrically or by using properties of the cross product.   From a geometric perspective, we notice the parallelogram formed by and form a square in the -plane. The area of this parallelogram (square) is . So, by the right hand rule, we have .   The parallelogram formed by and form a square.   Computing another cross product.     Using properties of the cross product, we obtain   "
},
{
  "id": "sec_cross_product-5-4",
  "level": "2",
  "url": "sec_cross_product.html#sec_cross_product-5-4",
  "type": "Definition",
  "number": "4.3.16",
  "title": "Determinant.",
  "body": "Determinant  The determinant  determinant of a matrix is given by   "
},
{
  "id": "DeterminantExample1",
  "level": "2",
  "url": "sec_cross_product.html#DeterminantExample1",
  "type": "Example",
  "number": "4.3.17",
  "title": "A <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(3 \\times 3\\)<\/span> Determinant.",
  "body": " A Determinant   "
},
{
  "id": "DeterminantComputations",
  "level": "2",
  "url": "sec_cross_product.html#DeterminantComputations",
  "type": "Checkpoint",
  "number": "4.3.18",
  "title": "Determinant Computations.",
  "body": "Determinant Computations  Compute each determinant.                     "
},
{
  "id": "sec_cross_product-6",
  "level": "2",
  "url": "sec_cross_product.html#sec_cross_product-6",
  "type": "Theorem",
  "number": "4.3.19",
  "title": "Algebraic Calculation of Cross Product.",
  "body": " Algebraic Calculation of Cross Product  If and , then   "
},
{
  "id": "sec_cross_product-8",
  "level": "2",
  "url": "sec_cross_product.html#sec_cross_product-8",
  "type": "Example",
  "number": "4.3.20",
  "title": "Algebraic and Geometric Computations Produce The Same Cross Product.",
  "body": " Algebraic and Geometric Computations Produce The Same Cross Product  Compare the algebraic calculation below to the geometric calculation applied in .  "
},
{
  "id": "sec_cross_product-9",
  "level": "2",
  "url": "sec_cross_product.html#sec_cross_product-9",
  "type": "Example",
  "number": "4.3.21",
  "title": "Algebraic and Geometric Computations Produce The Same Cross Product - Part II.",
  "body": " Algebraic and Geometric Computations Produce The Same Cross Product - Part II  Compare the algebraic calculation below to the geometric calculation applied in .  "
},
{
  "id": "sec_cross_product-10",
  "level": "2",
  "url": "sec_cross_product.html#sec_cross_product-10",
  "type": "Checkpoint",
  "number": "4.3.22",
  "title": "Two Ways to a Cross Product.",
  "body": "Two Ways to a Cross Product Calculate from algebraically. Compare results.   Naturally, the result is the same.  "
},
{
  "id": "determtocrossprod",
  "level": "2",
  "url": "sec_cross_product.html#determtocrossprod",
  "type": "Checkpoint",
  "number": "4.3.23",
  "title": "Use a Determinant to Compute a Cross Product.",
  "body": "Use a Determinant to Compute a Cross Product Compute .    "
},
{
  "id": "CoriolisBWEarth",
  "level": "2",
  "url": "sec_cross_product.html#CoriolisBWEarth",
  "type": "Figure",
  "number": "4.3.24",
  "title": "",
  "body": " The spin of the Earth is the cause of the Coriolis Effect. Source: Introduction to Oceanography by Paul Webb licensed under CC BY-SA 4.0 .   The Coriolis Effect.   "
},
{
  "id": "VortexCreated",
  "level": "2",
  "url": "sec_cross_product.html#VortexCreated",
  "type": "Figure",
  "number": "4.3.25",
  "title": "",
  "body": " In the northern hemisphere, winds veer right rather than directly towards low pressure. This causes low pressure systems to rotate in a counterclockwise fashion.   The Coriolis Effect.    "
},
{
  "id": "AxisOfEarthRotation",
  "level": "2",
  "url": "sec_cross_product.html#AxisOfEarthRotation",
  "type": "Figure",
  "number": "4.3.26",
  "title": "",
  "body": " The Earth rotates about vector . In this portion of a sphere, a local coordinate system is defined at a latitude of by perpendicular vectors , , and .   The vector Omega around which the Earth spins.    "
},
{
  "id": "sec_cross_product-12-13",
  "level": "2",
  "url": "sec_cross_product.html#sec_cross_product-12-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Coriolis parameter "
},
{
  "id": "coriolisgolfball",
  "level": "2",
  "url": "sec_cross_product.html#coriolisgolfball",
  "type": "Checkpoint",
  "number": "4.3.27",
  "title": "Coriolis Force on a Golf Ball.",
  "body": "Coriolis Force on a Golf Ball We are on the surface of the Earth at a golf course in Saint Cloud, Minnesota (latitude of ). We hit a golf ball due south with speed .   Explain why the magnitude of the Coriolis force on the golf ball has value    The Coriolis effect is very slight. To see this, calculate the magnitude of the force on the golf ball due to gravity and compare it (as a percentage) to the magnitude of the Coriolis force . Assume the mass of the golf ball is g and travels at a typical ball speed of 50 m\/s. [Hint: You are calculating .]    Since the angle between and is , we have  We calculate . And, This gives . That is, the Coriolis force on the golf ball is about 0.05% that of the gravitational force on the golf ball.   "
},
{
  "id": "sec_cross_product-13-2",
  "level": "2",
  "url": "sec_cross_product.html#sec_cross_product-13-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geostrophic "
},
{
  "id": "ResultingPathCoriolis",
  "level": "2",
  "url": "sec_cross_product.html#ResultingPathCoriolis",
  "type": "Figure",
  "number": "4.3.28",
  "title": "",
  "body": " Air moved by the pressure gradient force (PGF) is deflected by the Coriolis force. Source: Figure 6.13 in The Atmosphere , Lutgens and Tarbuck, 8th edition, 2001.   PGF deflection due to Coriolis Effect.   "
},
{
  "id": "mygeos2",
  "level": "2",
  "url": "sec_cross_product.html#mygeos2",
  "type": "Figure",
  "number": "4.3.29",
  "title": "",
  "body": " Geostrophic winds, blowing parallel to isobars, result when the Coriolis force balances the Pressure Gradient Force (PGF).   PGF equals Coriolis Effect.    "
},
{
  "id": "AreaOfParallelogram",
  "level": "2",
  "url": "sec_cross_product.html#AreaOfParallelogram",
  "type": "Exercise",
  "number": "4.3.1",
  "title": "Finding the Area of a Parallelogram.",
  "body": "Finding the Area of a Parallelogram "
},
{
  "id": "RandomCrossProduct",
  "level": "2",
  "url": "sec_cross_product.html#RandomCrossProduct",
  "type": "Exercise",
  "number": "4.3.2",
  "title": "Computing a Cross Product.",
  "body": "Computing a Cross Product "
},
{
  "id": "Meaningless1",
  "level": "2",
  "url": "sec_cross_product.html#Meaningless1",
  "type": "Exercise",
  "number": "4.3.3",
  "title": "Scalar, Vector, or Meaningless?",
  "body": "Scalar, Vector, or Meaningless? "
},
{
  "id": "Meaningless2",
  "level": "2",
  "url": "sec_cross_product.html#Meaningless2",
  "type": "Exercise",
  "number": "4.3.4",
  "title": "Scalar, Vector, or Meaningless? II.",
  "body": "Scalar, Vector, or Meaningless? II "
},
{
  "id": "Meaningless3",
  "level": "2",
  "url": "sec_cross_product.html#Meaningless3",
  "type": "Exercise",
  "number": "4.3.5",
  "title": "Scalar, Vector, or Meaningless? III.",
  "body": "Scalar, Vector, or Meaningless? III "
},
{
  "id": "Direction1",
  "level": "2",
  "url": "sec_cross_product.html#Direction1",
  "type": "Exercise",
  "number": "4.3.6",
  "title": "Direction of the Cross Product.",
  "body": "Direction of the Cross Product "
},
{
  "id": "SeeingCrossProdEx",
  "level": "2",
  "url": "sec_cross_product.html#SeeingCrossProdEx",
  "type": "Exercise",
  "number": "4.3.7",
  "title": "Seeing a Cross Product.",
  "body": "Seeing a Cross Product Compute . That is, give the resolution of this product. Then, plot on the vector .  Vectors and for .   Area of a Parallelogram.     We resolve and . So . This means .   .   Drawing a cross product.     "
},
{
  "id": "SeeingCrossProd2",
  "level": "2",
  "url": "sec_cross_product.html#SeeingCrossProd2",
  "type": "Exercise",
  "number": "4.3.8",
  "title": "Seeing a Cross Product II.",
  "body": "Seeing a Cross Product II Suppose and . Compute the cross product . Sketch and label all three vectors ( , , and ) on the axes in .   Axes for .   Axes for a cross product.      . Both and are in the -plane and are perpendicular to each other.   .   Drawing a cross product again.     "
},
{
  "id": "VSorU",
  "level": "2",
  "url": "sec_cross_product.html#VSorU",
  "type": "Exercise",
  "number": "4.3.9",
  "title": "Vector, Scalar, or Undefined.",
  "body": "Vector, Scalar, or Undefined  Decide if each of the following quantities is a vector, a scalar, or undefined.                        scalar  vector  scalar  undefined  vector  undefined    "
},
{
  "id": "NoVerticalCross",
  "level": "2",
  "url": "sec_cross_product.html#NoVerticalCross",
  "type": "Exercise",
  "number": "4.3.10",
  "title": "Cross Product with No Vertical Component.",
  "body": "Cross Product with No Vertical Component  In Coriolis calculations, it is common to compute cross products of vectors in which the first vector has a zero first component.   Vectors for .   Axes for a cross product.      Find a resolution (i.e., write it in the form ) of vector shown in . Note that the head of this vector is located at the halfway point of the bottom edge of the box. Also, be sure to note that the box is 2 by 1 by 1.  Find a resolution of the vector .  Compute .          "
},
{
  "id": "VenusCoriolis",
  "level": "2",
  "url": "sec_cross_product.html#VenusCoriolis",
  "type": "Exercise",
  "number": "4.3.11",
  "title": "Coriolis on Venus.",
  "body": "Coriolis on Venus  Venus rotates in a direction opposite to that of the Earth and does so at a different rate.   Do a web search to determine the rotation rate of Venus. How does this rate of rotation compare to that of our planet? How does this impact the Coriolis effect on Venus?  How does the direction of rotation on Venus impact the Coriolis effect on Venus?  Just as in , calculate the magnitude of force on a golf ball due to gravity on Venus ( on venus is ) and compare it (as a percentage) to the impact of the Coriolis force on Venus. Assume a mass of grams, a typical ball speed of , and a latitude of .     Venus rotates much more slowly than Earth (roughly radians per second). This means the Coriolis effect is far less.  Since the rotation is opposite that of the rotation of Earth, the Coriolis effect is opposite that of the Earth. Winds in the northern hemisphere on Venus would curl as those in the southern hemisphere of earth and vice-versa.  The magnitude of force on a golf ball due to gravity on Venus is Newtons. The force due to Coriolis has magnitude This is very small comparison to . In fact, .   "
},
{
  "id": "ThreeForcesSumToZero",
  "level": "2",
  "url": "sec_cross_product.html#ThreeForcesSumToZero",
  "type": "Exercise",
  "number": "4.3.12",
  "title": "Three Forces Sum to Zero.",
  "body": "Three Forces Sum to Zero The sum of three vectors - the PGF, the Coriolis force, and the frictional force - at a given location is approximately zero. Sketch a vector representing the frictional force on . Given are vectors representing the PGF and Coriolis force at that location.   Vectors for .   Vectors summing to zero.       Solution to .   Vectors summing to zero.      "
},
{
  "id": "PickingKoff",
  "level": "2",
  "url": "sec_cross_product.html#PickingKoff",
  "type": "Exercise",
  "number": "4.3.13",
  "title": "The <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\vec{k}\\)<\/span> Component.",
  "body": "The Component  The dotted lines in form a box.  Vector for .   Pick off the k component.      Resolve the vector into its components.   Is the dot product positive, negative, or zero?   Compute .       negative    "
},
{
  "id": "TechnologyCrossProducts",
  "level": "2",
  "url": "sec_cross_product.html#TechnologyCrossProducts",
  "type": "Exercise",
  "number": "4.3.14",
  "title": "Technology and Vector Products.",
  "body": "Technology and Vector Products  Technology can really help with computation of cross products. Try it!  Pick two vectors and at random. Use your favorite technology (such as Wolfram Alpha) to compute and . Hint: In Wolfram Alpha, try typing something like ( <1,2,3> cross <4,5,6>) dot <1,2,3> .  Would the above result be obvious by geometric or algebraic computation?    "
},
{
  "id": "sec_partial_differentiation",
  "level": "1",
  "url": "sec_partial_differentiation.html",
  "type": "Section",
  "number": "5.1",
  "title": "Partial Differentiation",
  "body": " Partial Differentiation     How do we measure the instantaneous rate of change of a function with respect to a change in an independent variable or ?    Given a function , how do we compute or estimate the first-order partial derivatives and and what do they tell us about ?      Suppose that represents the surface temperature (measured in degrees Fahrenheit) as a function of longitude (measured in degrees east of the prime meridian) and latitude (measured in degrees north of the equator). How does surface temperature change with respect to a small change in longitude ? How does change with respect to a small change in latitude ?   How does surface temperature change with respect to a change in longitude or a change in latitude ? (Source: weather.gov ).   A weather map of the United States.    In many circumstances, we are interested in a rate of change of a dependent variable with respect to an independent variable on which it depends. For example, at what rate does the wind chill change at an air temperature of when the wind speed increases by 1 mph? At any given instant, this value is a derivative. In what follows, we attempt to understand such derivatives graphically, numerically, and algebraically.    First-order Partial Derivatives   Geometric Idea of the Partial Derivative  Suppose we are located on the surface at . As your or coordinate changes, the value of will also change. That is, the output of the function , representing your height on the surface, changes as your input, an ordered pair , changes. If the input is , the output is . So how fast does the -value, or height on the surface, change if we increase the -value of your location while holding the value constant at 2? That is, as we walk along the surface in the positive -direction?   The intersection of the surface with the vertical plane is a parabola. The tangent line to this parabola at describes a rate of change with respect to a change in variable . That is, the slope of the tangent line to the parabola shown is . Source: https:\/\/www.geogebra.org\/m\/tQWRhRzn    Partial derivative to paraboloid.    The surface is shown in . We will restrict our movement to the plane . The intersection of these two surfaces is a space curve - the parabola parallel to the plane. The slope of this curve at is the same as the slope of the parabola at . Using calculus, thd slope of this parabola at is . This means that at the point on the surface, our rate of change in height, , is as we change . We denote this fact by writing and saying that the partial derivative partial derivative of with respect to at is .   Discovering the Value of  Use the applet https:\/\/www.geogebra.org\/m\/tQWRhRzn to determine the value of for the function .   In the applet, enter the function and then choose and by using the sliders. To discover the value of , check the Illustrate box.   The intersection of the surface with the vertical plane is the parabola . The tangent line to this parabola at has slope . Source: https:\/\/www.geogebra.org\/m\/tQWRhRzn    Another partial derivative to paraboloid.      Numerical Estimation of the Partial Derivative  Values of near , appear in .   Values of near .                                                                Estimating the rate at which changes with respect to a change in (while keeping fixed at a value of 1), using a forward difference from the data in suggests that This is similar to the instantaneous rate of change calculated in . It should be noted too that other reasonable estimates on this rate can also be made from . For example, the central difference (a seemingly very good estimate!) incorporates behavior of on both sides of .   Estimating the Value of Use a central difference to estimate if using . We now estimate the rate at which changes with respect to a change in variable while keeping fixed at a value of 2. Using data in gives which matches the computed value from .    Algebraic Computation of the Partial Derivative  Once again we are interested in knowing how fast the dependent variable changes with respect to a change in the independent variable when . Further, we are interested in this change at the moment that , and . We limit our interest to the rate as changes; we hold the value of constant at . We evaluate the difference quotient When we then fix and let , the partial derivative emerges. That is, When , we see that . Compare this result to those in and . Also, note how closely this calculation resembles that of computing when .   Algebraic Computation of For , evaluate to find . We evaluate the difference quotient When we then fix and let , we find the partial derivative . That is, When , we see that . Compare this result to and .   The computations in and illustrate the formal definition of a partial derivative.   Partial Derivative  Let be a function of two variables and . The partial derivative partial derivative of with respect to at , is provided it exists.   Similarly, when the limit exists,   If we let and vary in , we have partial derivative functions and . Alternatively, if , we sometimes write and .  Since the partial derivative is the ordinary derivative of the function with held constant and is the ordinary derivative of with held constant, we can use all the differentiation formulas from one-variable calculus to find partial derivatives.  If , then and . If we wrote , on the other hand, then we would write and . Such partial derivative functions are useful in that they allow us to compute many slopes at the same time. For example, since , we have , , and .  Bulk Richardson Number  In the context of convective storm forecasting, the Bulk Richardson Number Bulk Richardson Number abbreviated as BRN is a nondimensional ratio of the convective available potential energy (CAPE) to a measure of the vertical wind shear ( ). The BRN is used to characterize convective-storm types for various environments.   Interpreting the Bulk Richardson Number (BRN). Sources: www.weather.gov and the American Meteorological Society      BRN value  Interpretation    BRN below 10  Strong vertical wind shear and weak CAPE. The shear may be too strong given the weak buoyancy to develop sustained convective updrafts. However, given sufficient forcing, thunderstorms may still develop; if so, rotating supercells could evolve given the high shear.    BRN = 10 to 45  Associated with supercell development.    BRN over 50  Relatively weak vertical wind shear and high CAPE which suggests multicellular thunderstorm development is most likely.     As a function of two variables, we write where CAPE represents buoyant energy and represents the difference between the 6-km density-weighted mean wind speed and a 500-m mean surface layer wind speed. A graph of this function appears in .   The graph of .   The graph of BRN.      Is BRN an increasing or decreasing function of the variable ?  Suppose that CAPE = 2500 J\/kg and m\/s. What ordered triple does this correspond to on the surface graphed above? Should we expect multicellular thunderstorm development?  Based on the surface given, should we expect to be positive, negative, or zero? Why?   Using your differentiation skills, compute . Is this value positive, negative, or zero?      Decreasing  or roughly which is associated with supercell development (not multicellular thunderstorm development).  Negative. If the surface is intersected with a vertical plane CAPE=constant, the resulting curve will be decreasing as increases. That is, it has a negative slope.       > Interpretations of First-order Partial Derivatives  Recall that the derivative of a single variable function has a geometric interpretation as the slope of the line tangent to the graph at a given point. Similarly, we have seen that the partial derivatives measure the slope of a line tangent to a trace of a function of two variables as shown in .   Tangent lines to two traces of the function . Left: Trace when . Right: Trace when .       Now we consider the first-order partial derivatives in context. Recall that the difference quotient for a function of a single variable at a point where tells us the average rate of change of over the interval , while the derivative tells us the instantaneous rate of change of at . We can use these same concepts to explain the meanings of the partial derivatives in context.   Launching a Projectile  Consider the function defined by which measures the range, or horizontal distance, in feet, traveled by a projectile launched with an initial speed of feet per second at an angle radians to the horizontal. The graph of this function is given on the left in . Moreover, if we fix the angle , we may view the trace as a function of alone, as seen at right in .   Left: The trace of with . Right: viewed as a function of alone.       Note that which gives the slope of the tangent line shown on the right of . Thinking of this derivative as an instantaneous rate of change implies that if we increase the initial speed of the projectile by one foot per second (from 150 feet per second to 151 feet per second), we should expect the horizontal distance traveled to increase by approximately 8.74 feet if we hold the launch angle constant at radians.  In the same way, we may obtain a trace by setting, say, as shown in Figure .   The trace of with .       This gives and therefore   Once again, the derivative gives the slope of the tangent line shown on the right in . Thinking of the derivative as an instantaneous rate of change, we expect that the range of the projectile increases by 509.5 feet for every radian we increase the launch angle if we keep the initial speed of the projectile constant at 150 feet per second.   Interpreting the Meaning of a Wind Chill Partial Let where is the wind chill temperature (in degrees Fahrenheit) that is associated with a wind speed of miles per hour and a temperature of degrees Fahrenheit. A table of values for the function is given in .  Table of windchill values.       Temperature ( )                            Wind             speed             (mph)                           Estimate . What does your answer mean in practical terms?  Estimate . What does your answer mean in practical terms?  When the temperature is , the temperature adjusted for wind chill drops by an average of about with every 1 mph increase in wind speed from 5 mph to 10 mph. Which partial derivative is this telling you about?     ; in practical terms, this means that when the wind is blowing at 10 mph and the temperature is , then it will feel roughly -0.6 degrees colder for every 1 mph increase in wind speed. That is, this is the rate as which the windchill changes with respect to a change in wind speed.   ; in practical terms, when the wind is blowing at 5 mph and the temperature is , then it will feel roughly 1.2 degrees Fahrenheit warmer for every 1 degree Fahrenheit the temperature increases - again a rate of change.  This suggests that and are both approximately .     Old Wind Chill Index Formula Models for the wind chill index have evolved over time. Until the 1970s, the coldest parts of Canada reported the original wind chill index wind chill index , a three or four digit number with units of kilocalories\/hour per square meter. Each individual calibrated the scale of numbers personally, through experience. The chart also provided general guidance to comfort and hazard through threshold values of the index, such as 1400, which was the threshold for frostbite. The original formula for the index was where was the wind chill index, was the wind velocity (in ), and was the air temperature (in ). Using this model, can be found by holding constant and differentiating with respect to . This gives For example, (not quite frostbite threshold) and . This tells us that when the wind velocity is m\/s and the air temperature is , the rate at which the wind chill index is changing from 1220 kilocalories\/hour per square meter is -32.1 (kilocalories\/hour per square meter per degree Celsius). Simply put, if wind remained at m\/s but the air temperature warmed to , we could expect the wind chill index to be roughly 1187.9 (even less worry of frostbite).  Current Wind Chill Index Formula In Minnesota, we tend to report air temperature in degrees Fahrenheit and wind speed in miles per hour. Using these units of measure, the current formula for the wind chill index wind chill index is where is the wind speed in miles per hour (mph) and is the air temperature in degees Fahrenheit ( ). The domain for this function only includes wind speeds above 3 mph and air temperatures below .  Evaluate . Compare this value to that given in .  Compute and .  Evaluate . Describe the meaning of this in practical terms. Then, compare your answer to that in (a).     which is quite similar to the value of found in .   ;   ; In practical terms, this gives the rate at which the wind chill is changing when the wind speed is mph and the air temperature is . Under those conditions, when the velocity of the wind increases 1 mph, we can expect the feels like temperature (i.e. wind chill) to decrease by about 0.6 of a degree Fahrenheit even if the air temperature remains constant. This is roughly the same as in (a).       Exercises  Use a Table to Estimate  Use a Table to Estimate  Sign of Partials from Contours  Sign of Partials from Contours II  Use Contours to Estimate  Partials of a Polynomial  Interpret Meaning of Partial  Partials from Traces    Relating Rates of Change in Coordinate Systems We know that the rectangular coordinates of a point are related to the polar coordinates of by the equations Find and and interpret the meaning of these partial derivatives.   The relationship between the polar coordinates of a point and the rectangular coordinates of .     gives the rate at which the -coordinate of point changes as a small change is made to its distance from the origin. gives the rate at which the -coordinate of point changes as a small change is made to the angle the point makes with the positive -axis.   Mean Wind Speed The mean wind speed mean wind speed  is a function of , the eastward wind speed, and , the northward wind speed. In fact,   If the eastward wind speed is m\/sec and the northward wind speed is m\/sec, determine the mean wind speed .  Compute when m\/sec and m\/sec. Be sure the state units with your response.  Interpret the meaning of computed in (b).    5 m\/sec  so that which is unitless. To see this, note that units are those of over those of or (m\/sec)\/(m\/sec).  is the rate at which the mean wind speed is changing with respect to changes in the eastward wind speed at the moment the eastward wind speed is 3 m\/sec and the northward wind speed is 4 m\/sec.    Saturated Vapor Pressure The saturated vapor pressure saturated vapor pressure , (in millibars) is the difference between the theoretical pressure exerted by the water vapor held in saturated air (100% relative humidity at a given temperature in degrees Celsius) and the pressure exerted by the water vapor that is actually held in the air being measured at the same given temperature.  The saturated vapor pressure function for .     Relative Humidity    Temp ( )                                                                                                                                      Use to estimate the value of . What are the units of ?   What are the units of ?  Is generally positive or negative? Explain.          is generally positive; for a constant temperature , the value of increases as increases.    Isobaric Maps The isobaric map in represents sea-level pressures (in millibars) at longitude (degrees east of the prime meridian) and latitude (degrees north of the equator).   Sea-level pressures on August 28, 2011 used in . Hurricane Irene is approaching the east coast of the United States. Source: NOAA's Weather Prediction Center.   Isobaric Map.     Is the value of positive, negative, or zero at Charleston, WV. Be sure to include units. Defend your answer.  Is the value of positive, negative, or zero at Santa Barbara, CA? Explain.  Compare values of both and at Minneapolis, MN and Washington, DC.     is negative at Charleston, WV. Moving to the east from Charleston, the pressure decreases. Units of are millibars per degree (of longitude).  is roughly zero at Santa Barbara. This is because northward movement (in the direction of ) yields a similar pressure since the isobar is roughly vertical at this point.  The value of is larger at Minneapolis than at Washington, DC. The value of is more than 1016 millibars at Minneapolis and is far lower than that at Wasington, DC. The value of at Washington, DC is much larger than the value of at Minneapolis. The rate at which the pressures are changing as one moves slightly east (in the positive direction) is much greater at Washington, DC since the isobars are closer together.    Potential Temperature  The potential temperature potential temperature of a parcel of air at pressure p (in mb) and absolute temperature (in ) is the temperature that the parcel would attain if adiabatically brought to a standard pressure of 1000 mb. In particular,   Compute . What units does this value have?  When (as it is in the atmosphere) is the potential temperature greater or less than the absolute temperature ? What happens as decreases (as a rising air parcel does in the atmosphere)?  Compute . What does this calculation say about how the potential temperature changes when holding pressure constant?  Compute . What does it mean to have this value be negative?       When , the base of the exponential part of the function is greater than 1 leading to a potential temperature that is greater than the absolute temperature. That is, . As decreases, the potential temperature increases.  so that for every one degree increase in absolute temperature , the potential temperature increases by . Note that this amount of increase does not depend on the initial temperature.  Being negative, this means that when holding the absolute temperature constant but increasing the pressure of an air parcel (by, say, having it drop to a lower height in the atmosphere), the potential temperature decreases (and does so at this calculated rate for this temperature and pressure ).    Insolation  The acronym insolation insolation means incoming solar radiation at the top of the atmosphere. shows the incoming solar radiation , measured in , as a function of latitude and day of the year. That is, it gives the contours of where is the day of the year (after January 1) and is the latitude in degrees north of the equator.   Average daily insolation over the globe. Source: Practical Meteorology, Stull shared under a CC BY-NC-SA 4.0 license .   Insolation over the globe.     Use the contour map to estimate the value of . Be sure to include units. Then, interpret the meaning of this value knowing that St. Cloud, MN lies at this latitude.  Is positive, negative, or zero? How does the contour diagram tell you this? How does common sense tell you this?  Is positive, negative, or zero? What does this suggest for the travel plans of college students over spring break?  Determine values of and such that both and . Interpret what these two conditions mean in terms of when and where one would be on the planet.    Frostbite The number of minutes until frostbite frostbite occurs is a function of , the wind speed (in mph), and , the air temperature (in ). The table in gives several values of , the minutes to frostbite under varying conditions.   Minutes to frostbite. Source: weather.gov .   Frostbite Table.     Compute . Then, carefully interpret the meaning of this equality with a single sentence.  Estimate . Be sure to give units.  Interpret the meaning of .     . This means that when the wind speed is 25 mph and the air temperature is -20 degrees Fahrenheit, frostbit will happen in 7 minutes.  minutes per mph.  minutes per mph means that when the temperature is -20 and the wind speed is 25 mph, the rate at which frostbite occurs is reduced by 0.2 minutes for every 1 mph increase in wind speed.    Wet Bulb Globe Temperature The wet bulb globe temperature wet bulb globe temperature (WBGT) , or WBGT, is an envrionmental monitoring measure introduced in the early 1950's in response to heat casualties occurring in the United States armed forces. WBGT utilizes ambient temperature, relative humidity, wind, and solar radiation from the sun to get a composite value that can be used when monitoring environmental conditions during exercise in the heat. More specifically, where is the wet bulb temperature (indicating humidity), is the globe temperature (indicating radiant heat), and is the ambient air (dry) temperature. Here, each of , and are measured in degrees Celsius.   In what units is WBGT measured?  Calculate . Be sure to include units on this value. Then, interpret this value's meaning.  In some instances when a WBGT monitoring device is unavailable, a chart as in can be used to estimate WBGT. These are estimates and are derived only from using temperature (in ) and relative humidity (as a percent) and the chart accounts for full sunshine and light wind conditions. Depending on the radiant heat load from the sun and the wind, the actual WBGT reading could be different from what is on the chart.   Wet Bulb Globe Temperature (WBGT). (Source: The Korey Stringer Institute ).   WBGT chart.    The chart gives . Use a central difference to estimate the value of . Be sure include units. Then, interpret the meaning of this value.     Degrees Celsius   . This value tells us that for each 1 degree increase in the wet bulb temperature, with both and held constant, we can expect a increase in WBGT.   We take this to mean that when the temperature is and the relative humidity is 95%, then when the temperature increases and the relative humidity stays constant, the WBGT measure increases by .     Speed of Sound The speed of sound traveling through ocean water is a function of temperature, salinity and depth. It may be modeled by the function   Here is the speed of sound in meters\/second, is the temperature in degrees Celsius, is the salinity in grams\/liter of water, and is the depth below the ocean surface in meters.   State the units in which each of the partial derivatives, , and , are expressed and explain the physical meaning of each.    Find the partial derivatives , and .    Evaluate each of the three partial derivatives at the point where , and . What does the sign of each partial derivatives tell us about the behavior of the function at the point ?      Think Backwards  Find a function for which and .  Find a function for which and .       No such function exists.     "
},
{
  "id": "sec_partial_differentiation-2",
  "level": "2",
  "url": "sec_partial_differentiation.html#sec_partial_differentiation-2",
  "type": "Motivating Questions",
  "number": "5.1",
  "title": "",
  "body": "   How do we measure the instantaneous rate of change of a function with respect to a change in an independent variable or ?    Given a function , how do we compute or estimate the first-order partial derivatives and and what do they tell us about ?    "
},
{
  "id": "usweathermappic2",
  "level": "2",
  "url": "sec_partial_differentiation.html#usweathermappic2",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": " How does surface temperature change with respect to a change in longitude or a change in latitude ? (Source: weather.gov ).   A weather map of the United States.   "
},
{
  "id": "geometricideapartial",
  "level": "2",
  "url": "sec_partial_differentiation.html#geometricideapartial",
  "type": "Example",
  "number": "5.1.2",
  "title": "Geometric Idea of the Partial Derivative.",
  "body": " Geometric Idea of the Partial Derivative  Suppose we are located on the surface at . As your or coordinate changes, the value of will also change. That is, the output of the function , representing your height on the surface, changes as your input, an ordered pair , changes. If the input is , the output is . So how fast does the -value, or height on the surface, change if we increase the -value of your location while holding the value constant at 2? That is, as we walk along the surface in the positive -direction?   The intersection of the surface with the vertical plane is a parabola. The tangent line to this parabola at describes a rate of change with respect to a change in variable . That is, the slope of the tangent line to the parabola shown is . Source: https:\/\/www.geogebra.org\/m\/tQWRhRzn    Partial derivative to paraboloid.    The surface is shown in . We will restrict our movement to the plane . The intersection of these two surfaces is a space curve - the parabola parallel to the plane. The slope of this curve at is the same as the slope of the parabola at . Using calculus, thd slope of this parabola at is . This means that at the point on the surface, our rate of change in height, , is as we change . We denote this fact by writing and saying that the partial derivative partial derivative of with respect to at is .  "
},
{
  "id": "PartialYParaboloid",
  "level": "2",
  "url": "sec_partial_differentiation.html#PartialYParaboloid",
  "type": "Checkpoint",
  "number": "5.1.4",
  "title": "Discovering the Value of <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\frac{\\partial f}{\\partial y}\\)<\/span>.",
  "body": "Discovering the Value of  Use the applet https:\/\/www.geogebra.org\/m\/tQWRhRzn to determine the value of for the function .   In the applet, enter the function and then choose and by using the sliders. To discover the value of , check the Illustrate box.   The intersection of the surface with the vertical plane is the parabola . The tangent line to this parabola at has slope . Source: https:\/\/www.geogebra.org\/m\/tQWRhRzn    Another partial derivative to paraboloid.    "
},
{
  "id": "numericalideapartial",
  "level": "2",
  "url": "sec_partial_differentiation.html#numericalideapartial",
  "type": "Example",
  "number": "5.1.6",
  "title": "Numerical Estimation of the Partial Derivative.",
  "body": " Numerical Estimation of the Partial Derivative  Values of near , appear in .   Values of near .                                                                Estimating the rate at which changes with respect to a change in (while keeping fixed at a value of 1), using a forward difference from the data in suggests that This is similar to the instantaneous rate of change calculated in . It should be noted too that other reasonable estimates on this rate can also be made from . For example, the central difference (a seemingly very good estimate!) incorporates behavior of on both sides of .  "
},
{
  "id": "PartialXParaboloid",
  "level": "2",
  "url": "sec_partial_differentiation.html#PartialXParaboloid",
  "type": "Checkpoint",
  "number": "5.1.8",
  "title": "Estimating the Value of <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\frac{\\partial f}{\\partial x}\\)<\/span>.",
  "body": "Estimating the Value of Use a central difference to estimate if using . We now estimate the rate at which changes with respect to a change in variable while keeping fixed at a value of 2. Using data in gives which matches the computed value from .  "
},
{
  "id": "algideapartial",
  "level": "2",
  "url": "sec_partial_differentiation.html#algideapartial",
  "type": "Example",
  "number": "5.1.9",
  "title": "Algebraic Computation of the Partial Derivative.",
  "body": " Algebraic Computation of the Partial Derivative  Once again we are interested in knowing how fast the dependent variable changes with respect to a change in the independent variable when . Further, we are interested in this change at the moment that , and . We limit our interest to the rate as changes; we hold the value of constant at . We evaluate the difference quotient When we then fix and let , the partial derivative emerges. That is, When , we see that . Compare this result to those in and . Also, note how closely this calculation resembles that of computing when .  "
},
{
  "id": "PartialXAlgebraic",
  "level": "2",
  "url": "sec_partial_differentiation.html#PartialXAlgebraic",
  "type": "Checkpoint",
  "number": "5.1.10",
  "title": "Algebraic Computation of <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\frac{\\partial f}{\\partial x}\\)<\/span>.",
  "body": "Algebraic Computation of For , evaluate to find . We evaluate the difference quotient When we then fix and let , we find the partial derivative . That is, When , we see that . Compare this result to and .  "
},
{
  "id": "partialdefn",
  "level": "2",
  "url": "sec_partial_differentiation.html#partialdefn",
  "type": "Definition",
  "number": "5.1.11",
  "title": "Partial Derivative.",
  "body": " Partial Derivative  Let be a function of two variables and . The partial derivative partial derivative of with respect to at , is provided it exists.  "
},
{
  "id": "sec_partial_differentiation-4-13",
  "level": "2",
  "url": "sec_partial_differentiation.html#sec_partial_differentiation-4-13",
  "type": "Example",
  "number": "5.1.12",
  "title": "",
  "body": "If , then and . If we wrote , on the other hand, then we would write and . Such partial derivative functions are useful in that they allow us to compute many slopes at the same time. For example, since , we have , , and . "
},
{
  "id": "BulkRichardsonNumber",
  "level": "2",
  "url": "sec_partial_differentiation.html#BulkRichardsonNumber",
  "type": "Checkpoint",
  "number": "5.1.13",
  "title": "Bulk Richardson Number.",
  "body": "Bulk Richardson Number  In the context of convective storm forecasting, the Bulk Richardson Number Bulk Richardson Number abbreviated as BRN is a nondimensional ratio of the convective available potential energy (CAPE) to a measure of the vertical wind shear ( ). The BRN is used to characterize convective-storm types for various environments.   Interpreting the Bulk Richardson Number (BRN). Sources: www.weather.gov and the American Meteorological Society      BRN value  Interpretation    BRN below 10  Strong vertical wind shear and weak CAPE. The shear may be too strong given the weak buoyancy to develop sustained convective updrafts. However, given sufficient forcing, thunderstorms may still develop; if so, rotating supercells could evolve given the high shear.    BRN = 10 to 45  Associated with supercell development.    BRN over 50  Relatively weak vertical wind shear and high CAPE which suggests multicellular thunderstorm development is most likely.     As a function of two variables, we write where CAPE represents buoyant energy and represents the difference between the 6-km density-weighted mean wind speed and a 500-m mean surface layer wind speed. A graph of this function appears in .   The graph of .   The graph of BRN.      Is BRN an increasing or decreasing function of the variable ?  Suppose that CAPE = 2500 J\/kg and m\/s. What ordered triple does this correspond to on the surface graphed above? Should we expect multicellular thunderstorm development?  Based on the surface given, should we expect to be positive, negative, or zero? Why?   Using your differentiation skills, compute . Is this value positive, negative, or zero?      Decreasing  or roughly which is associated with supercell development (not multicellular thunderstorm development).  Negative. If the surface is intersected with a vertical plane CAPE=constant, the resulting curve will be decreasing as increases. That is, it has a negative slope.     "
},
{
  "id": "F_10_2_trace_tangent",
  "level": "2",
  "url": "sec_partial_differentiation.html#F_10_2_trace_tangent",
  "type": "Figure",
  "number": "5.1.16",
  "title": "",
  "body": " Tangent lines to two traces of the function . Left: Trace when . Right: Trace when .      "
},
{
  "id": "projectilepartial",
  "level": "2",
  "url": "sec_partial_differentiation.html#projectilepartial",
  "type": "Example",
  "number": "5.1.17",
  "title": "Launching a Projectile.",
  "body": " Launching a Projectile  Consider the function defined by which measures the range, or horizontal distance, in feet, traveled by a projectile launched with an initial speed of feet per second at an angle radians to the horizontal. The graph of this function is given on the left in . Moreover, if we fix the angle , we may view the trace as a function of alone, as seen at right in .   Left: The trace of with . Right: viewed as a function of alone.       Note that which gives the slope of the tangent line shown on the right of . Thinking of this derivative as an instantaneous rate of change implies that if we increase the initial speed of the projectile by one foot per second (from 150 feet per second to 151 feet per second), we should expect the horizontal distance traveled to increase by approximately 8.74 feet if we hold the launch angle constant at radians.  In the same way, we may obtain a trace by setting, say, as shown in Figure .   The trace of with .       This gives and therefore   Once again, the derivative gives the slope of the tangent line shown on the right in . Thinking of the derivative as an instantaneous rate of change, we expect that the range of the projectile increases by 509.5 feet for every radian we increase the launch angle if we keep the initial speed of the projectile constant at 150 feet per second.  "
},
{
  "id": "windchillpartials",
  "level": "2",
  "url": "sec_partial_differentiation.html#windchillpartials",
  "type": "Checkpoint",
  "number": "5.1.20",
  "title": "Interpreting the Meaning of a Wind Chill Partial.",
  "body": "Interpreting the Meaning of a Wind Chill Partial Let where is the wind chill temperature (in degrees Fahrenheit) that is associated with a wind speed of miles per hour and a temperature of degrees Fahrenheit. A table of values for the function is given in .  Table of windchill values.       Temperature ( )                            Wind             speed             (mph)                           Estimate . What does your answer mean in practical terms?  Estimate . What does your answer mean in practical terms?  When the temperature is , the temperature adjusted for wind chill drops by an average of about with every 1 mph increase in wind speed from 5 mph to 10 mph. Which partial derivative is this telling you about?     ; in practical terms, this means that when the wind is blowing at 10 mph and the temperature is , then it will feel roughly -0.6 degrees colder for every 1 mph increase in wind speed. That is, this is the rate as which the windchill changes with respect to a change in wind speed.   ; in practical terms, when the wind is blowing at 5 mph and the temperature is , then it will feel roughly 1.2 degrees Fahrenheit warmer for every 1 degree Fahrenheit the temperature increases - again a rate of change.  This suggests that and are both approximately .   "
},
{
  "id": "oldwindchillindex",
  "level": "2",
  "url": "sec_partial_differentiation.html#oldwindchillindex",
  "type": "Example",
  "number": "5.1.22",
  "title": "Old Wind Chill Index Formula.",
  "body": " Old Wind Chill Index Formula Models for the wind chill index have evolved over time. Until the 1970s, the coldest parts of Canada reported the original wind chill index wind chill index , a three or four digit number with units of kilocalories\/hour per square meter. Each individual calibrated the scale of numbers personally, through experience. The chart also provided general guidance to comfort and hazard through threshold values of the index, such as 1400, which was the threshold for frostbite. The original formula for the index was where was the wind chill index, was the wind velocity (in ), and was the air temperature (in ). Using this model, can be found by holding constant and differentiating with respect to . This gives For example, (not quite frostbite threshold) and . This tells us that when the wind velocity is m\/s and the air temperature is , the rate at which the wind chill index is changing from 1220 kilocalories\/hour per square meter is -32.1 (kilocalories\/hour per square meter per degree Celsius). Simply put, if wind remained at m\/s but the air temperature warmed to , we could expect the wind chill index to be roughly 1187.9 (even less worry of frostbite). "
},
{
  "id": "interpretfirstorderpartials-8",
  "level": "2",
  "url": "sec_partial_differentiation.html#interpretfirstorderpartials-8",
  "type": "Checkpoint",
  "number": "5.1.23",
  "title": "Current Wind Chill Index Formula.",
  "body": "Current Wind Chill Index Formula In Minnesota, we tend to report air temperature in degrees Fahrenheit and wind speed in miles per hour. Using these units of measure, the current formula for the wind chill index wind chill index is where is the wind speed in miles per hour (mph) and is the air temperature in degees Fahrenheit ( ). The domain for this function only includes wind speeds above 3 mph and air temperatures below .  Evaluate . Compare this value to that given in .  Compute and .  Evaluate . Describe the meaning of this in practical terms. Then, compare your answer to that in (a).     which is quite similar to the value of found in .   ;   ; In practical terms, this gives the rate at which the wind chill is changing when the wind speed is mph and the air temperature is . Under those conditions, when the velocity of the wind increases 1 mph, we can expect the feels like temperature (i.e. wind chill) to decrease by about 0.6 of a degree Fahrenheit even if the air temperature remains constant. This is roughly the same as in (a).   "
},
{
  "id": "EvaluatefxFromTable",
  "level": "2",
  "url": "sec_partial_differentiation.html#EvaluatefxFromTable",
  "type": "Exercise",
  "number": "5.1.3.1",
  "title": "Use a Table to Estimate <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\displaystyle \\frac{\\partial f}{\\partial x}\\)<\/span>.",
  "body": "Use a Table to Estimate "
},
{
  "id": "EvaluatefyFromTable",
  "level": "2",
  "url": "sec_partial_differentiation.html#EvaluatefyFromTable",
  "type": "Exercise",
  "number": "5.1.3.2",
  "title": "Use a Table to Estimate <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\displaystyle \\frac{\\partial f}{\\partial y}\\)<\/span>.",
  "body": "Use a Table to Estimate "
},
{
  "id": "EvaluatefxfyFromFormula",
  "level": "2",
  "url": "sec_partial_differentiation.html#EvaluatefxfyFromFormula",
  "type": "Exercise",
  "number": "5.1.3.3",
  "title": "Sign of Partials from Contours.",
  "body": "Sign of Partials from Contours "
},
{
  "id": "SignPartialsContour2",
  "level": "2",
  "url": "sec_partial_differentiation.html#SignPartialsContour2",
  "type": "Exercise",
  "number": "5.1.3.4",
  "title": "Sign of Partials from Contours II.",
  "body": "Sign of Partials from Contours II "
},
{
  "id": "EvaluatefyFromContours",
  "level": "2",
  "url": "sec_partial_differentiation.html#EvaluatefyFromContours",
  "type": "Exercise",
  "number": "5.1.3.5",
  "title": "Use Contours to Estimate <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\displaystyle \\frac{\\partial f}{\\partial y}\\)<\/span>.",
  "body": "Use Contours to Estimate "
},
{
  "id": "PartialsPoly",
  "level": "2",
  "url": "sec_partial_differentiation.html#PartialsPoly",
  "type": "Exercise",
  "number": "5.1.3.6",
  "title": "Partials of a Polynomial.",
  "body": "Partials of a Polynomial "
},
{
  "id": "InterpretMeaning",
  "level": "2",
  "url": "sec_partial_differentiation.html#InterpretMeaning",
  "type": "Exercise",
  "number": "5.1.3.7",
  "title": "Interpret Meaning of Partial.",
  "body": "Interpret Meaning of Partial "
},
{
  "id": "PartialsTraces",
  "level": "2",
  "url": "sec_partial_differentiation.html#PartialsTraces",
  "type": "Exercise",
  "number": "5.1.3.8",
  "title": "Partials from Traces.",
  "body": "Partials from Traces "
},
{
  "id": "partialpolarcoords",
  "level": "2",
  "url": "sec_partial_differentiation.html#partialpolarcoords",
  "type": "Exercise",
  "number": "5.1.3.9",
  "title": "Relating Rates of Change in Coordinate Systems.",
  "body": "Relating Rates of Change in Coordinate Systems We know that the rectangular coordinates of a point are related to the polar coordinates of by the equations Find and and interpret the meaning of these partial derivatives.   The relationship between the polar coordinates of a point and the rectangular coordinates of .     gives the rate at which the -coordinate of point changes as a small change is made to its distance from the origin. gives the rate at which the -coordinate of point changes as a small change is made to the angle the point makes with the positive -axis.  "
},
{
  "id": "meanwindspeed",
  "level": "2",
  "url": "sec_partial_differentiation.html#meanwindspeed",
  "type": "Exercise",
  "number": "5.1.3.10",
  "title": "Mean Wind Speed.",
  "body": "Mean Wind Speed The mean wind speed mean wind speed  is a function of , the eastward wind speed, and , the northward wind speed. In fact,   If the eastward wind speed is m\/sec and the northward wind speed is m\/sec, determine the mean wind speed .  Compute when m\/sec and m\/sec. Be sure the state units with your response.  Interpret the meaning of computed in (b).    5 m\/sec  so that which is unitless. To see this, note that units are those of over those of or (m\/sec)\/(m\/sec).  is the rate at which the mean wind speed is changing with respect to changes in the eastward wind speed at the moment the eastward wind speed is 3 m\/sec and the northward wind speed is 4 m\/sec.   "
},
{
  "id": "SVPexercise",
  "level": "2",
  "url": "sec_partial_differentiation.html#SVPexercise",
  "type": "Exercise",
  "number": "5.1.3.11",
  "title": "Saturated Vapor Pressure.",
  "body": "Saturated Vapor Pressure The saturated vapor pressure saturated vapor pressure , (in millibars) is the difference between the theoretical pressure exerted by the water vapor held in saturated air (100% relative humidity at a given temperature in degrees Celsius) and the pressure exerted by the water vapor that is actually held in the air being measured at the same given temperature.  The saturated vapor pressure function for .     Relative Humidity    Temp ( )                                                                                                                                      Use to estimate the value of . What are the units of ?   What are the units of ?  Is generally positive or negative? Explain.          is generally positive; for a constant temperature , the value of increases as increases.   "
},
{
  "id": "partialisobaricmap",
  "level": "2",
  "url": "sec_partial_differentiation.html#partialisobaricmap",
  "type": "Exercise",
  "number": "5.1.3.12",
  "title": "Isobaric Maps.",
  "body": "Isobaric Maps The isobaric map in represents sea-level pressures (in millibars) at longitude (degrees east of the prime meridian) and latitude (degrees north of the equator).   Sea-level pressures on August 28, 2011 used in . Hurricane Irene is approaching the east coast of the United States. Source: NOAA's Weather Prediction Center.   Isobaric Map.     Is the value of positive, negative, or zero at Charleston, WV. Be sure to include units. Defend your answer.  Is the value of positive, negative, or zero at Santa Barbara, CA? Explain.  Compare values of both and at Minneapolis, MN and Washington, DC.     is negative at Charleston, WV. Moving to the east from Charleston, the pressure decreases. Units of are millibars per degree (of longitude).  is roughly zero at Santa Barbara. This is because northward movement (in the direction of ) yields a similar pressure since the isobar is roughly vertical at this point.  The value of is larger at Minneapolis than at Washington, DC. The value of is more than 1016 millibars at Minneapolis and is far lower than that at Wasington, DC. The value of at Washington, DC is much larger than the value of at Minneapolis. The rate at which the pressures are changing as one moves slightly east (in the positive direction) is much greater at Washington, DC since the isobars are closer together.   "
},
{
  "id": "ez_potential_temperature",
  "level": "2",
  "url": "sec_partial_differentiation.html#ez_potential_temperature",
  "type": "Exercise",
  "number": "5.1.3.13",
  "title": "Potential Temperature.",
  "body": "Potential Temperature  The potential temperature potential temperature of a parcel of air at pressure p (in mb) and absolute temperature (in ) is the temperature that the parcel would attain if adiabatically brought to a standard pressure of 1000 mb. In particular,   Compute . What units does this value have?  When (as it is in the atmosphere) is the potential temperature greater or less than the absolute temperature ? What happens as decreases (as a rising air parcel does in the atmosphere)?  Compute . What does this calculation say about how the potential temperature changes when holding pressure constant?  Compute . What does it mean to have this value be negative?       When , the base of the exponential part of the function is greater than 1 leading to a potential temperature that is greater than the absolute temperature. That is, . As decreases, the potential temperature increases.  so that for every one degree increase in absolute temperature , the potential temperature increases by . Note that this amount of increase does not depend on the initial temperature.  Being negative, this means that when holding the absolute temperature constant but increasing the pressure of an air parcel (by, say, having it drop to a lower height in the atmosphere), the potential temperature decreases (and does so at this calculated rate for this temperature and pressure ).   "
},
{
  "id": "insolation",
  "level": "2",
  "url": "sec_partial_differentiation.html#insolation",
  "type": "Exercise",
  "number": "5.1.3.14",
  "title": "Insolation.",
  "body": "Insolation  The acronym insolation insolation means incoming solar radiation at the top of the atmosphere. shows the incoming solar radiation , measured in , as a function of latitude and day of the year. That is, it gives the contours of where is the day of the year (after January 1) and is the latitude in degrees north of the equator.   Average daily insolation over the globe. Source: Practical Meteorology, Stull shared under a CC BY-NC-SA 4.0 license .   Insolation over the globe.     Use the contour map to estimate the value of . Be sure to include units. Then, interpret the meaning of this value knowing that St. Cloud, MN lies at this latitude.  Is positive, negative, or zero? How does the contour diagram tell you this? How does common sense tell you this?  Is positive, negative, or zero? What does this suggest for the travel plans of college students over spring break?  Determine values of and such that both and . Interpret what these two conditions mean in terms of when and where one would be on the planet.   "
},
{
  "id": "frostbitepartial",
  "level": "2",
  "url": "sec_partial_differentiation.html#frostbitepartial",
  "type": "Exercise",
  "number": "5.1.3.15",
  "title": "Frostbite.",
  "body": "Frostbite The number of minutes until frostbite frostbite occurs is a function of , the wind speed (in mph), and , the air temperature (in ). The table in gives several values of , the minutes to frostbite under varying conditions.   Minutes to frostbite. Source: weather.gov .   Frostbite Table.     Compute . Then, carefully interpret the meaning of this equality with a single sentence.  Estimate . Be sure to give units.  Interpret the meaning of .     . This means that when the wind speed is 25 mph and the air temperature is -20 degrees Fahrenheit, frostbit will happen in 7 minutes.  minutes per mph.  minutes per mph means that when the temperature is -20 and the wind speed is 25 mph, the rate at which frostbite occurs is reduced by 0.2 minutes for every 1 mph increase in wind speed.   "
},
{
  "id": "WetBulbGlobeTemp",
  "level": "2",
  "url": "sec_partial_differentiation.html#WetBulbGlobeTemp",
  "type": "Exercise",
  "number": "5.1.3.16",
  "title": "Wet Bulb Globe Temperature.",
  "body": "Wet Bulb Globe Temperature The wet bulb globe temperature wet bulb globe temperature (WBGT) , or WBGT, is an envrionmental monitoring measure introduced in the early 1950's in response to heat casualties occurring in the United States armed forces. WBGT utilizes ambient temperature, relative humidity, wind, and solar radiation from the sun to get a composite value that can be used when monitoring environmental conditions during exercise in the heat. More specifically, where is the wet bulb temperature (indicating humidity), is the globe temperature (indicating radiant heat), and is the ambient air (dry) temperature. Here, each of , and are measured in degrees Celsius.   In what units is WBGT measured?  Calculate . Be sure to include units on this value. Then, interpret this value's meaning.  In some instances when a WBGT monitoring device is unavailable, a chart as in can be used to estimate WBGT. These are estimates and are derived only from using temperature (in ) and relative humidity (as a percent) and the chart accounts for full sunshine and light wind conditions. Depending on the radiant heat load from the sun and the wind, the actual WBGT reading could be different from what is on the chart.   Wet Bulb Globe Temperature (WBGT). (Source: The Korey Stringer Institute ).   WBGT chart.    The chart gives . Use a central difference to estimate the value of . Be sure include units. Then, interpret the meaning of this value.     Degrees Celsius   . This value tells us that for each 1 degree increase in the wet bulb temperature, with both and held constant, we can expect a increase in WBGT.   We take this to mean that when the temperature is and the relative humidity is 95%, then when the temperature increases and the relative humidity stays constant, the WBGT measure increases by .    "
},
{
  "id": "A_10_2_11",
  "level": "2",
  "url": "sec_partial_differentiation.html#A_10_2_11",
  "type": "Exercise",
  "number": "5.1.3.17",
  "title": "Speed of Sound.",
  "body": "Speed of Sound The speed of sound traveling through ocean water is a function of temperature, salinity and depth. It may be modeled by the function   Here is the speed of sound in meters\/second, is the temperature in degrees Celsius, is the salinity in grams\/liter of water, and is the depth below the ocean surface in meters.   State the units in which each of the partial derivatives, , and , are expressed and explain the physical meaning of each.    Find the partial derivatives , and .    Evaluate each of the three partial derivatives at the point where , and . What does the sign of each partial derivatives tell us about the behavior of the function at the point ?     "
},
{
  "id": "partialbackwards",
  "level": "2",
  "url": "sec_partial_differentiation.html#partialbackwards",
  "type": "Exercise",
  "number": "5.1.3.18",
  "title": "Think Backwards.",
  "body": "Think Backwards  Find a function for which and .  Find a function for which and .       No such function exists.   "
},
{
  "id": "sec_the_gradient",
  "level": "1",
  "url": "sec_the_gradient.html",
  "type": "Section",
  "number": "5.2",
  "title": "The Gradient",
  "body": " The Gradient     What is the gradient of a function and what does it tell us?    How is gradient related to advection?     The partial derivatives of a function tell us the rate of change of in the directions parallel to the coordinate axes. Oftentimes, however, we wish to measure the rate of change in some other direction (such as in the direction of the steepest increase of the function, for example). The gradient vector will be our tool to accomplish this task.   The Gradient Vector  The gradient vector gradient vector of a differentiable function at a point , denoted , is defined by     Temperature Gradient near Middletown  Temperatures (in ) at locations km east and km north of Middletown are shown in .   Temperatures near Middletown (in ).   Temperatures near Middletown.     We estimate by looking at information to the left and to the right of . So, . Similarly, . The gradient at , the vector represented by the arrow in , can then be written as    Gradient Vector and Advection gives a contour plot of temperature (in ).  A contour plot of temperature used in .   Temperature Isobars and Two Dots.    Sketch and .  Is or larger?  Suppose the horizontal wind vector on this entire region is . You should also recall that advection is . Is the temperature advection at positive, negative, or zero?  Is the temperature advection at positive, negative, or zero?    The gradient vector at would be an arrow pointing generally SE that is roughly perpendicular to the contour labeled 25. The gradient vector at would be an arrow pointing generally SSW that is roughly perpendicular to the contour labeled 10.   is larger (the change in temperature is greater as evidenced by the contour lines being closer near .  Since and both point in the same direction, advection is negative at since .  Positive.    The pressure gradient force is that force which attempts to equalize pressure differences (causing high pressure to push air toward low pressure). Air would always flow from high to low pressure if the pressure gradient force was the only force acting on it. Though it is a fundamental force, other forces such as gravity and the Coriolis force also impact how air flows.   Pressure Gradient Force  The Pressure Gradient Force Pressure Gradient Force (PGF) is a vector that is perpendicular to isobars and points in the direction of the negative pressure gradient. Its magnitude is proportional to the distance between isobars (i.e. ).    The pressure gradient force is perpendicular to isobars and points towards lower pressure.   Pressure Gradient Force.     This means, if represents the pressure at location , the PGF vector at that point has  direction and  magnitude .  In short, where is a mass of a parcel of air (measured in ) and is a density of air (measured in ).  How do various forces (vectors) work together at the earth's surface? illustrates the net result of summing the forces due to the pressure gradient force, the Coriolis force, and the force due to friction. Here, collected weather data gives isotherms (the horizontal black lines) and isobars (the dashed circles). If the winds are represented by the blue vectors, then they are the sum of PGF vectors which are perpendicular to the isobars and pointing to lower pressure, Coriolis force vectors perpendicular and to the right of the wind , and friction force vectors opposite the wind.  The pressure gradient force, Coriolis force, and friction force work together to determine wind vectors. Source: http:\/\/funnel.sfsu.edu\/courses\/metr104\/S10\/handouts\/TQ_JetStrmMidlatCyclnsFronts.soln.html   How the forces work together.       Exercises  Pollutant in a Lake  Calculating a Gradient Vector  Gradients of Functions of Three Variables  Maximum Rate of Change  Maximum Rate of Change and Direction    Contours of Dewpoint Temperatures is a contour map showing dew point temperatures (in degrees Fahrenheit) at various locations of the United States. Here, represents degrees longitude east of the prime meridian and represents degrees latitude north of the equator.   Dew point temperatures used in . Source: https:\/\/www.weather.gov\/jetstream\/ll_analyze_dp   Contour Map of Dewpoint Temperatures in the United States.     Las Vegas, NV is located at approximately N latitude and E longitude. Compute . Interpret the meaning with a sentence.  Is positive, negative, or zero? Explain. What are the units of ?   Which direction best estimates that of ? Explain.                    By naming a city, give a location for which . Defend your choice of location.     . This tells us that the dew point temperature at Las Vegas, NV is roughly .  is negative. This is because as we move north from Las Vegas, NV, the dewpoint temperature decreases. The units of are degrees Fahrenheit per degree latitude.  iv. The direction in which the dewpoint increases the most rapidly is to the SW.  Answers will vary. Atlanta would be a reasonably good answer. Anything in Georgia or the panhandle of Florida are reasonable responses. So too would be cities in North Dakota (North Dakota has cities?).    Advection in Georgia Determine the temperature advection at the specified location in Georgia on the surface chart in . This is a data plot from 850mb with isotherms superimposed. The wind , as illustrated, has speed 20 knots from a mathematical angle of . The temperature gradient, has a magnitude of at a mathematical angle of . [Note: denotes nautical miles.]   Determining temperature advection somewhere in Georgia.   An 850mb map with isotherms superimposed.     We compute .   Moisture advection Moisture advection moisture advection is horizontal transport of moisture, which plays a very important role in the development of precipitation. The advection of dew point itself can be thought as moisture advection: Here is the horizontal wind vector and represents the dewpoint temperature at location . shows current dewpoint temperatures observed near St. Cloud, MN. Suppose the horizontal wind vector (with units of m\/s) is Estimate the moisture advection at St. Cloud. Be sure to include units in your response. Then, interpret the meaning of this value.   Dewpoint temperatures near St. Cloud, MN. St. Stephen is 23 km north of St. Cloud. Clearwater is 20 km south of St. Cloud. St. Joseph is 13 km west of St. Cloud. Duelm is 21 km east of St. Cloud.   Dewpoint temperatures near St. Cloud, MN.      Here, So, This is the rate at which we would expect the dewpoint temperature at St. Cloud to change due to moisture advection.    "
},
{
  "id": "sec_the_gradient-2",
  "level": "2",
  "url": "sec_the_gradient.html#sec_the_gradient-2",
  "type": "Motivating Questions",
  "number": "5.2",
  "title": "",
  "body": "   What is the gradient of a function and what does it tell us?    How is gradient related to advection?    "
},
{
  "id": "gradientdefn",
  "level": "2",
  "url": "sec_the_gradient.html#gradientdefn",
  "type": "Definition",
  "number": "5.2.1",
  "title": "The Gradient Vector.",
  "body": " The Gradient Vector  The gradient vector gradient vector of a differentiable function at a point , denoted , is defined by   "
},
{
  "id": "middletowngradient",
  "level": "2",
  "url": "sec_the_gradient.html#middletowngradient",
  "type": "Example",
  "number": "5.2.2",
  "title": "Temperature Gradient near Middletown.",
  "body": " Temperature Gradient near Middletown  Temperatures (in ) at locations km east and km north of Middletown are shown in .   Temperatures near Middletown (in ).   Temperatures near Middletown.     We estimate by looking at information to the left and to the right of . So, . Similarly, . The gradient at , the vector represented by the arrow in , can then be written as   "
},
{
  "id": "firstcontouradvect",
  "level": "2",
  "url": "sec_the_gradient.html#firstcontouradvect",
  "type": "Checkpoint",
  "number": "5.2.4",
  "title": "Gradient Vector and Advection.",
  "body": "Gradient Vector and Advection gives a contour plot of temperature (in ).  A contour plot of temperature used in .   Temperature Isobars and Two Dots.    Sketch and .  Is or larger?  Suppose the horizontal wind vector on this entire region is . You should also recall that advection is . Is the temperature advection at positive, negative, or zero?  Is the temperature advection at positive, negative, or zero?    The gradient vector at would be an arrow pointing generally SE that is roughly perpendicular to the contour labeled 25. The gradient vector at would be an arrow pointing generally SSW that is roughly perpendicular to the contour labeled 10.   is larger (the change in temperature is greater as evidenced by the contour lines being closer near .  Since and both point in the same direction, advection is negative at since .  Positive.   "
},
{
  "id": "subsec_PGF",
  "level": "2",
  "url": "sec_the_gradient.html#subsec_PGF",
  "type": "Definition",
  "number": "5.2.6",
  "title": "Pressure Gradient Force.",
  "body": " Pressure Gradient Force  The Pressure Gradient Force Pressure Gradient Force (PGF) is a vector that is perpendicular to isobars and points in the direction of the negative pressure gradient. Its magnitude is proportional to the distance between isobars (i.e. ).  "
},
{
  "id": "pressuregradforcedefn",
  "level": "2",
  "url": "sec_the_gradient.html#pressuregradforcedefn",
  "type": "Figure",
  "number": "5.2.7",
  "title": "",
  "body": " The pressure gradient force is perpendicular to isobars and points towards lower pressure.   Pressure Gradient Force.    "
},
{
  "id": "ExplainingForcesTogether",
  "level": "2",
  "url": "sec_the_gradient.html#ExplainingForcesTogether",
  "type": "Figure",
  "number": "5.2.8",
  "title": "",
  "body": " The pressure gradient force, Coriolis force, and friction force work together to determine wind vectors. Source: http:\/\/funnel.sfsu.edu\/courses\/metr104\/S10\/handouts\/TQ_JetStrmMidlatCyclnsFronts.soln.html   How the forces work together.   "
},
{
  "id": "GradientPollutantLake",
  "level": "2",
  "url": "sec_the_gradient.html#GradientPollutantLake",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "Pollutant in a Lake.",
  "body": "Pollutant in a Lake "
},
{
  "id": "ez-Gradient-1",
  "level": "2",
  "url": "sec_the_gradient.html#ez-Gradient-1",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "Calculating a Gradient Vector.",
  "body": "Calculating a Gradient Vector "
},
{
  "id": "ez-Gradient-4",
  "level": "2",
  "url": "sec_the_gradient.html#ez-Gradient-4",
  "type": "Exercise",
  "number": "5.2.3",
  "title": "Gradients of Functions of Three Variables.",
  "body": "Gradients of Functions of Three Variables "
},
{
  "id": "ez-Gradient-max-rate",
  "level": "2",
  "url": "sec_the_gradient.html#ez-Gradient-max-rate",
  "type": "Exercise",
  "number": "5.2.4",
  "title": "Maximum Rate of Change.",
  "body": "Maximum Rate of Change "
},
{
  "id": "ez-Gradient-maxplusdirection",
  "level": "2",
  "url": "sec_the_gradient.html#ez-Gradient-maxplusdirection",
  "type": "Exercise",
  "number": "5.2.5",
  "title": "Maximum Rate of Change and Direction.",
  "body": "Maximum Rate of Change and Direction "
},
{
  "id": "dewpointcontours",
  "level": "2",
  "url": "sec_the_gradient.html#dewpointcontours",
  "type": "Exercise",
  "number": "5.2.6",
  "title": "Contours of Dewpoint Temperatures.",
  "body": "Contours of Dewpoint Temperatures is a contour map showing dew point temperatures (in degrees Fahrenheit) at various locations of the United States. Here, represents degrees longitude east of the prime meridian and represents degrees latitude north of the equator.   Dew point temperatures used in . Source: https:\/\/www.weather.gov\/jetstream\/ll_analyze_dp   Contour Map of Dewpoint Temperatures in the United States.     Las Vegas, NV is located at approximately N latitude and E longitude. Compute . Interpret the meaning with a sentence.  Is positive, negative, or zero? Explain. What are the units of ?   Which direction best estimates that of ? Explain.                    By naming a city, give a location for which . Defend your choice of location.     . This tells us that the dew point temperature at Las Vegas, NV is roughly .  is negative. This is because as we move north from Las Vegas, NV, the dewpoint temperature decreases. The units of are degrees Fahrenheit per degree latitude.  iv. The direction in which the dewpoint increases the most rapidly is to the SW.  Answers will vary. Atlanta would be a reasonably good answer. Anything in Georgia or the panhandle of Florida are reasonable responses. So too would be cities in North Dakota (North Dakota has cities?).   "
},
{
  "id": "AdvectionInGA",
  "level": "2",
  "url": "sec_the_gradient.html#AdvectionInGA",
  "type": "Exercise",
  "number": "5.2.7",
  "title": "Advection in Georgia.",
  "body": "Advection in Georgia Determine the temperature advection at the specified location in Georgia on the surface chart in . This is a data plot from 850mb with isotherms superimposed. The wind , as illustrated, has speed 20 knots from a mathematical angle of . The temperature gradient, has a magnitude of at a mathematical angle of . [Note: denotes nautical miles.]   Determining temperature advection somewhere in Georgia.   An 850mb map with isotherms superimposed.     We compute .  "
},
{
  "id": "dewpointadvection",
  "level": "2",
  "url": "sec_the_gradient.html#dewpointadvection",
  "type": "Exercise",
  "number": "5.2.8",
  "title": "Moisture advection.",
  "body": "Moisture advection Moisture advection moisture advection is horizontal transport of moisture, which plays a very important role in the development of precipitation. The advection of dew point itself can be thought as moisture advection: Here is the horizontal wind vector and represents the dewpoint temperature at location . shows current dewpoint temperatures observed near St. Cloud, MN. Suppose the horizontal wind vector (with units of m\/s) is Estimate the moisture advection at St. Cloud. Be sure to include units in your response. Then, interpret the meaning of this value.   Dewpoint temperatures near St. Cloud, MN. St. Stephen is 23 km north of St. Cloud. Clearwater is 20 km south of St. Cloud. St. Joseph is 13 km west of St. Cloud. Duelm is 21 km east of St. Cloud.   Dewpoint temperatures near St. Cloud, MN.      Here, So, This is the rate at which we would expect the dewpoint temperature at St. Cloud to change due to moisture advection.  "
},
{
  "id": "sec_chain_rule",
  "level": "1",
  "url": "sec_chain_rule.html",
  "type": "Section",
  "number": "5.3",
  "title": "The Chain Rule",
  "body": " The Chain Rule     What is the multivariate chain rule and how do we use it to find a derivative?    How can we use a tree diagram to guide us in implementing the chain rule?     In one-variable calculus, describes the chain rule. Due to variation in notation you may not recognize it, but the main idea is the multiplication of rates in the context of function composition.   A simple race  If Sally runs twice as fast as Patty and Patty runs five times as fast as Joey, then Sally runs ten times faster than Joey. Mathematically, if = Sally's position, = Patty's position, and = Joey's position, then   The change in position of Sally, Patty, and Joey over one unit of time.   A diagram illustrating three different lengths representing the change in position of Sally, Patty, and Joey.     Another way to write this would be using derivatives:    In a multivariable setting, we first multiply related rates. Then, we must add the contributions from the unrelated variables. One useful way to understand how this works is to think about a function as a map from one space to another rather than as a graph (see ). The derivative is no longer the slope ; it is now the amount by which the function locally gets squashed\/stretched. This squash\/stretch factor is .   Think of a function as a mapping. Input values either get stretched or squashed in producing output . Here is illustrated in two ways.   Thinking of a function as a mapping.     In this context, the chain rule then says to get the total amount of stretching (or squashing), just multiply the stretch factors. shows how since .   .   A composite mapping.      The Chain Rule for , ,  Suppose that , , . We see how from the diagram in .   Diagram for .   Diagram of the chain rule.     When thinking about the chain rule, it is sometimes helpful to think of the food chain. In this case, think of as representing the population of large fish that feeds on two types of medium fish having populations and respectively. The populations of these medium fish depends on the population of small fish . In this way, it is easy to see how variation in the population of small fish impacts the populations and of medium fish which, in turn, impacts the population of large fish. The chain rule is the means by which we measure the rate at which the population of large fish changes with respect to a change in the population of small fish. Note how the resulting rate of change in this case, , is an ordinary derivative and not a partial derivative. Indeed the population of large fish ultimately only depends on a single variable , the population of small fish.    A Warming Path  Suppose the temperature (in ) is given by the function whose contours are shown in ( are in kilometers). If you consider how your location corresponds to points in the -plane, you know that when you pass the point , your velocity vector is (km\/hr). We estimate the rate of change of your temperature, , when passing through .   Contours for the temperature of . Source: activecalculus.org    First, note that the dependence diagram from with replacing variable applies here.   Diagram for .   Diagram of the chain rule.     We have Next, note that when and , the velocity vector tells us that and . Using the contours, we can estimate and to obtain This tells us that as we move in the direction of velocity vector at , the temperature will rise (which is clear from the contour map). But it also tells us how quickly the temperature will rise. Moreover, you can see the contributions to this rate of change that come from our movement in the horizontal direction (1.33 ) and our movement in the vertical direction (2.66 ). We warm as we move west, but we warm even faster, roughly twice as fast, as we move north.   A Dropping Wind Chill The wind chill index wind chill index is modeled by the function where is the temperature in degrees Celsius and is the wind speed (in km\/hr). The temperature and the wind speed are also, of course, functions of time . Suppose that at 11:00 a.m., we have and km\/hr. Further, suppose that is decreasing by and is increasing by 2 km\/hr. That is, and . At what rate is the apparent temperature (i.e. the wind chill ) changing at 11:00 a.m.?  By the chain rule, note that Since and we have and So at 11:00 a.m. (when and km\/hr) we have This means that the wind chill (or feels like temperature) is dropping at a rate of 5.12 degrees Celsius per hour at 11:00 a.m.. Most of the contribution to this drop is coming from the rapid drop in ambient temperature .     Exercises  Implementing the Chain Rule  Piece the Values Together  Chain Rule and Dot Products  Chain Rule using a Table  Rate of Change for Ideal Gas   The Bison and the Cold Front   A bison is charging across the plain one morning. His path takes him to location at time , where and are functions of , and north is in the direction of increasing . The temperature is always colder farther north. As time passes, the sun rises in the sky, sending out more heat, and a cold front blows in from the east. At time the air temperature near the bison is given by . The chain rule expresses the derivative as a sum of three terms:   Identify the term that gives the contribution to the change in temperature experienced by the bison that is due to:     The bison's change in latitude  The coming cold front  The rising sun                     Corn Production   Corn production, , is a function of rainfall, (in inches), and temperature, (in degrees C). The first figure below shows how rainfall is predicted to vary with time because of global warming; the second, how temperature is predicted to vary with time because of global warming.   Graph of rainfall, vs. time,   Graph of temperature, vs. time,  Suppose that we know that (currently)  Use this to estimate the change in corn production between the year 2020 and the year 2021.  Change =  Hence, estimate when .               inches and C, a change, , in rainfall and a change, , in temperature produces a change, , in corn production given by Now both and are functions of time (in years), and we want to find the effect of a small change in time, , on and . The first figure shows that the slope of the graph for versus is about in\/year when . Similarly, the second shows the slope of the graph of versus is about C\/year when . Thus, around the year 2020, Substituting these into the equation for , we get Thus in one year corn production will decline by about 0.62 in. When  so       Changing Air Pressure on the Ship   Air pressure decreases at a rate of 2.5 pascals per kilometer in the eastward direction. In addition, the air pressure is increasing at a constant rate with respect to time everywhere. A ship sailing eastward at 14 km\/hour past an island takes barometer readings and records a pressure drop of 60 pascals in 2 hours. Estimate the time rate of change of air pressure on the island. (A pascal is a unit of air pressure.)  Time rate of change of air pressure =  (include units )        be the air pressure in pascals at km east of the island at time hours after the ship passes the island. We want to compute . Let be the air pressure on the ship at time , so that . By the chain rule we have Since , and , and , solving for , we have       A Changing Heat Index Both relative humidity and temperature are functions of location. That is, and . Using the chain rule, complete the dependence diagram in and write out the formula for , the rate at which the heat index changes due to a small movement to the east. Hint: Your answer will involve other partial derivatives.   Beginning of dependence diagram for .         The Transport Equation The transport equation transport equation models the concentration of a substance flowing in a fluid at a constant rate. In one dimension, one example of a transport equation is given by where represents time, represents displacement from a fixed point, and is a function of two variables representing the concentration of the substances at location and time .   Suppose . Compute and . Then verify that satisfies the above transport equation.  Repeat (a) using .     and so that .  and so that .    Advection and the Chain Rule  Suppose that is a differentiable function of , and , where , and are all differentiable functions of . Draw a dependence diagram and write out the corresponding formula(s) for the Chain Rule. If , show that can be written as . Recall: is called advection advection .    Diagram for .      By the chain rule, . But which is exactly found earlier.   Pressuring a Drone Atmospheric pressure is a function of location in space and of time . That is, . A drone is located at various locations at time . That is, , , and are all functions of time for the drone. Give an expression involving partial derivatives for the instantaneous rate of change of pressure on this drone.  By the chain rule,     "
},
{
  "id": "sec_chain_rule-2",
  "level": "2",
  "url": "sec_chain_rule.html#sec_chain_rule-2",
  "type": "Motivating Questions",
  "number": "5.3",
  "title": "",
  "body": "   What is the multivariate chain rule and how do we use it to find a derivative?    How can we use a tree diagram to guide us in implementing the chain rule?    "
},
{
  "id": "simplerace",
  "level": "2",
  "url": "sec_chain_rule.html#simplerace",
  "type": "Example",
  "number": "5.3.1",
  "title": "A simple race.",
  "body": " A simple race  If Sally runs twice as fast as Patty and Patty runs five times as fast as Joey, then Sally runs ten times faster than Joey. Mathematically, if = Sally's position, = Patty's position, and = Joey's position, then   The change in position of Sally, Patty, and Joey over one unit of time.   A diagram illustrating three different lengths representing the change in position of Sally, Patty, and Joey.     Another way to write this would be using derivatives:   "
},
{
  "id": "ChainRuleExplain1",
  "level": "2",
  "url": "sec_chain_rule.html#ChainRuleExplain1",
  "type": "Figure",
  "number": "5.3.3",
  "title": "",
  "body": " Think of a function as a mapping. Input values either get stretched or squashed in producing output . Here is illustrated in two ways.   Thinking of a function as a mapping.    "
},
{
  "id": "ChainRuleExplain2",
  "level": "2",
  "url": "sec_chain_rule.html#ChainRuleExplain2",
  "type": "Figure",
  "number": "5.3.4",
  "title": "",
  "body": " .   A composite mapping.    "
},
{
  "id": "ChainRule1",
  "level": "2",
  "url": "sec_chain_rule.html#ChainRule1",
  "type": "Example",
  "number": "5.3.5",
  "title": "The Chain Rule for <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(P = f(x,y)\\text{,}\\)<\/span> <span class=\"process-math\">\\(x=g(t)\\text{,}\\)<\/span> <span class=\"process-math\">\\(y=h(t)\\)<\/span>.",
  "body": " The Chain Rule for , ,  Suppose that , , . We see how from the diagram in .   Diagram for .   Diagram of the chain rule.     When thinking about the chain rule, it is sometimes helpful to think of the food chain. In this case, think of as representing the population of large fish that feeds on two types of medium fish having populations and respectively. The populations of these medium fish depends on the population of small fish . In this way, it is easy to see how variation in the population of small fish impacts the populations and of medium fish which, in turn, impacts the population of large fish. The chain rule is the means by which we measure the rate at which the population of large fish changes with respect to a change in the population of small fish. Note how the resulting rate of change in this case, , is an ordinary derivative and not a partial derivative. Indeed the population of large fish ultimately only depends on a single variable , the population of small fish.  "
},
{
  "id": "ChainRuleContours",
  "level": "2",
  "url": "sec_chain_rule.html#ChainRuleContours",
  "type": "Example",
  "number": "5.3.7",
  "title": "A Warming Path.",
  "body": " A Warming Path  Suppose the temperature (in ) is given by the function whose contours are shown in ( are in kilometers). If you consider how your location corresponds to points in the -plane, you know that when you pass the point , your velocity vector is (km\/hr). We estimate the rate of change of your temperature, , when passing through .   Contours for the temperature of . Source: activecalculus.org    First, note that the dependence diagram from with replacing variable applies here.   Diagram for .   Diagram of the chain rule.     We have Next, note that when and , the velocity vector tells us that and . Using the contours, we can estimate and to obtain This tells us that as we move in the direction of velocity vector at , the temperature will rise (which is clear from the contour map). But it also tells us how quickly the temperature will rise. Moreover, you can see the contributions to this rate of change that come from our movement in the horizontal direction (1.33 ) and our movement in the vertical direction (2.66 ). We warm as we move west, but we warm even faster, roughly twice as fast, as we move north.  "
},
{
  "id": "WindChillChange",
  "level": "2",
  "url": "sec_chain_rule.html#WindChillChange",
  "type": "Checkpoint",
  "number": "5.3.10",
  "title": "A Dropping Wind Chill.",
  "body": "A Dropping Wind Chill The wind chill index wind chill index is modeled by the function where is the temperature in degrees Celsius and is the wind speed (in km\/hr). The temperature and the wind speed are also, of course, functions of time . Suppose that at 11:00 a.m., we have and km\/hr. Further, suppose that is decreasing by and is increasing by 2 km\/hr. That is, and . At what rate is the apparent temperature (i.e. the wind chill ) changing at 11:00 a.m.?  By the chain rule, note that Since and we have and So at 11:00 a.m. (when and km\/hr) we have This means that the wind chill (or feels like temperature) is dropping at a rate of 5.12 degrees Celsius per hour at 11:00 a.m.. Most of the contribution to this drop is coming from the rapid drop in ambient temperature .  "
},
{
  "id": "ez-ChainRule-1",
  "level": "2",
  "url": "sec_chain_rule.html#ez-ChainRule-1",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "Implementing the Chain Rule.",
  "body": "Implementing the Chain Rule "
},
{
  "id": "ez-ChainRule-2",
  "level": "2",
  "url": "sec_chain_rule.html#ez-ChainRule-2",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "Piece the Values Together.",
  "body": "Piece the Values Together "
},
{
  "id": "ez-ChainDotProduct",
  "level": "2",
  "url": "sec_chain_rule.html#ez-ChainDotProduct",
  "type": "Exercise",
  "number": "5.3.3",
  "title": "Chain Rule and Dot Products.",
  "body": "Chain Rule and Dot Products "
},
{
  "id": "ez-ChainRuleTable",
  "level": "2",
  "url": "sec_chain_rule.html#ez-ChainRuleTable",
  "type": "Exercise",
  "number": "5.3.4",
  "title": "Chain Rule using a Table.",
  "body": "Chain Rule using a Table "
},
{
  "id": "IdealGasLawChainRule",
  "level": "2",
  "url": "sec_chain_rule.html#IdealGasLawChainRule",
  "type": "Exercise",
  "number": "5.3.5",
  "title": "Rate of Change for Ideal Gas.",
  "body": "Rate of Change for Ideal Gas "
},
{
  "id": "ez-ChainRule-4",
  "level": "2",
  "url": "sec_chain_rule.html#ez-ChainRule-4",
  "type": "Exercise",
  "number": "5.3.6",
  "title": "The Bison and the Cold Front.",
  "body": "The Bison and the Cold Front   A bison is charging across the plain one morning. His path takes him to location at time , where and are functions of , and north is in the direction of increasing . The temperature is always colder farther north. As time passes, the sun rises in the sky, sending out more heat, and a cold front blows in from the east. At time the air temperature near the bison is given by . The chain rule expresses the derivative as a sum of three terms:   Identify the term that gives the contribution to the change in temperature experienced by the bison that is due to:     The bison's change in latitude  The coming cold front  The rising sun                    "
},
{
  "id": "ez-ChainRule-5",
  "level": "2",
  "url": "sec_chain_rule.html#ez-ChainRule-5",
  "type": "Exercise",
  "number": "5.3.7",
  "title": "Corn Production.",
  "body": "Corn Production   Corn production, , is a function of rainfall, (in inches), and temperature, (in degrees C). The first figure below shows how rainfall is predicted to vary with time because of global warming; the second, how temperature is predicted to vary with time because of global warming.   Graph of rainfall, vs. time,   Graph of temperature, vs. time,  Suppose that we know that (currently)  Use this to estimate the change in corn production between the year 2020 and the year 2021.  Change =  Hence, estimate when .               inches and C, a change, , in rainfall and a change, , in temperature produces a change, , in corn production given by Now both and are functions of time (in years), and we want to find the effect of a small change in time, , on and . The first figure shows that the slope of the graph for versus is about in\/year when . Similarly, the second shows the slope of the graph of versus is about C\/year when . Thus, around the year 2020, Substituting these into the equation for , we get Thus in one year corn production will decline by about 0.62 in. When  so      "
},
{
  "id": "ez-ChainRule-6",
  "level": "2",
  "url": "sec_chain_rule.html#ez-ChainRule-6",
  "type": "Exercise",
  "number": "5.3.8",
  "title": "Changing Air Pressure on the Ship.",
  "body": "Changing Air Pressure on the Ship   Air pressure decreases at a rate of 2.5 pascals per kilometer in the eastward direction. In addition, the air pressure is increasing at a constant rate with respect to time everywhere. A ship sailing eastward at 14 km\/hour past an island takes barometer readings and records a pressure drop of 60 pascals in 2 hours. Estimate the time rate of change of air pressure on the island. (A pascal is a unit of air pressure.)  Time rate of change of air pressure =  (include units )        be the air pressure in pascals at km east of the island at time hours after the ship passes the island. We want to compute . Let be the air pressure on the ship at time , so that . By the chain rule we have Since , and , and , solving for , we have      "
},
{
  "id": "HeatIndexChain",
  "level": "2",
  "url": "sec_chain_rule.html#HeatIndexChain",
  "type": "Exercise",
  "number": "5.3.9",
  "title": "A Changing Heat Index.",
  "body": "A Changing Heat Index Both relative humidity and temperature are functions of location. That is, and . Using the chain rule, complete the dependence diagram in and write out the formula for , the rate at which the heat index changes due to a small movement to the east. Hint: Your answer will involve other partial derivatives.   Beginning of dependence diagram for .        "
},
{
  "id": "transportequation",
  "level": "2",
  "url": "sec_chain_rule.html#transportequation",
  "type": "Exercise",
  "number": "5.3.10",
  "title": "The Transport Equation.",
  "body": "The Transport Equation The transport equation transport equation models the concentration of a substance flowing in a fluid at a constant rate. In one dimension, one example of a transport equation is given by where represents time, represents displacement from a fixed point, and is a function of two variables representing the concentration of the substances at location and time .   Suppose . Compute and . Then verify that satisfies the above transport equation.  Repeat (a) using .     and so that .  and so that .   "
},
{
  "id": "advectchain",
  "level": "2",
  "url": "sec_chain_rule.html#advectchain",
  "type": "Exercise",
  "number": "5.3.11",
  "title": "Advection and the Chain Rule.",
  "body": "Advection and the Chain Rule  Suppose that is a differentiable function of , and , where , and are all differentiable functions of . Draw a dependence diagram and write out the corresponding formula(s) for the Chain Rule. If , show that can be written as . Recall: is called advection advection .    Diagram for .      By the chain rule, . But which is exactly found earlier.  "
},
{
  "id": "drone",
  "level": "2",
  "url": "sec_chain_rule.html#drone",
  "type": "Exercise",
  "number": "5.3.12",
  "title": "Pressuring a Drone.",
  "body": "Pressuring a Drone Atmospheric pressure is a function of location in space and of time . That is, . A drone is located at various locations at time . That is, , , and are all functions of time for the drone. Give an expression involving partial derivatives for the instantaneous rate of change of pressure on this drone.  By the chain rule,   "
},
{
  "id": "sec_vector_fields",
  "level": "1",
  "url": "sec_vector_fields.html",
  "type": "Section",
  "number": "6.1",
  "title": "Vector Fields",
  "body": " Vector Fields     What is a vector field? How do we mathematically represent vector fields?    How do vector fields model flow?     Representing fluid flow is a necessity in atmospheric kinematics. Vector fields are an effective tool for such modeling. So what is a vector field? Essentially, it is a function whose input is a location in space and whose output is a vector (think arrow) representing flow at that particular location.   A vector field representing surface winds near the coast of Europe. Source: Retrieved from https:\/\/www.snow-forecast.com\/maps\/static\/europe\/6\/wind on November 24, 2024.   Surface Winds in Europe.     Vector Fields  A vector field vector field in 2-space is a function whose value at a point is a two-dimensional vector. Similarly, a vector field in 3-space is a function whose values are 3-dimensional vectors.    The vector field illustrated in could serve as a very crude model of winds in a (southern hemisphere) typhoon. This vector field is a geometric representation of the vector field algebraically described by    Geometric representation of the vector field .   Typhoon.      Sketching a Vector Field On the grids in , sketch a portion of the following two vector fields: and . After your hand sketch of a few vectors, use technology such as wolframalpha.com to generate sketches of each. For example, the request plot vector field < -y,x > would produce one such plot.   Grids for .   Empty grids for plotting vector fields.      Vector field plot of .   Answer to first vector field plot exercise.     Vector field plot of .   Answer to second vector field plot exercise.      Identifying Vector Fields  Taking air as the fluid flowing, wind barbs can be used to represent a vector field.  Wind barbs can describe a vector field. Source: National Weather Service (Public Domain)      Wind barbs over some of the Great Lakes.      Numerically Representing Vector Fields  A vector field can be described numerically as a table of coordinates.   Vector field in .    Input    Output                                                     For the 2D vector field given in , a geometric representation appears in . Here, the vector (think of this as a location) is input and the vector (the red arrow) is output.]   A geometric view of the vector field found in .   The geometric representation of a vector field given in a table.      Vector fields naturally arise from scalar functions of several variables via the gradient. For example, the atmospheric pressure at location has a natural gradient - for each location , we associate a gradient vector (arrow) that points in the direction of steepest increase of pressure .   Gradient Vector Fields  The gradient of a scalar function is a function that assigns a vector to each point, and is therefore a vector field. It is called the gradient vector field gradient vector field of . In two dimensions, we denote the gradient vector field of at by    Pressure Gradients  Using isobars for atmospheric pressure at location , one can see direction of the pressure gradient at several points in . The gradient is the vector that points in the direction of steepest increase. Its magnitude is the rate of increase in that direction.   The pressure gradient consists of vectors that always point in the direction of steepest increase of atmospheric pressure . Source: DeCaria, ESCI 241, Millersville University.   Pressure Gradient.    The magnitude of the gradient at a point is estimated by dividing the contour interval by the shortest distance between contours across that point. shows a gradient vector having magnitude    The magnitude of the pressure gradient is determined by the difference of coutour values divided by distance between them. Source: DeCaria, ESCI 241, Millersville University.   Pressure Gradient Magnitude.     Matching a Gradient Field to a Contour Plot Match the gradient field of a function (Graph A, Graph B, Graph C) to the contour plot of the function.     Matching Problem - Gradients and Contours.        Matching Problem Answer - Gradients and Contours.      Gradient Vector Field near Middletown  Temperatures (in ) at locations km east and km north of Middletown were given in as part of . These temperatures give rise to a vector field which we represent in .   Vector field representing the temperature gradient near Middletown.    Location    Gradient                                                                                Exercises   The Winds of March  Hurricane Ian  Identify the Vector Field  Graph the Vector Field  Formula for a Gradient Vector Field  Goofy Temperature Contours  Visualizing Middletown's Temperature Vector Field The temperature gradient vector field near Middletown is given in . Using this table, sketch a geometric representation of the temperature gradient.   A geometric representation of the Middletown temperature gradient vector field using .   The geometric representation of Middletown's temperature vector field from a given table.       "
},
{
  "id": "sec_vector_fields-2",
  "level": "2",
  "url": "sec_vector_fields.html#sec_vector_fields-2",
  "type": "Motivating Questions",
  "number": "6.1",
  "title": "",
  "body": "   What is a vector field? How do we mathematically represent vector fields?    How do vector fields model flow?    "
},
{
  "id": "SurfaceWindEurope",
  "level": "2",
  "url": "sec_vector_fields.html#SurfaceWindEurope",
  "type": "Figure",
  "number": "6.1.1",
  "title": "",
  "body": " A vector field representing surface winds near the coast of Europe. Source: Retrieved from https:\/\/www.snow-forecast.com\/maps\/static\/europe\/6\/wind on November 24, 2024.   Surface Winds in Europe.   "
},
{
  "id": "sec_vector_fields-5",
  "level": "2",
  "url": "sec_vector_fields.html#sec_vector_fields-5",
  "type": "Definition",
  "number": "6.1.2",
  "title": "Vector Fields.",
  "body": " Vector Fields  A vector field vector field in 2-space is a function whose value at a point is a two-dimensional vector. Similarly, a vector field in 3-space is a function whose values are 3-dimensional vectors.  "
},
{
  "id": "typhoonsouth",
  "level": "2",
  "url": "sec_vector_fields.html#typhoonsouth",
  "type": "Example",
  "number": "6.1.3",
  "title": "",
  "body": " The vector field illustrated in could serve as a very crude model of winds in a (southern hemisphere) typhoon. This vector field is a geometric representation of the vector field algebraically described by    Geometric representation of the vector field .   Typhoon.    "
},
{
  "id": "VectorField1Exercise",
  "level": "2",
  "url": "sec_vector_fields.html#VectorField1Exercise",
  "type": "Checkpoint",
  "number": "6.1.5",
  "title": "Sketching a Vector Field.",
  "body": "Sketching a Vector Field On the grids in , sketch a portion of the following two vector fields: and . After your hand sketch of a few vectors, use technology such as wolframalpha.com to generate sketches of each. For example, the request plot vector field < -y,x > would produce one such plot.   Grids for .   Empty grids for plotting vector fields.      Vector field plot of .   Answer to first vector field plot exercise.     Vector field plot of .   Answer to second vector field plot exercise.    "
},
{
  "id": "IdentifyUnitVectorField",
  "level": "2",
  "url": "sec_vector_fields.html#IdentifyUnitVectorField",
  "type": "Checkpoint",
  "number": "6.1.9",
  "title": "Identifying Vector Fields.",
  "body": "Identifying Vector Fields "
},
{
  "id": "windbarbvectorfield",
  "level": "2",
  "url": "sec_vector_fields.html#windbarbvectorfield",
  "type": "Figure",
  "number": "6.1.10",
  "title": "",
  "body": " Wind barbs can describe a vector field. Source: National Weather Service (Public Domain)      Wind barbs over some of the Great Lakes.   "
},
{
  "id": "FirstVFtable",
  "level": "2",
  "url": "sec_vector_fields.html#FirstVFtable",
  "type": "Example",
  "number": "6.1.11",
  "title": "Numerically Representing Vector Fields.",
  "body": " Numerically Representing Vector Fields  A vector field can be described numerically as a table of coordinates.   Vector field in .    Input    Output                                                     For the 2D vector field given in , a geometric representation appears in . Here, the vector (think of this as a location) is input and the vector (the red arrow) is output.]   A geometric view of the vector field found in .   The geometric representation of a vector field given in a table.     "
},
{
  "id": "sec_vector_fields-14",
  "level": "2",
  "url": "sec_vector_fields.html#sec_vector_fields-14",
  "type": "Definition",
  "number": "6.1.14",
  "title": "Gradient Vector Fields.",
  "body": " Gradient Vector Fields  The gradient of a scalar function is a function that assigns a vector to each point, and is therefore a vector field. It is called the gradient vector field gradient vector field of . In two dimensions, we denote the gradient vector field of at by  "
},
{
  "id": "pressuregradient",
  "level": "2",
  "url": "sec_vector_fields.html#pressuregradient",
  "type": "Example",
  "number": "6.1.15",
  "title": "Pressure Gradients.",
  "body": " Pressure Gradients  Using isobars for atmospheric pressure at location , one can see direction of the pressure gradient at several points in . The gradient is the vector that points in the direction of steepest increase. Its magnitude is the rate of increase in that direction.   The pressure gradient consists of vectors that always point in the direction of steepest increase of atmospheric pressure . Source: DeCaria, ESCI 241, Millersville University.   Pressure Gradient.    The magnitude of the gradient at a point is estimated by dividing the contour interval by the shortest distance between contours across that point. shows a gradient vector having magnitude    The magnitude of the pressure gradient is determined by the difference of coutour values divided by distance between them. Source: DeCaria, ESCI 241, Millersville University.   Pressure Gradient Magnitude.    "
},
{
  "id": "matchgradientfield",
  "level": "2",
  "url": "sec_vector_fields.html#matchgradientfield",
  "type": "Checkpoint",
  "number": "6.1.18",
  "title": "Matching a Gradient Field to a Contour Plot.",
  "body": "Matching a Gradient Field to a Contour Plot Match the gradient field of a function (Graph A, Graph B, Graph C) to the contour plot of the function.     Matching Problem - Gradients and Contours.        Matching Problem Answer - Gradients and Contours.    "
},
{
  "id": "middletowngradientVF",
  "level": "2",
  "url": "sec_vector_fields.html#middletowngradientVF",
  "type": "Example",
  "number": "6.1.21",
  "title": "Gradient Vector Field near Middletown.",
  "body": " Gradient Vector Field near Middletown  Temperatures (in ) at locations km east and km north of Middletown were given in as part of . These temperatures give rise to a vector field which we represent in .   Vector field representing the temperature gradient near Middletown.    Location    Gradient                                                                             "
},
{
  "id": "ez_winds_of_march",
  "level": "2",
  "url": "sec_vector_fields.html#ez_winds_of_march",
  "type": "Exercise",
  "number": "6.1.1",
  "title": "The Winds of March.",
  "body": "The Winds of March "
},
{
  "id": "ez_hurricane_ian",
  "level": "2",
  "url": "sec_vector_fields.html#ez_hurricane_ian",
  "type": "Exercise",
  "number": "6.1.2",
  "title": "Hurricane Ian.",
  "body": "Hurricane Ian "
},
{
  "id": "ex_sec_vectorfields-4",
  "level": "2",
  "url": "sec_vector_fields.html#ex_sec_vectorfields-4",
  "type": "Exercise",
  "number": "6.1.3",
  "title": "Identify the Vector Field.",
  "body": "Identify the Vector Field "
},
{
  "id": "ez_graph_vf",
  "level": "2",
  "url": "sec_vector_fields.html#ez_graph_vf",
  "type": "Exercise",
  "number": "6.1.4",
  "title": "Graph the Vector Field.",
  "body": "Graph the Vector Field "
},
{
  "id": "ex_sec_vectorfields-6",
  "level": "2",
  "url": "sec_vector_fields.html#ex_sec_vectorfields-6",
  "type": "Exercise",
  "number": "6.1.5",
  "title": "Formula for a Gradient Vector Field.",
  "body": "Formula for a Gradient Vector Field "
},
{
  "id": "ex_sec_vectorfields-7",
  "level": "2",
  "url": "sec_vector_fields.html#ex_sec_vectorfields-7",
  "type": "Exercise",
  "number": "6.1.6",
  "title": "Goofy Temperature Contours.",
  "body": "Goofy Temperature Contours "
},
{
  "id": "plotmiddletownVF",
  "level": "2",
  "url": "sec_vector_fields.html#plotmiddletownVF",
  "type": "Exercise",
  "number": "6.1.7",
  "title": "Visualizing Middletown’s Temperature Vector Field.",
  "body": "Visualizing Middletown's Temperature Vector Field The temperature gradient vector field near Middletown is given in . Using this table, sketch a geometric representation of the temperature gradient.   A geometric representation of the Middletown temperature gradient vector field using .   The geometric representation of Middletown's temperature vector field from a given table.     "
},
{
  "id": "sec_circulation",
  "level": "1",
  "url": "sec_circulation.html",
  "type": "Section",
  "number": "6.2",
  "title": "Circulation",
  "body": " Circulation     In a vector field, what is circulation and how do we measure it?    What is the difference between circulation and vorticity in a vector field?    What is circulation density and how is it calculated?     To see where the term circulation comes from and what it measures, let represent the velocity field of a fluid and let be an oriented curve. If represents a (unit) tangent vector to at point , then measures how aligned the vector field or flow is with the oriented curve at .  Taking several points on the curve , computing the dot products , and then adding up these values will give us a number. This value (positive, negative, and size) tells us just how much goes with the flow (or goes against it).   The sum of dot products is a measure of how aligned the vector field is to the oriented curve (oriented from to , for example).   The idea of circulation.      Circulation circulation , often denoted by , will measure how much a closed oriented curve goes with the flow of a vector field . A definite integral can be used to produce the value of .  Circulation, , is a number.   will be positive if goes with the flow; negative if goes against the flow.  The magnitude of the circulation measures how much the flow is with .     The circulation for the closed, oriented curve in the vector field shown in is negative.   A vector field and oriented curve having negative circulation .   Negative Circulation.     The circulation for the closed, oriented curve in the vector field shown in is positive.   A vector field and oriented curve having positive circulation .   Positive Circulation.      Positive or Negative Circulation?  Consider again a vector field and an oriented curve as shown in . Begin by dividing into small, nearly straight pieces along which is approximately constant. Each piece can be represented by a displacement vector that joins to .   Dividing a curve into pieces in order to approximate circulation .   The idea of a line integral.     The value of at each point of this small piece of is approximately . If an object experiences a displacement along a closed curve , the circulation caused by the vector field is approximately When the oriented curve is not closed, the value we approximate still has meaning (and measures how much 'goes with the flow'). We call the limiting value in the above expression a line integral.   Line Integral  The line integral line integral of a vector field along an oriented curve is   Sign of a Line Integral    Sign of a Line Integral II  In the following example, we investigate circulation in the context of wind.   Circulation from Wind  Suppose the wind velocity vector field is easterly and decreasing at a rate of per toward the north (see ). That is, . We determine the circulation about a square that is oriented in a counterclockwise fashion.   Oriented curve and vector field used in .   An easterly wind.     Since the contour is made up of four line segments, computation of the line integral giving becomes the sum It makes sense that is negative - the wind is more against than it is with . Note also the units of the circulation are area per second.    Circulation from Wind II Determine the circulation about a rectangle where the (wind) velocity vector is easterly and decreasing linearly at a rate of per toward the north. That is, .  Oriented curve and vector field used in .   Another easterly wind.         Understanding circulation in three dimensions may be easier with the help of a paddlewheel (see ). Let be a vector field and imagine placing a tiny paddlewheel in the vector field at the point so that the handle points in the direction of the axis that you want to measure the circulation of around.  The angular velocity of the paddlewheel measures the strength of the circulation.  The circulation is positive if the rotation is counterclockwise and negative if the rotation is clockwise (as you look down the handle of the paddlewheel).     A paddle wheel. Source: https:\/\/opentextbc.ca\/calculusv3openstax\/   A paddle wheel.    Circulation - Positive, Negative, or Zero?   Circulation and vorticity are two measures of rotation of a vector field.    Circulation circulation around a closed curve , , is a number . It is a macroscopic measure of rotation in a finite region (of the fluid, such as air).   Vorticity vorticity is a vector field . It is a microscopic measure of rotation at any point (in the fluid).   Macroscopic and microscopic circulation need not be related. You can have one without the other. Imagine a leaf circling in an eddy in a river. The leaf may not be spinning. Or, the leaf may spin about its center as it floats down the river.  While circulation is helpful in understanding macroscopic rotation, the concept of circulation density is of more value in understanding microscopic rotation. We now introduce this concept in order to measure vorticity.   Circulation Density  The circulation density circulation density of a smooth vector field at around the direction of a unit vector is defined as where is a circle centered at and perpendicular to .    Circulation Density.   Circulation Density.     Think of in as the handle of a paddlewheel. The orientation of the circle is determined by the right-hand rule: If you place your right thumb in the direction of , your fingers curl in the direction of . The quantity measures the circulation per unit area around .   Direction of Greatest Circulation  A vector field is shown in . For approximately what value of does appear to be the greatest? Choosing would produce the greatest circulation because it appears that placing the paddlewheel so that the handle points straight up would result in the fastest counterclockwise rotation.   appears to be the greatest when .   Greatest Circulation.       Exercises  Sign of a Line Integral III  Wind Around a Lake  Wind around a circular lake of radius 2 km blows in a counterclockwise circular pattern around the lake with wind speed increasing linearly with distance from the center. The wind reaches a maximum speed of 10 meters per second at the edge of the lake. Calculate the circulation, , around the lake.   The path we will use is a circle with radius 2 km. At each point on , the direction of the vector field (the wind) is parallel to the direction of travel around the lake. Vectors in the wind field with tangent vectors to the curve are then always parallel. This means all dot products in any approximation to the line integral being computed will be the product of the length of the length of wind vectors and the length of tangent vectors to the curve. The line integral will then be product of 10 meters per second and . This give a circulation of square meters per second.   Wind Around Eye of Hurricane  A hurricane has a circular eye of radius 10 km. The wind blows in a counterclockwise direction around the eye. The wind speed at the edge of the eye is 50 meters per second and decreases linearly to 0 as one approaches the center of the eye. Calculate the circulation, , around a circular path with a radius of 3 km centered at the eye of the hurricane.   Hurricane Florence, seen from the International Space Station, showing a well-defined eye at the center of the storm. Source: Alexander Gerst (Public Domain)   The eye of hurricane Florence.     The path is a circle with radius 3 km. At each point on , the direction of the vector field (the wind) is parallel to the direction of travel around the eye. So to compute the circulation we can simply multiply the (constant) strength of the wind field with the length of the path around the eye. This is the product of 15 meters per second (the strength is 30% of 50 meters per second) and . This give a circulation of square meters per second.   Circulation Around Pentagonal Path  Circulation around a path due to a wind can be computed via a line integral . In this exercise, we estimate around a polygonal path that is oriented counterclockwise. To estimate, we view the calculation for a horizontal wind as a dot product where represents the wind vector on the segment of ,  represents a vector tangent to , pointing in the direction is being traversed, and having length that of the segment of , and is the angle between vectors and .      Path for .   A pentagonal path.      Wind speeds and directions along path found in .    Location  Wind Direction  Wind Speed       20 knots      15 knots      12 knots      8 knots      10 knots     Locations A* through E* on path have wind data (taken from METARs) as given in .   Fill in with values of , , and along path . Values for locations and are provided.    Values of , , and along path shown in .    Location                            knots  NM      knots  NM       Calculate, approximately, the circulation for . Be sure to include units.     The angle between the direction of the wind and the tangent to is the difference between Wind Direction given and the direction of motion.  Values of , , and along path shown in .    Location          knots  NM      knots  NM      knots  NM      knots  NM      knots  NM          Sea Breeze A sea breeze sea breeze is a coastal wind that blows from sea to land, caused by the temperature difference when the sea surface is colder than the adjacent land. Explain how the strength of the sea breeze is related to the concept of circulation.   "
},
{
  "id": "sec_circulation-2",
  "level": "2",
  "url": "sec_circulation.html#sec_circulation-2",
  "type": "Motivating Questions",
  "number": "6.2",
  "title": "",
  "body": "   In a vector field, what is circulation and how do we measure it?    What is the difference between circulation and vorticity in a vector field?    What is circulation density and how is it calculated?    "
},
{
  "id": "IdeaOfCirculation1",
  "level": "2",
  "url": "sec_circulation.html#IdeaOfCirculation1",
  "type": "Figure",
  "number": "6.2.1",
  "title": "",
  "body": " The sum of dot products is a measure of how aligned the vector field is to the oriented curve (oriented from to , for example).   The idea of circulation.    "
},
{
  "id": "sec_circulation-6",
  "level": "2",
  "url": "sec_circulation.html#sec_circulation-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Circulation "
},
{
  "id": "SignOfCirculation",
  "level": "2",
  "url": "sec_circulation.html#SignOfCirculation",
  "type": "Example",
  "number": "6.2.2",
  "title": "",
  "body": " The circulation for the closed, oriented curve in the vector field shown in is negative.   A vector field and oriented curve having negative circulation .   Negative Circulation.     The circulation for the closed, oriented curve in the vector field shown in is positive.   A vector field and oriented curve having positive circulation .   Positive Circulation.     "
},
{
  "id": "PositiveOrNegativeCirculation",
  "level": "2",
  "url": "sec_circulation.html#PositiveOrNegativeCirculation",
  "type": "Checkpoint",
  "number": "6.2.5",
  "title": "Positive or Negative Circulation?",
  "body": "Positive or Negative Circulation? "
},
{
  "id": "IdeaOfLineInt2",
  "level": "2",
  "url": "sec_circulation.html#IdeaOfLineInt2",
  "type": "Figure",
  "number": "6.2.6",
  "title": "",
  "body": " Dividing a curve into pieces in order to approximate circulation .   The idea of a line integral.    "
},
{
  "id": "sec_circulation-12",
  "level": "2",
  "url": "sec_circulation.html#sec_circulation-12",
  "type": "Definition",
  "number": "6.2.7",
  "title": "Line Integral.",
  "body": " Line Integral  The line integral line integral of a vector field along an oriented curve is  "
},
{
  "id": "PosNegZeroLineInt1",
  "level": "2",
  "url": "sec_circulation.html#PosNegZeroLineInt1",
  "type": "Example",
  "number": "6.2.8",
  "title": "Sign of a Line Integral.",
  "body": "Sign of a Line Integral  "
},
{
  "id": "PosNegZeroLineInt2",
  "level": "2",
  "url": "sec_circulation.html#PosNegZeroLineInt2",
  "type": "Checkpoint",
  "number": "6.2.9",
  "title": "Sign of a Line Integral II.",
  "body": "Sign of a Line Integral II "
},
{
  "id": "windcirculationexample",
  "level": "2",
  "url": "sec_circulation.html#windcirculationexample",
  "type": "Example",
  "number": "6.2.10",
  "title": "Circulation from Wind.",
  "body": " Circulation from Wind  Suppose the wind velocity vector field is easterly and decreasing at a rate of per toward the north (see ). That is, . We determine the circulation about a square that is oriented in a counterclockwise fashion.   Oriented curve and vector field used in .   An easterly wind.     Since the contour is made up of four line segments, computation of the line integral giving becomes the sum It makes sense that is negative - the wind is more against than it is with . Note also the units of the circulation are area per second.  "
},
{
  "id": "WindCirculationCheck",
  "level": "2",
  "url": "sec_circulation.html#WindCirculationCheck",
  "type": "Checkpoint",
  "number": "6.2.12",
  "title": "Circulation from Wind II.",
  "body": "Circulation from Wind II Determine the circulation about a rectangle where the (wind) velocity vector is easterly and decreasing linearly at a rate of per toward the north. That is, .  Oriented curve and vector field used in .   Another easterly wind.        "
},
{
  "id": "PaddleWheel",
  "level": "2",
  "url": "sec_circulation.html#PaddleWheel",
  "type": "Figure",
  "number": "6.2.14",
  "title": "",
  "body": " A paddle wheel. Source: https:\/\/opentextbc.ca\/calculusv3openstax\/   A paddle wheel.   "
},
{
  "id": "Curl1Pic",
  "level": "2",
  "url": "sec_circulation.html#Curl1Pic",
  "type": "Example",
  "number": "6.2.15",
  "title": "Circulation - Positive, Negative, or Zero?",
  "body": "Circulation - Positive, Negative, or Zero?  "
},
{
  "id": "sec_circulation-27",
  "level": "2",
  "url": "sec_circulation.html#sec_circulation-27",
  "type": "Definition",
  "number": "6.2.16",
  "title": "Circulation Density.",
  "body": " Circulation Density  The circulation density circulation density of a smooth vector field at around the direction of a unit vector is defined as where is a circle centered at and perpendicular to .  "
},
{
  "id": "paddlewheel2",
  "level": "2",
  "url": "sec_circulation.html#paddlewheel2",
  "type": "Figure",
  "number": "6.2.17",
  "title": "",
  "body": " Circulation Density.   Circulation Density.    "
},
{
  "id": "GreatestCirculation",
  "level": "2",
  "url": "sec_circulation.html#GreatestCirculation",
  "type": "Example",
  "number": "6.2.18",
  "title": "Direction of Greatest Circulation.",
  "body": " Direction of Greatest Circulation  A vector field is shown in . For approximately what value of does appear to be the greatest? Choosing would produce the greatest circulation because it appears that placing the paddlewheel so that the handle points straight up would result in the fastest counterclockwise rotation.   appears to be the greatest when .   Greatest Circulation.    "
},
{
  "id": "PosNegZeroLineInt3",
  "level": "2",
  "url": "sec_circulation.html#PosNegZeroLineInt3",
  "type": "Exercise",
  "number": "6.2.1",
  "title": "Sign of a Line Integral III.",
  "body": "Sign of a Line Integral III "
},
{
  "id": "WindAroundLake",
  "level": "2",
  "url": "sec_circulation.html#WindAroundLake",
  "type": "Exercise",
  "number": "6.2.2",
  "title": "Wind Around a Lake.",
  "body": "Wind Around a Lake  Wind around a circular lake of radius 2 km blows in a counterclockwise circular pattern around the lake with wind speed increasing linearly with distance from the center. The wind reaches a maximum speed of 10 meters per second at the edge of the lake. Calculate the circulation, , around the lake.   The path we will use is a circle with radius 2 km. At each point on , the direction of the vector field (the wind) is parallel to the direction of travel around the lake. Vectors in the wind field with tangent vectors to the curve are then always parallel. This means all dot products in any approximation to the line integral being computed will be the product of the length of the length of wind vectors and the length of tangent vectors to the curve. The line integral will then be product of 10 meters per second and . This give a circulation of square meters per second.  "
},
{
  "id": "WindAroundHurricaneEye",
  "level": "2",
  "url": "sec_circulation.html#WindAroundHurricaneEye",
  "type": "Exercise",
  "number": "6.2.3",
  "title": "Wind Around Eye of Hurricane.",
  "body": "Wind Around Eye of Hurricane  A hurricane has a circular eye of radius 10 km. The wind blows in a counterclockwise direction around the eye. The wind speed at the edge of the eye is 50 meters per second and decreases linearly to 0 as one approaches the center of the eye. Calculate the circulation, , around a circular path with a radius of 3 km centered at the eye of the hurricane.   Hurricane Florence, seen from the International Space Station, showing a well-defined eye at the center of the storm. Source: Alexander Gerst (Public Domain)   The eye of hurricane Florence.     The path is a circle with radius 3 km. At each point on , the direction of the vector field (the wind) is parallel to the direction of travel around the eye. So to compute the circulation we can simply multiply the (constant) strength of the wind field with the length of the path around the eye. This is the product of 15 meters per second (the strength is 30% of 50 meters per second) and . This give a circulation of square meters per second.  "
},
{
  "id": "CirculationPentagonPath",
  "level": "2",
  "url": "sec_circulation.html#CirculationPentagonPath",
  "type": "Exercise",
  "number": "6.2.4",
  "title": "Circulation Around Pentagonal Path.",
  "body": "Circulation Around Pentagonal Path  Circulation around a path due to a wind can be computed via a line integral . In this exercise, we estimate around a polygonal path that is oriented counterclockwise. To estimate, we view the calculation for a horizontal wind as a dot product where represents the wind vector on the segment of ,  represents a vector tangent to , pointing in the direction is being traversed, and having length that of the segment of , and is the angle between vectors and .      Path for .   A pentagonal path.      Wind speeds and directions along path found in .    Location  Wind Direction  Wind Speed       20 knots      15 knots      12 knots      8 knots      10 knots     Locations A* through E* on path have wind data (taken from METARs) as given in .   Fill in with values of , , and along path . Values for locations and are provided.    Values of , , and along path shown in .    Location                            knots  NM      knots  NM       Calculate, approximately, the circulation for . Be sure to include units.     The angle between the direction of the wind and the tangent to is the difference between Wind Direction given and the direction of motion.  Values of , , and along path shown in .    Location          knots  NM      knots  NM      knots  NM      knots  NM      knots  NM         "
},
{
  "id": "SeaBreeze",
  "level": "2",
  "url": "sec_circulation.html#SeaBreeze",
  "type": "Exercise",
  "number": "6.2.5",
  "title": "Sea Breeze.",
  "body": "Sea Breeze A sea breeze sea breeze is a coastal wind that blows from sea to land, caused by the temperature difference when the sea surface is colder than the adjacent land. Explain how the strength of the sea breeze is related to the concept of circulation. "
},
{
  "id": "sec_curl",
  "level": "1",
  "url": "sec_curl.html",
  "type": "Section",
  "number": "6.3",
  "title": "Curl",
  "body": " Curl     How can we understand the concept of curl both geometrically and algebraically?    What is meant when we say we are only concerned with the vertical component of vorticity? How do we compute that?     As with many concepts, the best way to understand the notion of curl is geometrically. We give a geometric definition first to help in understanding the concept and purpose. Later, we give an equivalent algebraic definition that will make computation a straightforward task.  Geometric Definition of Curl  The curl curl of a smooth vector field , written , is the vector field with the following properties:  The direction of is the direction of for which circulation density is the greatest.  The magnitude of is the circulation density of around that direction.    Zero or Nonzero Curl   Measuring how quickly a very tiny paddle wheel will spin within a vector field is not easy nor quantitative. Is there an algebraic way to determine ? Luckily, the answer is yes.   Algebraic (Coordinate) Definition of Curl  If , then    As we will see, we are often most interested only in the vertical component of the curl of a vector field . The algebraic definition above allows us to gauge this through the estimation of two partials: .   Connecting Curl Definitions  Consider the vector field . A cross section of that lies in the plane is given in . We investigate .   The cross section of the three-dimensional vector field .   Connecting Curl Definition.     If we place a small square centered at as shown in in the vector field , we can imagine it as a small paddle wheel (see ) that will turn based on the flow. In this case, the paddle wheel will turn counter-clockwise. In fact, it is when the handle of the paddle wheel points in the direction of that the it spins fastest in the counter-clockwise direction (i.e. when the circulation is greatest). So geometrically, we see that for some number .  Using , we can compute directly. For , we note that which aligns with what we expected using the geometric definition of curl. Note too that, rather remarkably, is the same vector at every point in this field!   A cross section of a vector field that lies in the plane is shown in .  The cross section of the three-dimensional vector field .   Practicing Curl Definition.     Only using , and not the algebraic definition, determine whether points in the or the direction. How about ?  If , compute and algebraically. Do your answers match those found in (a)?    Based on the figure, a small paddle wheel placed at would spin counter-clockwise the fastest if the handle is placed in the direction. So points in the direction. Similarly, a small paddle wheel placed at would spin counter-clockwise the fastest if the handle is placed in the direction. So points in the direction.  For , we note that so that and . This aligns with what was found in (a).  Vorticity  Vorticity in fluids is similar to angular momentum in solids. Just like curl, it is easiest to visualize vorticity by thinking of a small paddle wheel immersed in the fluid. If the fluid flow turns the paddle wheel, then it has vorticity. Vorticity is a vector, and points out of the plane in which the fluid turns. The sign of the vorticity is given by the right-hand rule. If you curl the fingers on your right hand in the direction of the turning paddle wheel and your thumb points upward, then the vorticity is positive. If your thumb points downward, the vorticity is negative. Does this sound familiar? It should! If not, review the concept of curl in the last section.  Vorticity  Vorticity vorticity is a vector measure of local rotation in a fluid flow, defined as the curl of the velocity vector, where is the vorticity, the velocity, and the gradient operator.   Vorticity, therefore, has units of inverse time, for instance, . Fluids (and all objects) have vorticity simply because of Earth's rotation. This is called planetary vorticity planetary vorticity . We do not normally appreciate this component of vorticity since it is only important if a motion lasts for a significant portion of a day, and most important if it lasts for many days, months, or years. Since geostrophic motion is essentially steady compared with the rotation time of Earth, planetary vorticity is very important for nearly geostrophic flows. The vector of planetary vorticity points upward, parallel to the rotation axis of Earth. Its magnitude is twice the angular rotation rate of Earth.  Planetary Vorticity The magnitude of planetary vorticity is twice the angular rotation rate of Earth. Compute in units of . Then, sketch the Earth (with axis) and a well-labeled planetary vorticity vector .  per second  The vorticity of the fluid motion relative to Earth's surface is called the relative vorticity relative vorticity . It is calculated from the water velocities relative to Earth's surface (which is rotating). The total vorticity of a piece of fluid is the sum of the relative vorticity and planetary vorticity. The total vorticity is sometimes called absolute vorticity, because it is the vorticity the fluid has in the non-rotating reference frame of the stars.  In large-scale dynamic meterology, we are in general concerned only with the vertical components of absolute and relative vorticity, which are designated by and , respectively. Since , we have where is planetary vorticity.   Estimating Vorticity of a Horizontal Wind  In , we computed a negative circulation for a 1000 km 1000 km square where the horizontal wind was easterly and decreasing at a rate of per 1000 km to the north. That is, (see ). Is there vorticity at the center of this square?   The horizontal wind used in .   A changing easterly wind.       Estimate The horizontal wind vector field near a given location is illustrated in . The square is by and each vector has magnitude . Numerically estimate the vertical component of vorticity. Recall that .   The dotted square is 100 m by 100 m and each vector has magnitude .   Estimate eta.      We estimate and . It follows that the vertical component of vorticity is .      Exercises  Geometric Curl - Zero or Nonzero?  Compute Curl Algebraically  Compute More Curl Algebraically   Estimate Circulation Around Small Circle Given Curl  From METARs to Vorticity  Using METAR data, we can estimate the value of at location in .  City Code A: 052152Z 23005KT 10SM SCT045 SCT220 17\/07 A3012 RMK AO2 SLP202 T01670067  City Code B: 052154Z 24008KT 10SM FEW030 15\/07 A3014 RMK AO2 SLP206 T01500072  City Code C: 052153Z 15006KT 10SM SCT030CB SCT045 BKN140 BKN250 24\/21 A3006 RMK AO2 LTG DSNT E AND NW SLP178 CB NW-N AND DSNT E-SE MOV NE T02390211  City Code D: 052151Z 29010G17KT 10SM FEW065 FEW250 17\/M02 A3005 RMK AO2 SLP177 T01671022   Diagram for . The dotted square in this case is 200 nm by 200 nm.   A square with in the middle and cities on the edges.      Estimate at point .  Estimate at point .  Estimate at point . Be sure to give appropriate units.           Estimating the Vertical Component of Vorticity In , we determined the circulation about a rectangle where the (wind) velocity vector was easterly and decreasing linearly at a rate of per toward the north. That is, . Estimate now the vertical component of vorticity ( ) at the center of the rectangle.   Diagram for .   Estimate eta again.      Since , and so .   Curl of the Gradient is Zero For scalar functions that are continuously twice-differentiable (i.e. 'nice'), the second mixed partial derivatives are always equal. For example, Use this fact to demonstrate that the curl of a gradient vector field is always the zero vector. That is, show    "
},
{
  "id": "sec_curl-2",
  "level": "2",
  "url": "sec_curl.html#sec_curl-2",
  "type": "Motivating Questions",
  "number": "6.3",
  "title": "",
  "body": "   How can we understand the concept of curl both geometrically and algebraically?    What is meant when we say we are only concerned with the vertical component of vorticity? How do we compute that?    "
},
{
  "id": "sec_curl-4",
  "level": "2",
  "url": "sec_curl.html#sec_curl-4",
  "type": "Definition",
  "number": "6.3.1",
  "title": "Geometric Definition of Curl.",
  "body": "Geometric Definition of Curl  The curl curl of a smooth vector field , written , is the vector field with the following properties:  The direction of is the direction of for which circulation density is the greatest.  The magnitude of is the circulation density of around that direction.   "
},
{
  "id": "PosNegCurl",
  "level": "2",
  "url": "sec_curl.html#PosNegCurl",
  "type": "Example",
  "number": "6.3.2",
  "title": "Zero or Nonzero Curl.",
  "body": "Zero or Nonzero Curl  "
},
{
  "id": "algebraiccurl",
  "level": "2",
  "url": "sec_curl.html#algebraiccurl",
  "type": "Definition",
  "number": "6.3.3",
  "title": "Algebraic (Coordinate) Definition of Curl.",
  "body": " Algebraic (Coordinate) Definition of Curl  If , then   "
},
{
  "id": "graphicalcurl1",
  "level": "2",
  "url": "sec_curl.html#graphicalcurl1",
  "type": "Example",
  "number": "6.3.4",
  "title": "Connecting Curl Definitions.",
  "body": " Connecting Curl Definitions  Consider the vector field . A cross section of that lies in the plane is given in . We investigate .   The cross section of the three-dimensional vector field .   Connecting Curl Definition.     If we place a small square centered at as shown in in the vector field , we can imagine it as a small paddle wheel (see ) that will turn based on the flow. In this case, the paddle wheel will turn counter-clockwise. In fact, it is when the handle of the paddle wheel points in the direction of that the it spins fastest in the counter-clockwise direction (i.e. when the circulation is greatest). So geometrically, we see that for some number .  Using , we can compute directly. For , we note that which aligns with what we expected using the geometric definition of curl. Note too that, rather remarkably, is the same vector at every point in this field!  "
},
{
  "id": "ComputeCurlBothWays",
  "level": "2",
  "url": "sec_curl.html#ComputeCurlBothWays",
  "type": "Checkpoint",
  "number": "6.3.6",
  "title": "",
  "body": "A cross section of a vector field that lies in the plane is shown in .  The cross section of the three-dimensional vector field .   Practicing Curl Definition.     Only using , and not the algebraic definition, determine whether points in the or the direction. How about ?  If , compute and algebraically. Do your answers match those found in (a)?    Based on the figure, a small paddle wheel placed at would spin counter-clockwise the fastest if the handle is placed in the direction. So points in the direction. Similarly, a small paddle wheel placed at would spin counter-clockwise the fastest if the handle is placed in the direction. So points in the direction.  For , we note that so that and . This aligns with what was found in (a). "
},
{
  "id": "sec_curl-11-3",
  "level": "2",
  "url": "sec_curl.html#sec_curl-11-3",
  "type": "Definition",
  "number": "6.3.8",
  "title": "Vorticity.",
  "body": "Vorticity  Vorticity vorticity is a vector measure of local rotation in a fluid flow, defined as the curl of the velocity vector, where is the vorticity, the velocity, and the gradient operator.  "
},
{
  "id": "sec_curl-11-4",
  "level": "2",
  "url": "sec_curl.html#sec_curl-11-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "planetary vorticity "
},
{
  "id": "sec_curl-11-5",
  "level": "2",
  "url": "sec_curl.html#sec_curl-11-5",
  "type": "Checkpoint",
  "number": "6.3.9",
  "title": "Planetary Vorticity.",
  "body": "Planetary Vorticity The magnitude of planetary vorticity is twice the angular rotation rate of Earth. Compute in units of . Then, sketch the Earth (with axis) and a well-labeled planetary vorticity vector .  per second "
},
{
  "id": "sec_curl-11-6",
  "level": "2",
  "url": "sec_curl.html#sec_curl-11-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relative vorticity "
},
{
  "id": "computevorticitywindexample1",
  "level": "2",
  "url": "sec_curl.html#computevorticitywindexample1",
  "type": "Example",
  "number": "6.3.10",
  "title": "Estimating Vorticity of a Horizontal Wind.",
  "body": " Estimating Vorticity of a Horizontal Wind  In , we computed a negative circulation for a 1000 km 1000 km square where the horizontal wind was easterly and decreasing at a rate of per 1000 km to the north. That is, (see ). Is there vorticity at the center of this square?   The horizontal wind used in .   A changing easterly wind.      "
},
{
  "id": "estimateeta",
  "level": "2",
  "url": "sec_curl.html#estimateeta",
  "type": "Checkpoint",
  "number": "6.3.12",
  "title": "Estimate <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\eta\\)<\/span>.",
  "body": "Estimate The horizontal wind vector field near a given location is illustrated in . The square is by and each vector has magnitude . Numerically estimate the vertical component of vorticity. Recall that .   The dotted square is 100 m by 100 m and each vector has magnitude .   Estimate eta.      We estimate and . It follows that the vertical component of vorticity is .  "
},
{
  "id": "FindZeroCurlGeo",
  "level": "2",
  "url": "sec_curl.html#FindZeroCurlGeo",
  "type": "Exercise",
  "number": "6.3.1",
  "title": "Geometric Curl - Zero or Nonzero?",
  "body": "Geometric Curl - Zero or Nonzero? "
},
{
  "id": "FindEasyCurl",
  "level": "2",
  "url": "sec_curl.html#FindEasyCurl",
  "type": "Exercise",
  "number": "6.3.2",
  "title": "Compute Curl Algebraically.",
  "body": "Compute Curl Algebraically "
},
{
  "id": "FindHarderCurl",
  "level": "2",
  "url": "sec_curl.html#FindHarderCurl",
  "type": "Exercise",
  "number": "6.3.3",
  "title": "Compute More Curl Algebraically.",
  "body": "Compute More Curl Algebraically "
},
{
  "id": "CurlToCirculation",
  "level": "2",
  "url": "sec_curl.html#CurlToCirculation",
  "type": "Exercise",
  "number": "6.3.4",
  "title": "Estimate Circulation Around Small Circle Given Curl.",
  "body": "Estimate Circulation Around Small Circle Given Curl "
},
{
  "id": "MetarsToVorticity",
  "level": "2",
  "url": "sec_curl.html#MetarsToVorticity",
  "type": "Exercise",
  "number": "6.3.5",
  "title": "From METARs to Vorticity.",
  "body": "From METARs to Vorticity  Using METAR data, we can estimate the value of at location in .  City Code A: 052152Z 23005KT 10SM SCT045 SCT220 17\/07 A3012 RMK AO2 SLP202 T01670067  City Code B: 052154Z 24008KT 10SM FEW030 15\/07 A3014 RMK AO2 SLP206 T01500072  City Code C: 052153Z 15006KT 10SM SCT030CB SCT045 BKN140 BKN250 24\/21 A3006 RMK AO2 LTG DSNT E AND NW SLP178 CB NW-N AND DSNT E-SE MOV NE T02390211  City Code D: 052151Z 29010G17KT 10SM FEW065 FEW250 17\/M02 A3005 RMK AO2 SLP177 T01671022   Diagram for . The dotted square in this case is 200 nm by 200 nm.   A square with in the middle and cities on the edges.      Estimate at point .  Estimate at point .  Estimate at point . Be sure to give appropriate units.         "
},
{
  "id": "EstVorticityCenterRectangle",
  "level": "2",
  "url": "sec_curl.html#EstVorticityCenterRectangle",
  "type": "Exercise",
  "number": "6.3.6",
  "title": "Estimating the Vertical Component of Vorticity.",
  "body": "Estimating the Vertical Component of Vorticity In , we determined the circulation about a rectangle where the (wind) velocity vector was easterly and decreasing linearly at a rate of per toward the north. That is, . Estimate now the vertical component of vorticity ( ) at the center of the rectangle.   Diagram for .   Estimate eta again.      Since , and so .  "
},
{
  "id": "gradcrosscurl",
  "level": "2",
  "url": "sec_curl.html#gradcrosscurl",
  "type": "Exercise",
  "number": "6.3.7",
  "title": "Curl of the Gradient is Zero.",
  "body": "Curl of the Gradient is Zero For scalar functions that are continuously twice-differentiable (i.e. 'nice'), the second mixed partial derivatives are always equal. For example, Use this fact to demonstrate that the curl of a gradient vector field is always the zero vector. That is, show  "
},
{
  "id": "sec_flux",
  "level": "1",
  "url": "sec_flux.html",
  "type": "Section",
  "number": "6.4",
  "title": "Flux",
  "body": " Flux     What is flux and kinematic flux?    Given a vector field representing a fluid flow, how is flux computed through both flat and non-flat surfaces?     Let’s say you have a cube of air at constant pressure. Heat transferred to this cube causes temperature change where is specific heat. If we divide this by a time interval , we get Heat flux flux is the rate of heat transfer through a surface over time. It is the rate of heat moving through an area over time.   Flux through a surface. Source:  Wikimedia.org (CC BY-SA 3.0).    Flux Illustrated.    Since a change in heat is measured in joules, time over which a transfer occurs is measured in seconds, and the area of the surface through which the heat transfers is measured in square meters, the units of heat flux are .  What? A Watt? A watt watt is a unit of power defined as one joule per second ( ). What are units of heat flux in terms of watts rather than joules? Heat flux can be measured as watts per square meter, , since   Latent Heat Flux in the Great Lakes  The latent heat flux latent heat flux , , at a lake surface quantifies the energy lost or gained to the lake via a state change from liquid water to vapor (evaporation) or vapor to liquid (condensation). Most latent heat exchange occurs as evaporation. The magnitude of the flux depends on the deficit of vapor in the air and the efficiency of removal, which is based on atmospheric conditions above the lake. shows the latent heat flux in the Great Lakes during the month of January, during which this flux is greatest over most areas. This is due, in part, to the low absolute humidity of the cold overlying air. Winter winds and instability of the atmospheric boundary layer further enhance latent heat flux in January.   January latent heat flux in the Great Lakes. Source:  Seasonal Climatology of Surface Energy Fluxes on the Great Lakes, Lofgren and Zhu, NOAA Technical Memorandum ERL GLERL-112.    January latent heat flux for the Great Lakes.    By July each year, the area of active evaporation spreads from the shorelines toward the deeper areas at the centers of the lakes. Lake Superior, the northernmost and deepest of the Great Lakes, warms more slowly than the other lakes, and thus has the least latent heat flux throughout the summer.   July latent heat flux in the Great Lakes. Source:  Seasonal Climatology of Surface Energy Fluxes on the Great Lakes, Lofgren and Zhu, NOAA Technical Memorandum ERL GLERL-112.    January latent heat flux for the Great Lakes.      Sensible Heat Flux in the Great Lakes  The sensible heat flux sensible heat flux , , constrasts with latent heat flux in that no state change occurs and energy is transferred via conduction between the lake surface and the atmosphere. The magnitude of sensible heat flux depends on the difference in temperature between air and water and the atmospheric removal. shows the sensible heat flux in the Great Lakes during the winter month of January, during which this flux is greatest over deeper parts of the lakes.   January sensible heat flux in the Great Lakes. Source:  Seasonal Climatology of Surface Energy Fluxes on the Great Lakes, Lofgren and Zhu, NOAA Technical Memorandum ERL GLERL-112.    January sensible heat flux for the Great Lakes.    Once again, sensible heat flux in the month of July is much less. In fact, sensible heat flux values are negative, indicating that the water surface is colder than the overlying air.   July sensible heat flux in the Great Lakes. Source:  Seasonal Climatology of Surface Energy Fluxes on the Great Lakes, Lofgren and Zhu, NOAA Technical Memorandum ERL GLERL-112.    July sensible heat flux for the Great Lakes.      Net Heat Flux in the Great Lakes  shows net heat flux net heat flux , , into the lake surface of the Great Lakes during the month of January.   January net heat flux in the Great Lakes. Source:  Seasonal Climatology of Surface Energy Fluxes on the Great Lakes, Lofgren and Zhu, NOAA Technical Memorandum ERL GLERL-112.    January net heat flux for the Great Lakes.    The net heat flux adds the influence of solar radiation to the sensible and latent heat fluxes. In particular, we have where is the absorbed solar (shortwave) radiation, is the downward longwave radiation from the atmosphere and clouds, is the upward longwave radiation from the lake surface, and once again is the latent heat flux and is the sensible heat flux.  Based on , one might worry about the net negative heat flux in the Great Lakes during January. However, net fluxes are negative during the winter and positive during the summer (see ). Moreover, net heat flux is near zero on the surface of the Great Lakes when averaged over a typical year.   July net heat flux in the Great Lakes. Source:  Seasonal Climatology of Surface Energy Fluxes on the Great Lakes, Lofgren and Zhu, NOAA Technical Memorandum ERL GLERL-112.    July net heat flux for the Great Lakes.     Upward Longwave Radiation in Great Lakes  The upward longwave radiation in Lake Superior can be modeled by where is the emissivity of the water surface, is the Stefan-Boltzmann constant ( ), and is the water surface temperature (measured in degrees Kelvin). Assume that Lake Superior has an emissivity constant of . Calculate the upward longwave radiation (a flux) for both an average high surface water temperature of during September and the average low surface water temperature of during March.   Since , we have gives the longwave radiation (flux) during September. Similarly, the longwave radiation during March is found to be   Heat flux, the transfer of heat across a surface such as that of a lake over time, is only one type of flux for which we have interest.   Flux  A flux flux is the transfer of some variable per unit area per unit time.   Some variables for which we are interested in flux include heat, mass, kinetic energy, moisture, momentum, and pollution.   Units of Flux  We have already seen that heat flux has SI units of Joules (units of heat) per square meter (units of area) per second (units of time). That is, the SI units of heat flux are or, since one watt is defined as one joule per second, . Similarly, the SI units for mass flux mass flux are kilograms (units of mass) per square meter (units of area) per second (units of time). That is, .   Units of Momentum Flux Determine the units of momentum flux. Hint: Momentum has SI units of mass times velocity (i.e. ).    The kinematic form of flux kinematic form of flux is found by dividing a given flux by the density of air.   Kinematic Mass Flux  Kinematic mass flux kinematic mass flux has units of .   Kinematic Moisture Flux  Kinematic moisture flux kinematic moisture flux has units of .  Kinematic fluxes are more closely related to meteorological variables that can be easily measured (such as temperature and wind) than are the associated dynamic fluxes.  Kinematic Momentum Flux What are the units of kinematic momentum flux kinematic momentum flux ?     Mass Flux Through a Door  The mass flux of air is 1 through a door opening that is 1 wide by 2.5 tall. So the amount of air passing through the door each minute can be found by multiplying this mass flux by the area of the door and by the time (in seconds) for which the air passes. That is, since , we have Since the density of air at sea-level is , the kinematic mass flux is . Using kinematic mass flux, we see that of air flow through the door each minute.   Before mathematically defining flux, we need to have a way of specifying the direction by which we are defining positive flux through a given surface. Most surfaces are orientable orientable . This means they have two sides (yes, there are examples such as the Mobius strip or the Klein bottle that do not). At each point on a given side of the surface, we can construct a unit normal vector (see ). Choosing an orientation for a surface means picking one of these unit normal vectors at each point in a continuous way. Once this has been done, we use the notation to denote a unit normal vector in the direction of orientation.   A surface having two possible orientations. By specifying the unit normal vector shown, orientation is positive in that direction. If a fluid were to flow from left to right (roughly towards the positive -axis), then the flux through this surface would be considered positive. If the other unit normal, pointing into the page, were chosen for this surface, then flux for the same flow would be negative.   Orientation of a surface.      Area Vector  For an orientable surface having finite area , we define the area vector area vector  for this surface to be where is the unit normal defining the orientation of the surface.    Area Vector for Back of a Prism  Consider a 2m by 3m by 5m prism placed in the positive orthant with one corner at the origin (see ) that is outward oriented. The area vector for the back surface of this prism would be since the area of the surface is 15 and the unit vector defining positive orientation for the surface is .   Back of a 2m by 3m by 5m prism.   Flux Through Back of Prism.      Area Vector for Top of a Prism Determine the area vector for the top of a 2m by 3m by 5m prism placed in the positive orthant with one corner at the origin (see ) that is outward oriented.   Top of a 2m by 3m by 5m prism.   Flux Through Top of Prism.       We now turn our attention to understanding flux through a surface in the presence of a vector field representing flow. Imagine a rectangular screen immersed in a river that is flowing in the positive -direction; that is, left to right (see and ). The velocity of the water at each point is represented by the vectors in these diagrams.   Water flow from vector field flowing in positive -direction through a vertical screen.   Flux through vertical screen.      Water flow from vector field flowing in positive -direction through a slanted screen.   Flux through slanted screen.     One observes the greatest rate of fluid flow (flux) of water, measured in volume of water per unit time, through the vertical rectangular screen in . To understand this, imagine the screen were instead a window that you were holding either vertically or at an angle. The flow would feel much stronger if the window was held vertically. This is because so much more of the area of the window or screen is perpendicular to the flow.  So what quantities impact the amount of flow per unit time through the screen? Clearly the magnitude, , of the vector field is one factor. The larger the magnitude (or speed) of the flow, the larger the flux. Also, it is clear that the area, , of the screen is also a factor. Lastly, the angle that the vector field makes with the area vector for the screen is a factor. When (i.e. the screen is held horizontally), there is no flux. On the other hand, when , the screen is vertical and the flux is maximized. So flux is clearly related to variables , , and . In fact, for constant vector fields and flat surfaces, we will see that So flux is maximized when (i.e. when the vector field is aligned with the area vector ).  Using the Flux Formula Consider a constant vector field and a flat surface with area vector .  What is the angle between and that yields zero flux?  What is the flux if the area of the surface is , the magnitude of the vector field is , and the angle between and is ?      The flux is zero when .  The flux is .      Flux Through a Flat Surface  Let be a constant vector field, and let be a flat oriented surface. Then the flux of through is given by where is a vector that is perpendicular to in the direction of orientation and whose magnitude equals the area of (i.e. the area vector of ) and where is the angle between and .   Remember that the dot product measures the degree to which two vectors (such as and ) are aligned. This tells us that if the flow of the vector field is generally in the same direction as the unit area vector whose direction gives the orientation of the surface, then the flux of through will be positive.    If the flow of constant vector field is aligned with area vector of a flat surface, then the flux through the surface will be positive.   Flux through flat surface.       Using the Flux Formula II  Suppose that represents the flow velocity of a fluid, each component in m\/sec, and let be a 2 meter by 2 meter square screen parallel to the -plane, oriented upward (see ). We determine the flux of through , in cubic meters per second.   Vector field and surface for .   Flux Through Rectangle.     The area vector for will have magnitude and will be pointing upwards (perpendicuar to ). That is, . Using the dot product definition for flux, we see that Since the units of are and the units of are , our result is 12 . We also note that the angle between the vector field and the area vector is . It follows that we then also can find the same flux by computing   Flux Through Sides of Prism Consider a 2m by 3m by 5m prism placed in the positive orthant with one corner at the origin (see ) that is outward oriented. Suppose a vector field is constant with .  What is the flux through the bottom of the prism?  Bottom of the prism for .   Flux Through Bottom of Prism.      What is the flux through the top of the prism (see )?  What is the flux through the back of the prism (see )?      The area vector is . The flux is . The positive flux makes sense as the flow is generally downward, in the same way the surface is oriented downward.  The area vector is . The flux is . The negative flux makes sense as the flow is generally downward and the surface is oriented upward.  The area vector is . The flux is . This makes sense as the flow is parallel to this surface.    For a general (non-flat) surface , computing flux is as simple as breaking it up into small patches that are approximately flat and then summing: Here is the vector taken at, say, the center of the small patch and is the area vector of that small patch. In calculus, we let these regions go to zero in size.   Flux through a non-flat surface. The vector field is represented by red arrows. The blue arrows represent area vectors that are perpendicular to tangent planes which approximate each small patch. Source: Wikipedia (CC BY-SA 1.0).    Flux for non-flat surfaces.    Our estimate becomes more accurate as we divide the surface into smaller patches. The exact flux is found by taking a limit as for each . With that, we are ready to define flux in general.   Flux Integral  The flux integral flux integral of through the oriented surface is defined by     Exercises  Flux Through a Square  Positive, Negative, or Zero Flux Through a Flat Surface  Flux Through a Flat Triangular Region  Flux Through a Disk  Units of Moisture Flux Determine the units of moisture flux. Moisture has SI units of .    Total Flux Through a Cube Let . Let be the surface of the cube shown in , oriented outward.  Cube for .   Flux Through a Cube.    Find the flux of through each of the following surfaces:   , the right side of the cube ( )   , the left side of the cube ( )   , the front of the cube ( )   , the back of the cube ( )   , the top of the cube ( )   , the bottom of the cube ( )  Then, determine the net flux through the surface of the entire cube.         The net flux through the surface of the entire cube is .    "
},
{
  "id": "sec_flux-2",
  "level": "2",
  "url": "sec_flux.html#sec_flux-2",
  "type": "Motivating Questions",
  "number": "6.4",
  "title": "",
  "body": "   What is flux and kinematic flux?    Given a vector field representing a fluid flow, how is flux computed through both flat and non-flat surfaces?    "
},
{
  "id": "sec_flux-3",
  "level": "2",
  "url": "sec_flux.html#sec_flux-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "flux "
},
{
  "id": "fluxillustration",
  "level": "2",
  "url": "sec_flux.html#fluxillustration",
  "type": "Figure",
  "number": "6.4.1",
  "title": "",
  "body": " Flux through a surface. Source:  Wikimedia.org (CC BY-SA 3.0).    Flux Illustrated.   "
},
{
  "id": "heatfluxwatt",
  "level": "2",
  "url": "sec_flux.html#heatfluxwatt",
  "type": "Checkpoint",
  "number": "6.4.2",
  "title": "What?  A Watt?",
  "body": "What? A Watt? A watt watt is a unit of power defined as one joule per second ( ). What are units of heat flux in terms of watts rather than joules? Heat flux can be measured as watts per square meter, , since "
},
{
  "id": "LatentHeatFluxGL",
  "level": "2",
  "url": "sec_flux.html#LatentHeatFluxGL",
  "type": "Example",
  "number": "6.4.3",
  "title": "Latent Heat Flux in the Great Lakes.",
  "body": " Latent Heat Flux in the Great Lakes  The latent heat flux latent heat flux , , at a lake surface quantifies the energy lost or gained to the lake via a state change from liquid water to vapor (evaporation) or vapor to liquid (condensation). Most latent heat exchange occurs as evaporation. The magnitude of the flux depends on the deficit of vapor in the air and the efficiency of removal, which is based on atmospheric conditions above the lake. shows the latent heat flux in the Great Lakes during the month of January, during which this flux is greatest over most areas. This is due, in part, to the low absolute humidity of the cold overlying air. Winter winds and instability of the atmospheric boundary layer further enhance latent heat flux in January.   January latent heat flux in the Great Lakes. Source:  Seasonal Climatology of Surface Energy Fluxes on the Great Lakes, Lofgren and Zhu, NOAA Technical Memorandum ERL GLERL-112.    January latent heat flux for the Great Lakes.    By July each year, the area of active evaporation spreads from the shorelines toward the deeper areas at the centers of the lakes. Lake Superior, the northernmost and deepest of the Great Lakes, warms more slowly than the other lakes, and thus has the least latent heat flux throughout the summer.   July latent heat flux in the Great Lakes. Source:  Seasonal Climatology of Surface Energy Fluxes on the Great Lakes, Lofgren and Zhu, NOAA Technical Memorandum ERL GLERL-112.    January latent heat flux for the Great Lakes.    "
},
{
  "id": "SensibleHeatFluxGL",
  "level": "2",
  "url": "sec_flux.html#SensibleHeatFluxGL",
  "type": "Example",
  "number": "6.4.6",
  "title": "Sensible Heat Flux in the Great Lakes.",
  "body": " Sensible Heat Flux in the Great Lakes  The sensible heat flux sensible heat flux , , constrasts with latent heat flux in that no state change occurs and energy is transferred via conduction between the lake surface and the atmosphere. The magnitude of sensible heat flux depends on the difference in temperature between air and water and the atmospheric removal. shows the sensible heat flux in the Great Lakes during the winter month of January, during which this flux is greatest over deeper parts of the lakes.   January sensible heat flux in the Great Lakes. Source:  Seasonal Climatology of Surface Energy Fluxes on the Great Lakes, Lofgren and Zhu, NOAA Technical Memorandum ERL GLERL-112.    January sensible heat flux for the Great Lakes.    Once again, sensible heat flux in the month of July is much less. In fact, sensible heat flux values are negative, indicating that the water surface is colder than the overlying air.   July sensible heat flux in the Great Lakes. Source:  Seasonal Climatology of Surface Energy Fluxes on the Great Lakes, Lofgren and Zhu, NOAA Technical Memorandum ERL GLERL-112.    July sensible heat flux for the Great Lakes.    "
},
{
  "id": "NetHeatFluxGL",
  "level": "2",
  "url": "sec_flux.html#NetHeatFluxGL",
  "type": "Example",
  "number": "6.4.9",
  "title": "Net Heat Flux in the Great Lakes.",
  "body": " Net Heat Flux in the Great Lakes  shows net heat flux net heat flux , , into the lake surface of the Great Lakes during the month of January.   January net heat flux in the Great Lakes. Source:  Seasonal Climatology of Surface Energy Fluxes on the Great Lakes, Lofgren and Zhu, NOAA Technical Memorandum ERL GLERL-112.    January net heat flux for the Great Lakes.    The net heat flux adds the influence of solar radiation to the sensible and latent heat fluxes. In particular, we have where is the absorbed solar (shortwave) radiation, is the downward longwave radiation from the atmosphere and clouds, is the upward longwave radiation from the lake surface, and once again is the latent heat flux and is the sensible heat flux.  Based on , one might worry about the net negative heat flux in the Great Lakes during January. However, net fluxes are negative during the winter and positive during the summer (see ). Moreover, net heat flux is near zero on the surface of the Great Lakes when averaged over a typical year.   July net heat flux in the Great Lakes. Source:  Seasonal Climatology of Surface Energy Fluxes on the Great Lakes, Lofgren and Zhu, NOAA Technical Memorandum ERL GLERL-112.    July net heat flux for the Great Lakes.    "
},
{
  "id": "variationofRul",
  "level": "2",
  "url": "sec_flux.html#variationofRul",
  "type": "Checkpoint",
  "number": "6.4.12",
  "title": "Upward Longwave Radiation in Great Lakes.",
  "body": "Upward Longwave Radiation in Great Lakes  The upward longwave radiation in Lake Superior can be modeled by where is the emissivity of the water surface, is the Stefan-Boltzmann constant ( ), and is the water surface temperature (measured in degrees Kelvin). Assume that Lake Superior has an emissivity constant of . Calculate the upward longwave radiation (a flux) for both an average high surface water temperature of during September and the average low surface water temperature of during March.   Since , we have gives the longwave radiation (flux) during September. Similarly, the longwave radiation during March is found to be  "
},
{
  "id": "generalflux",
  "level": "2",
  "url": "sec_flux.html#generalflux",
  "type": "Definition",
  "number": "6.4.13",
  "title": "Flux.",
  "body": " Flux  A flux flux is the transfer of some variable per unit area per unit time.  "
},
{
  "id": "unitsofflux",
  "level": "2",
  "url": "sec_flux.html#unitsofflux",
  "type": "Example",
  "number": "6.4.14",
  "title": "Units of Flux.",
  "body": " Units of Flux  We have already seen that heat flux has SI units of Joules (units of heat) per square meter (units of area) per second (units of time). That is, the SI units of heat flux are or, since one watt is defined as one joule per second, . Similarly, the SI units for mass flux mass flux are kilograms (units of mass) per square meter (units of area) per second (units of time). That is, .  "
},
{
  "id": "unitsofmomentumflux",
  "level": "2",
  "url": "sec_flux.html#unitsofmomentumflux",
  "type": "Checkpoint",
  "number": "6.4.15",
  "title": "Units of Momentum Flux.",
  "body": "Units of Momentum Flux Determine the units of momentum flux. Hint: Momentum has SI units of mass times velocity (i.e. ).   "
},
{
  "id": "sec_flux-16",
  "level": "2",
  "url": "sec_flux.html#sec_flux-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "kinematic form of flux "
},
{
  "id": "kinematicmassflux",
  "level": "2",
  "url": "sec_flux.html#kinematicmassflux",
  "type": "Example",
  "number": "6.4.16",
  "title": "Kinematic Mass Flux.",
  "body": " Kinematic Mass Flux  Kinematic mass flux kinematic mass flux has units of . "
},
{
  "id": "kinematicmoistureflux",
  "level": "2",
  "url": "sec_flux.html#kinematicmoistureflux",
  "type": "Example",
  "number": "6.4.17",
  "title": "Kinematic Moisture Flux.",
  "body": " Kinematic Moisture Flux  Kinematic moisture flux kinematic moisture flux has units of . "
},
{
  "id": "kinematicmomentumflux",
  "level": "2",
  "url": "sec_flux.html#kinematicmomentumflux",
  "type": "Checkpoint",
  "number": "6.4.18",
  "title": "Kinematic Momentum Flux.",
  "body": "Kinematic Momentum Flux What are the units of kinematic momentum flux kinematic momentum flux ?   "
},
{
  "id": "massfluxdoor",
  "level": "2",
  "url": "sec_flux.html#massfluxdoor",
  "type": "Example",
  "number": "6.4.19",
  "title": "Mass Flux Through a Door.",
  "body": " Mass Flux Through a Door  The mass flux of air is 1 through a door opening that is 1 wide by 2.5 tall. So the amount of air passing through the door each minute can be found by multiplying this mass flux by the area of the door and by the time (in seconds) for which the air passes. That is, since , we have Since the density of air at sea-level is , the kinematic mass flux is . Using kinematic mass flux, we see that of air flow through the door each minute.  "
},
{
  "id": "sec_flux-22",
  "level": "2",
  "url": "sec_flux.html#sec_flux-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orientable "
},
{
  "id": "orientation",
  "level": "2",
  "url": "sec_flux.html#orientation",
  "type": "Figure",
  "number": "6.4.20",
  "title": "",
  "body": " A surface having two possible orientations. By specifying the unit normal vector shown, orientation is positive in that direction. If a fluid were to flow from left to right (roughly towards the positive -axis), then the flux through this surface would be considered positive. If the other unit normal, pointing into the page, were chosen for this surface, then flux for the same flow would be negative.   Orientation of a surface.    "
},
{
  "id": "areavector",
  "level": "2",
  "url": "sec_flux.html#areavector",
  "type": "Definition",
  "number": "6.4.21",
  "title": "Area Vector.",
  "body": " Area Vector  For an orientable surface having finite area , we define the area vector area vector  for this surface to be where is the unit normal defining the orientation of the surface.  "
},
{
  "id": "areavectorforprism",
  "level": "2",
  "url": "sec_flux.html#areavectorforprism",
  "type": "Example",
  "number": "6.4.22",
  "title": "Area Vector for Back of a Prism.",
  "body": " Area Vector for Back of a Prism  Consider a 2m by 3m by 5m prism placed in the positive orthant with one corner at the origin (see ) that is outward oriented. The area vector for the back surface of this prism would be since the area of the surface is 15 and the unit vector defining positive orientation for the surface is .   Back of a 2m by 3m by 5m prism.   Flux Through Back of Prism.     "
},
{
  "id": "areavectortop",
  "level": "2",
  "url": "sec_flux.html#areavectortop",
  "type": "Checkpoint",
  "number": "6.4.24",
  "title": "Area Vector for Top of a Prism.",
  "body": "Area Vector for Top of a Prism Determine the area vector for the top of a 2m by 3m by 5m prism placed in the positive orthant with one corner at the origin (see ) that is outward oriented.   Top of a 2m by 3m by 5m prism.   Flux Through Top of Prism.      "
},
{
  "id": "VerticalScreen",
  "level": "2",
  "url": "sec_flux.html#VerticalScreen",
  "type": "Figure",
  "number": "6.4.26",
  "title": "",
  "body": " Water flow from vector field flowing in positive -direction through a vertical screen.   Flux through vertical screen.    "
},
{
  "id": "SlantedScreen",
  "level": "2",
  "url": "sec_flux.html#SlantedScreen",
  "type": "Figure",
  "number": "6.4.27",
  "title": "",
  "body": " Water flow from vector field flowing in positive -direction through a slanted screen.   Flux through slanted screen.    "
},
{
  "id": "fluxmaximized",
  "level": "2",
  "url": "sec_flux.html#fluxmaximized",
  "type": "Checkpoint",
  "number": "6.4.28",
  "title": "Using the Flux Formula.",
  "body": "Using the Flux Formula Consider a constant vector field and a flat surface with area vector .  What is the angle between and that yields zero flux?  What is the flux if the area of the surface is , the magnitude of the vector field is , and the angle between and is ?      The flux is zero when .  The flux is .    "
},
{
  "id": "fluxthruconstantsurface",
  "level": "2",
  "url": "sec_flux.html#fluxthruconstantsurface",
  "type": "Definition",
  "number": "6.4.29",
  "title": "Flux Through a Flat Surface.",
  "body": " Flux Through a Flat Surface  Let be a constant vector field, and let be a flat oriented surface. Then the flux of through is given by where is a vector that is perpendicular to in the direction of orientation and whose magnitude equals the area of (i.e. the area vector of ) and where is the angle between and .  "
},
{
  "id": "PositiveConstantFlux",
  "level": "2",
  "url": "sec_flux.html#PositiveConstantFlux",
  "type": "Figure",
  "number": "6.4.30",
  "title": "",
  "body": " If the flow of constant vector field is aligned with area vector of a flat surface, then the flux through the surface will be positive.   Flux through flat surface.    "
},
{
  "id": "FluxExample1",
  "level": "2",
  "url": "sec_flux.html#FluxExample1",
  "type": "Example",
  "number": "6.4.31",
  "title": "Using the Flux Formula II.",
  "body": " Using the Flux Formula II  Suppose that represents the flow velocity of a fluid, each component in m\/sec, and let be a 2 meter by 2 meter square screen parallel to the -plane, oriented upward (see ). We determine the flux of through , in cubic meters per second.   Vector field and surface for .   Flux Through Rectangle.     The area vector for will have magnitude and will be pointing upwards (perpendicuar to ). That is, . Using the dot product definition for flux, we see that Since the units of are and the units of are , our result is 12 . We also note that the angle between the vector field and the area vector is . It follows that we then also can find the same flux by computing  "
},
{
  "id": "FluxSidesPrism",
  "level": "2",
  "url": "sec_flux.html#FluxSidesPrism",
  "type": "Checkpoint",
  "number": "6.4.33",
  "title": "Flux Through Sides of Prism.",
  "body": "Flux Through Sides of Prism Consider a 2m by 3m by 5m prism placed in the positive orthant with one corner at the origin (see ) that is outward oriented. Suppose a vector field is constant with .  What is the flux through the bottom of the prism?  Bottom of the prism for .   Flux Through Bottom of Prism.      What is the flux through the top of the prism (see )?  What is the flux through the back of the prism (see )?      The area vector is . The flux is . The positive flux makes sense as the flow is generally downward, in the same way the surface is oriented downward.  The area vector is . The flux is . The negative flux makes sense as the flow is generally downward and the surface is oriented upward.  The area vector is . The flux is . This makes sense as the flow is parallel to this surface.   "
},
{
  "id": "FluxIdeaPic",
  "level": "2",
  "url": "sec_flux.html#FluxIdeaPic",
  "type": "Figure",
  "number": "6.4.35",
  "title": "",
  "body": " Flux through a non-flat surface. The vector field is represented by red arrows. The blue arrows represent area vectors that are perpendicular to tangent planes which approximate each small patch. Source: Wikipedia (CC BY-SA 1.0).    Flux for non-flat surfaces.   "
},
{
  "id": "fluxintegral",
  "level": "2",
  "url": "sec_flux.html#fluxintegral",
  "type": "Definition",
  "number": "6.4.36",
  "title": "Flux Integral.",
  "body": " Flux Integral  The flux integral flux integral of through the oriented surface is defined by  "
},
{
  "id": "ex_sec_flux-2",
  "level": "2",
  "url": "sec_flux.html#ex_sec_flux-2",
  "type": "Exercise",
  "number": "6.4.1",
  "title": "Flux Through a Square.",
  "body": "Flux Through a Square "
},
{
  "id": "ex_sec_flux-3",
  "level": "2",
  "url": "sec_flux.html#ex_sec_flux-3",
  "type": "Exercise",
  "number": "6.4.2",
  "title": "Positive, Negative, or Zero Flux Through a Flat Surface.",
  "body": "Positive, Negative, or Zero Flux Through a Flat Surface "
},
{
  "id": "ex_sec_flux-4",
  "level": "2",
  "url": "sec_flux.html#ex_sec_flux-4",
  "type": "Exercise",
  "number": "6.4.3",
  "title": "Flux Through a Flat Triangular Region.",
  "body": "Flux Through a Flat Triangular Region "
},
{
  "id": "ex_sec_flux-5",
  "level": "2",
  "url": "sec_flux.html#ex_sec_flux-5",
  "type": "Exercise",
  "number": "6.4.4",
  "title": "Flux Through a Disk.",
  "body": "Flux Through a Disk "
},
{
  "id": "unitsofmoistureflux",
  "level": "2",
  "url": "sec_flux.html#unitsofmoistureflux",
  "type": "Exercise",
  "number": "6.4.5",
  "title": "Units of Moisture Flux.",
  "body": "Units of Moisture Flux Determine the units of moisture flux. Moisture has SI units of .   "
},
{
  "id": "fluxofcube",
  "level": "2",
  "url": "sec_flux.html#fluxofcube",
  "type": "Exercise",
  "number": "6.4.6",
  "title": "Total Flux Through a Cube.",
  "body": "Total Flux Through a Cube Let . Let be the surface of the cube shown in , oriented outward.  Cube for .   Flux Through a Cube.    Find the flux of through each of the following surfaces:   , the right side of the cube ( )   , the left side of the cube ( )   , the front of the cube ( )   , the back of the cube ( )   , the top of the cube ( )   , the bottom of the cube ( )  Then, determine the net flux through the surface of the entire cube.         The net flux through the surface of the entire cube is .  "
},
{
  "id": "sec_divergence",
  "level": "1",
  "url": "sec_divergence.html",
  "type": "Section",
  "number": "6.5",
  "title": "Divergence",
  "body": " Divergence     How can we understand the concept of divergence both geometrically and algebraically?    Why might we only be concerned with the horizontal divergence of the wind? How would we compute this?     In this section, we use the flux out of a closed surface surrounding a point to measure the outflow per unit volume there, also called the divergence divergence , or flux density flux density . To measure the outflow per unit volume of a vector field at a point, we calculate the flux out of a small sphere (or cube) centered at the point, divide by the volume enclosed by the sphere (or cube), then take the limit of this flux-to-volume ratio as the sphere (or cube) contracts around the point.   A small sphere centered at point .   A small sphere.      Geometric Definition of Divergence  The divergence, or flux density, of a smooth vector field is a scalar-valued function given by where is a sphere centered at , oriented outward, that contracts to the point in the limit.   We note that is negative when there is net flow into the point and positive when there is net flow out of the point .   Sign of Divergence  For the vector field illustrated in , the divergence at the origin is negative since there is a net flow into that point. All of the flow appears to be towards the origin as it passes through the surface of the sphere. If the surface of this sphere were oriented outward, then the flux of across would be negative. Hence the flux density (i.e. the divergence) at the origin is also negative.   There is negative divergence of the vector field at the origin.   Negative Divergence.     For the vector field illustrated in , the divergence at the origin is positive since there is a net flow out of that point. While a small amount of the flow appears to be moving towards the origin from the left, much more flow is moving away towards the right. If the surface of this sphere were oriented outward, then the flux of across (no matter the size of !) would be positive. The divergence, or flux density, at the origin is then also positive.   There is positive divergence of the vector field at the origin.   Positive Divergence.      Sign of Divergence II For the constant vector field shown in , determine if the divergence at the origin is positive, negative, or zero.   For the constant vector field , is the divergence at the origin positive, negative, or zero?   Zero Divergence.     Since the same amount of flow goes into the sphere as goes out of the sphere, the divergence (net flow) at the origin is zero. The flux of the vector field across this sphere is zero. The flux density will then also be zero.  In atmospheric kinematics, the term convergence convergence refers to the accumulation of air in a region or layer of the atmosphere. This is, mathematically speaking, negative divergence. A vector field representing wind can converge or diverge due to either direction or speed as shown in and .   Wind converges and diverges due to direction differences.   Converge due to direction.      Wind converges and diverges due to speed differences.   Speed Convergence and Divergence.    While the geometric definition is useful for understanding the concept of divergence, the ability to calculate is often better supported by an algebraic definition. To that end, we now present an equivalent algebraic definition of divergence of a vector field .   Algebraic (Coordinate) Definition of Divergence  If , we can calculate the divergence of by   A few remarks regarding notation we will use for divergence. If we write the 'del' operator as and then we have    A Sink  The vector field illustrated in has algebraic description of . From this formula, we compute the divergence: at every point and hence also at . Note that we also found negative divergence in , but this computation quantifies this value. When a point located in a vector field such as has negative divergence, we call it a sink sink . Conversely, when a point has positive divergence (i.e. ) in a vector field , we call it a source source .   Sink, Source, or Neither? The vector field illustrated in has algebraic description of . Determine and decide if the origin is a source, a sink, or neither.  We compute Since , we conclude that the origin is a source. In fact, every point in this vector field is a source.    Divergence on the San Francisco Coast  At a distance of km off the coast of San Francisco, the wind blows due east.  At , the wind is .  At , the wind is .  At , the wind is .  In the city, the wind is calm ( ).   Wind observations at , and on and off the coast of San Francisco.   San Francisco convergence.     We estimate the divergence on the San Francisco coast at each level of the atmosphere.  At , .  At , .  At , .  At each level of the atmosphere, the divergence is negative. That is, we have convergence.    Horizontal Divergence   Horizontal divergence horizontal divergence is a measure of the local spreading of a vector field (such as wind) in a horizontal plane. We commonly denote this by .   If and are the components of the vector field along the horizontal axes and , then   A Simple Horizontal Wind The vector field in represents the horizontal wind (positive is to the right, positive is up as usual). Is the horizontal divergence at the point positive, negative, or zero?   A horizontal wind used in .   Simple horizontal wind.      . Since the east-west component of the wind (i.e. ) is not changing as we move to the east, we have . Similarly, since the north-south component of the wind (i.e. ) is not changing as we move to the north, we also have . It follows that the horizontal divergence .    Calculating Horizontal Divergence  The following wind data were received from km to the east, north, west and south of a station , respectively: , m\/s; , m\/s; , m\/s; , m\/s. We calculate the approximate horizontal divergence at the station.   Wind observations km to the N, E, S and W of station S in .   Horizontal Divergence Data.     The horizontal divergence can be approximated by Note the units of divergence are 1\/s.   Calculating Horizontal Divergence Suppose the following wind data were received from km to the east, north, west and south of a station , respectively: , m\/s; , m\/s; , 6 m\/s; , m\/s. Calculate the approximate horizontal divergence at the station.  Diagram for .   Horizontal Divergence Data.       To a good approximation, density of air does not change with time for any given horizontal surface. Density decreases with height, but for each height level, density is fairly constant. So, for wind , we have (due to mass conservation) Separating out the horizontal and vertical components gives From this, means and means . We conclude  Horizontal divergence results in the horizontal stretching of an air mass, potentially increasing its stability.  Horizontal convergence causes a mass of air to rise (increase its upward vertical velocity), which could decrease the stability of the air mass.  Just like the ground is a lower boundary on movement of air mass, the tropopause is an upper boundary. Vertical motion caused by convergence or divergence impacts air pressure and thus weather (see ).  Horizontal convergence in the upper troposphere increases downward vertical velocity which increases surface pressure (high pressure, clear sky).  Horizontal divergence in the upper troposphere increases upward vertical velocity which decreases surface pressure (low pressure, cloudy).     Convergent wind near the surface (where ) causes upward vertical velocity of the air mass (i.e. ) thus decreasing stability of the air mass. Similarly, horizontal convergence in the upper troposphere increases downward vertical velocity of the air mass (i.e. ) thus increasing surface pressure (high pressure, clear sky).   Convergence leads to instability.       Exercises  Positive, Negative, or Zero Divergence?  Positive, Negative, or Zero Divergence? II  Using the Algebraic Formula to Compute Divergence  Using the Algebraic Formula to Compute Divergence II  Horizontal Divergence at a Point In , we estimated the vertical component of vorticity at the point in . Now, estimate the horizontal divergence at this point. The dotted square is by . Each vector has magnitude .   Horizontal wind near a point for .   Horizontal Wind near a Point.      The positive answer suggests convergence at the point.    "
},
{
  "id": "sec_divergence-2",
  "level": "2",
  "url": "sec_divergence.html#sec_divergence-2",
  "type": "Motivating Questions",
  "number": "6.5",
  "title": "",
  "body": "   How can we understand the concept of divergence both geometrically and algebraically?    Why might we only be concerned with the horizontal divergence of the wind? How would we compute this?    "
},
{
  "id": "sec_divergence-3",
  "level": "2",
  "url": "sec_divergence.html#sec_divergence-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "divergence flux density "
},
{
  "id": "smallsphere",
  "level": "2",
  "url": "sec_divergence.html#smallsphere",
  "type": "Figure",
  "number": "6.5.1",
  "title": "",
  "body": " A small sphere centered at point .   A small sphere.    "
},
{
  "id": "geometricdivergencedefn",
  "level": "2",
  "url": "sec_divergence.html#geometricdivergencedefn",
  "type": "Definition",
  "number": "6.5.2",
  "title": "Geometric Definition of Divergence.",
  "body": " Geometric Definition of Divergence  The divergence, or flux density, of a smooth vector field is a scalar-valued function given by where is a sphere centered at , oriented outward, that contracts to the point in the limit.  "
},
{
  "id": "SignDivergence",
  "level": "2",
  "url": "sec_divergence.html#SignDivergence",
  "type": "Example",
  "number": "6.5.3",
  "title": "Sign of Divergence.",
  "body": " Sign of Divergence  For the vector field illustrated in , the divergence at the origin is negative since there is a net flow into that point. All of the flow appears to be towards the origin as it passes through the surface of the sphere. If the surface of this sphere were oriented outward, then the flux of across would be negative. Hence the flux density (i.e. the divergence) at the origin is also negative.   There is negative divergence of the vector field at the origin.   Negative Divergence.     For the vector field illustrated in , the divergence at the origin is positive since there is a net flow out of that point. While a small amount of the flow appears to be moving towards the origin from the left, much more flow is moving away towards the right. If the surface of this sphere were oriented outward, then the flux of across (no matter the size of !) would be positive. The divergence, or flux density, at the origin is then also positive.   There is positive divergence of the vector field at the origin.   Positive Divergence.     "
},
{
  "id": "ZeroDivergence",
  "level": "2",
  "url": "sec_divergence.html#ZeroDivergence",
  "type": "Checkpoint",
  "number": "6.5.6",
  "title": "Sign of Divergence II.",
  "body": "Sign of Divergence II For the constant vector field shown in , determine if the divergence at the origin is positive, negative, or zero.   For the constant vector field , is the divergence at the origin positive, negative, or zero?   Zero Divergence.     Since the same amount of flow goes into the sphere as goes out of the sphere, the divergence (net flow) at the origin is zero. The flux of the vector field across this sphere is zero. The flux density will then also be zero. "
},
{
  "id": "sec_divergence-9",
  "level": "2",
  "url": "sec_divergence.html#sec_divergence-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convergence "
},
{
  "id": "ConvergeDirection",
  "level": "2",
  "url": "sec_divergence.html#ConvergeDirection",
  "type": "Figure",
  "number": "6.5.8",
  "title": "",
  "body": " Wind converges and diverges due to direction differences.   Converge due to direction.    "
},
{
  "id": "ConvergeSpeed",
  "level": "2",
  "url": "sec_divergence.html#ConvergeSpeed",
  "type": "Figure",
  "number": "6.5.9",
  "title": "",
  "body": " Wind converges and diverges due to speed differences.   Speed Convergence and Divergence.   "
},
{
  "id": "algebraicdivergencedefn",
  "level": "2",
  "url": "sec_divergence.html#algebraicdivergencedefn",
  "type": "Definition",
  "number": "6.5.10",
  "title": "Algebraic (Coordinate) Definition of Divergence.",
  "body": " Algebraic (Coordinate) Definition of Divergence  If , we can calculate the divergence of by  "
},
{
  "id": "NegxyzField",
  "level": "2",
  "url": "sec_divergence.html#NegxyzField",
  "type": "Example",
  "number": "6.5.11",
  "title": "A Sink.",
  "body": " A Sink  The vector field illustrated in has algebraic description of . From this formula, we compute the divergence: at every point and hence also at . Note that we also found negative divergence in , but this computation quantifies this value. When a point located in a vector field such as has negative divergence, we call it a sink sink . Conversely, when a point has positive divergence (i.e. ) in a vector field , we call it a source source .  "
},
{
  "id": "PosxyzField",
  "level": "2",
  "url": "sec_divergence.html#PosxyzField",
  "type": "Checkpoint",
  "number": "6.5.12",
  "title": "Sink, Source, or Neither?",
  "body": "Sink, Source, or Neither? The vector field illustrated in has algebraic description of . Determine and decide if the origin is a source, a sink, or neither.  We compute Since , we conclude that the origin is a source. In fact, every point in this vector field is a source.  "
},
{
  "id": "SanFran",
  "level": "2",
  "url": "sec_divergence.html#SanFran",
  "type": "Example",
  "number": "6.5.13",
  "title": "Divergence on the San Francisco Coast.",
  "body": " Divergence on the San Francisco Coast  At a distance of km off the coast of San Francisco, the wind blows due east.  At , the wind is .  At , the wind is .  At , the wind is .  In the city, the wind is calm ( ).   Wind observations at , and on and off the coast of San Francisco.   San Francisco convergence.     We estimate the divergence on the San Francisco coast at each level of the atmosphere.  At , .  At , .  At , .  At each level of the atmosphere, the divergence is negative. That is, we have convergence.  "
},
{
  "id": "horizontaldivergence",
  "level": "2",
  "url": "sec_divergence.html#horizontaldivergence",
  "type": "Definition",
  "number": "6.5.15",
  "title": "Horizontal Divergence.",
  "body": " Horizontal Divergence   Horizontal divergence horizontal divergence is a measure of the local spreading of a vector field (such as wind) in a horizontal plane. We commonly denote this by .  "
},
{
  "id": "SimpleHorizontalWind",
  "level": "2",
  "url": "sec_divergence.html#SimpleHorizontalWind",
  "type": "Checkpoint",
  "number": "6.5.16",
  "title": "A Simple Horizontal Wind.",
  "body": "A Simple Horizontal Wind The vector field in represents the horizontal wind (positive is to the right, positive is up as usual). Is the horizontal divergence at the point positive, negative, or zero?   A horizontal wind used in .   Simple horizontal wind.      . Since the east-west component of the wind (i.e. ) is not changing as we move to the east, we have . Similarly, since the north-south component of the wind (i.e. ) is not changing as we move to the north, we also have . It follows that the horizontal divergence .  "
},
{
  "id": "horizontaldivergenceexample",
  "level": "2",
  "url": "sec_divergence.html#horizontaldivergenceexample",
  "type": "Example",
  "number": "6.5.18",
  "title": "Calculating Horizontal Divergence.",
  "body": " Calculating Horizontal Divergence  The following wind data were received from km to the east, north, west and south of a station , respectively: , m\/s; , m\/s; , m\/s; , m\/s. We calculate the approximate horizontal divergence at the station.   Wind observations km to the N, E, S and W of station S in .   Horizontal Divergence Data.     The horizontal divergence can be approximated by Note the units of divergence are 1\/s.  "
},
{
  "id": "horizontaldivergenceexample2",
  "level": "2",
  "url": "sec_divergence.html#horizontaldivergenceexample2",
  "type": "Checkpoint",
  "number": "6.5.20",
  "title": "Calculating Horizontal Divergence.",
  "body": "Calculating Horizontal Divergence Suppose the following wind data were received from km to the east, north, west and south of a station , respectively: , m\/s; , m\/s; , 6 m\/s; , m\/s. Calculate the approximate horizontal divergence at the station.  Diagram for .   Horizontal Divergence Data.      "
},
{
  "id": "ConvergeInstable",
  "level": "2",
  "url": "sec_divergence.html#ConvergeInstable",
  "type": "Figure",
  "number": "6.5.22",
  "title": "",
  "body": " Convergent wind near the surface (where ) causes upward vertical velocity of the air mass (i.e. ) thus decreasing stability of the air mass. Similarly, horizontal convergence in the upper troposphere increases downward vertical velocity of the air mass (i.e. ) thus increasing surface pressure (high pressure, clear sky).   Convergence leads to instability.    "
},
{
  "id": "PosNegZeroDivMOM",
  "level": "2",
  "url": "sec_divergence.html#PosNegZeroDivMOM",
  "type": "Exercise",
  "number": "6.5.1",
  "title": "Positive, Negative, or Zero Divergence?",
  "body": "Positive, Negative, or Zero Divergence? "
},
{
  "id": "PosNegZeroDiv2MOM",
  "level": "2",
  "url": "sec_divergence.html#PosNegZeroDiv2MOM",
  "type": "Exercise",
  "number": "6.5.2",
  "title": "Positive, Negative, or Zero Divergence? II.",
  "body": "Positive, Negative, or Zero Divergence? II "
},
{
  "id": "PolyDivergenceMOM",
  "level": "2",
  "url": "sec_divergence.html#PolyDivergenceMOM",
  "type": "Exercise",
  "number": "6.5.3",
  "title": "Using the Algebraic Formula to Compute Divergence.",
  "body": "Using the Algebraic Formula to Compute Divergence "
},
{
  "id": "Poly2DivergenceMOM",
  "level": "2",
  "url": "sec_divergence.html#Poly2DivergenceMOM",
  "type": "Exercise",
  "number": "6.5.4",
  "title": "Using the Algebraic Formula to Compute Divergence II.",
  "body": "Using the Algebraic Formula to Compute Divergence II "
},
{
  "id": "vorticitynowdivergence",
  "level": "2",
  "url": "sec_divergence.html#vorticitynowdivergence",
  "type": "Exercise",
  "number": "6.5.5",
  "title": "Horizontal Divergence at a Point.",
  "body": "Horizontal Divergence at a Point In , we estimated the vertical component of vorticity at the point in . Now, estimate the horizontal divergence at this point. The dotted square is by . Each vector has magnitude .   Horizontal wind near a point for .   Horizontal Wind near a Point.      The positive answer suggests convergence at the point.  "
},
{
  "id": "sec_Laplacian",
  "level": "1",
  "url": "sec_Laplacian.html",
  "type": "Section",
  "number": "6.6",
  "title": "The Laplacian",
  "body": " The Laplacian     What are second-order partial derivatives?    What is the Laplace operator and how does it relate to divergence?    What does the Laplacian of temperature tell us?      The gradient of any function is a vector field that points in the direction of steepest ascent. That, is at each order pair in the domain of , the vector points in the direction in which we should travel in order to increase the output of at the greatest rate. In a gradient vector field, as shown in , we see that maxima of correspond to sinks in the gradient field and minima of correspond to sources in .   A gradient vector field for a scalar function having two sinks and two sources.       Divergence at a location in any vector field measures how much it locally behaves like a sink or a source. In other words, how much is it spreading out or how much is it contracting inward. When , the location behaves like a source. Similarly, tells us that behaves like a sink.  We now combine these two operations on a scalar function by first taking the gradient of , , and then taking the divergence of the gradient, . The resulting value is called the Laplacian Laplacian of . The Laplacian will be positive near a minimum of and negative near a maximum.  Recall that the 'del' operator was defined by so the expression will involve differentiation twice. So, before exploring the scalar field in greater depth, we first investigate second-order partial derivatives.    Second-Order Partial Derivatives  Recall that for a single-variable function , the second derivative of is defined to be the derivative of the first derivative. That is, , which can be stated in terms of the limit definition of the derivative by writing   A function of two independent variables and has two first-order partial derivatives, and . Each of these first-order partial derivatives has two partial derivatives, giving a total of four second-order partial derivatives partial derivatives second-order :    ,     ,     ,     .     In what follows, we begin exploring the four different second-order partial derivatives of a function of two variables and seek to understand what these various derivatives tell us about the function's behavior.  Recall from single variable calculus that the second derivative measures the instantaneous rate of change of the derivative. This observation is the key to understanding the meaning of the second-order partial derivatives.  Furthermore, we remember that the second derivative of a function at a point provides us with information about the concavity of the function at that point. Since the unmixed second-order partial derivative requires us to hold constant and differentiate twice with respect to , we may simply view as the second derivative of a trace of where is fixed. As such, will measure the concavity of this trace.   The tangent lines to a trace with increasing .        Consider, for example, . shows the graph of this function along with the trace given by . Also shown are three tangent lines to this trace, with increasing -values from left to right among the three plots in .  That the slope of the tangent line is decreasing as increases is reflected, as it is in one-variable calculus, in the fact that the trace is concave down at . Indeed, we see that and so . From here, we see that as expected.   Geometrically Understanding  In , we see the trace of that has held constant with . We also see three different lines that are tangent to the trace of in the direction at values of that are increasing from left to right in the figure.   The tangent lines to a trace with increasing .        The slope of the tangent lines to the trace increases (becomes less negative) as increases. This suggests that will be positive at . Indeed, we have so that and this trace is concave up at as expected.    Wind Chill  The wind chill , in degrees Fahrenheit, is a function of the wind speed , in miles per hour, and the air temperature , in degrees Fahrenheit. Some values of the wind chill are recorded in Table .   Wind chill as a function of wind speed and temperature .     -30  -25  -20  -15  -10  -5  0  5  10  15  20    5  -46  -40  -34  -28  -22  -16  -11  -5  1  7  13    10  -53  -47  -41  -35  -28  -22  -16  -10  -4  3  9    15  -58  -51  -45  -39  -32  -26  -19  -13  -7  0  6    20  -61  -55  -48  -42  -35  -29  -22  -15  -9  -2  4    25  -64  -58  -51  -44  -37  -31  -24  -17  -11  -4  3    30  -67  -60  -53  -46  -39  -33  -26  -19  -12  -5  1    35  -69  -62  -55  -48  -41  -34  -27  -21  -14  -7  0    40  -71  -64  -57  -50  -43  -36  -29  -22  -15  -8  -1     To estimate the second-order partial , we need information about the first partial near . From that information, we can then estimate the rate at which changes as we change wind speed . To that end, note that using central differences yields From this, we have   What does this value tell us? It gives a rate of change of a rate of change. tells us the rate at which the wind chill is changing as a small change in made in the wind speed. As we saw, these values were all negative as expected (as wind speed increases, the wind chill decreases...that is, it feels colder). In addition, we saw that as the wind speeds increase, the rate at which we feel colder is becoming less negative (i.e. it is increasing). This is why the second derivative is positive. The second derivative gives the rate at which this rate of change is changing. For every increase in wind speed by 1 mph, the rate at which the rate of the wind chill changes is roughly 0.03 degrees per mph. And this matches the values of that we have calculated - as the wind speed goes from 15 mph to 25 mph (10 mph of change), the change in is 0.7-0.4 = 0.3 degrees per mph.   Estimating and Interpreting a Second Partial of Wind Chill  Using values of the wind chill found in Table , estimate the second-order partial . Then, interpret the meaning of this value.   To estimate the second-order partial , collect information about the first partial . We then estimate the rate at which changes as we change temperature . Central differences yield So, We interpret this to mean that rate of change of the wind chill with respect to temperature changes (i.e. ) is roughly constant when mph and . Thinking visually, if we graphed and the trace , the slopes to this trace near (as in ) would all be the same.    Geometrically Understanding   Figure helps in visualizing the mixed partial derivative, . Here, we first hold constant to generate the first-order partial derivative , and then we hold constant to compute . This leads to first thinking about a trace with being constant, followed by slopes of tangent lines in the -direction that slide along the original trace. You might think of sliding your pencil down the trace with constant in a way that its slope indicates in order to further animate the three snapshots shown in .  The trace of with , along with tangent lines in the -direction at three different points.        Based on Figure , since the slopes shown are increasing (becoming less negative) as increases. Algebraically, note that which also gives a mixed derivative of at .    Geometrically Understanding  For , determine a formula for . Use it to evaluate . Then, compare the result to .   Since we have . This is exactly the same value as found in .   In , you may have noticed that the mixed second-order partial derivatives are equal. This observation holds generally and is known as Clairaut's Theorem.   Clairaut's Theorem  Let be a function of several variables for which the partial derivatives and are continuous near the point . Then      The Laplacian Operator  As mentioned earlier, for a scalar function , we have interest in the divergence of the gradient field. But From this, we define the scalar differential operator as the Laplacian .    Minimum Temperature and the Laplacian  For a location at which temperature is a minimum, the slope of increases in all directions. That is, , , and all increase as we move away from . This means that at . Similarly, at a location where the temperature is at a local maximum.    Lapse Rate  In the atmosphere, the temperature varies far more vertically than it does horizontally. The vertical change, known as the lapse rate lapse rate , is highly variable but is often between and for every kilometer that increases. On the other hand, moving north or east by one kilometer is quite unlikely to cause such a dramatic change in temperature. The fact that the variability of is much larger than the variability of or , suggests that the Laplacian .   The Laplacian of a function tells us about the curvature of the graph. To better understand how, let's look at the one-dimensional case. For a function of one variable, . In calculus we learned that the second derivative of a function indicates concavity. When , the function is concave up; when , the function is concave down. Another way to view this is to compare the value of to nearby values. As illustrates, when is concave up near we have . But we also notice that when is concave up we have is less than the average of nearby values of .   A function that is concave up. The average value of near is greater than the value .       Just as tells us that the average value of near a point is greater than , we can say something similar for functions of more than one variable. In particular, tells us that the average value of near a point will be greater than the value of at that point.   The Laplacian and Average Values Near a Point  The function has and . So, and . It follows that the Laplacian is zero: We interpret this to mean that near any point on the graph of , the average value of is equal to the value .   The function has Laplacian . Thus, the average value of near is equal to the value .   Two dimensional Laplacian relates to the average.     The vector field for is divergence-free (sometimes also called solenoidal ). There are no sources or sinks (see ). The interested reader should try plotting this function over various domains. They will find the graph of has no maxima or minima and the gradient vector field has no sources or sinks.   If , the gradient vector field has no sources or sinks. That is, everywhere.   The vector field is divergence free.       The graph of appears in . We have From this, At , we then find . From this we conclude that the average value of near is less than the value of at . Note that the gradient vector field has a sink nearby at . So it makes sense that the divergence of this gradient vector field would be negative at .   If , the gradient vector field has a sink at corresponding to the maximum on the graph. Here, and the average value of near is less than the value of .   The vector field has a sink.       Estimating the Laplacian  Temperatures near Rochester, MN are given in . From this information, we can estimate the Laplacian at Rochester, .   Temperatures near Rochester, MN. Hammond is 35 km north of Rochester. Stewartville is 21 km south of Rochester. Owatonna is 66 km west of Rochester. Winona is 87 km east of Rochester.   Computing the Laplacian near Rochester.     To start, we estimate which gives The positive second-order partial tells us that the temperature is decreasing less as we move to the east (a concave up temperature profile).  Also, which gives We conclude that This means that the temperature at Rochester is less than the average local temperature which in this case we can estimate to be . Even with no wind acting, we would then expect Rochester to warm.     Exercises  Second-order Partials of a Polynomial  Evaluating a Second-order Partials of a Polynomial   Signs of Partials using Contours  Compute The Laplacian   Partial Derivatives using the Chain Rule  Find all the first and second-order partial derivatives of . Using Clairaut's Theorem , you will find five unique expressions.     Third-order Partials  Compute if .   We have . So, . So, .   Units for Second-order Partials  Let represent the kinetic energy in joules of an object of mass in kilograms with velocity in meters per second. Determine the units associated with , , and respectively.   will have units of joules per kilogram squared ( ). will have units of . The mixed partial will have units of .   Estimating Second Partials from a Contour Diagram  Shown in is a contour plot of a function with the values of labeled on the contours. The point is highlighted in red.   A contour plot of .      Estimate the partial derivatives and .    Determine whether the second-order partial derivative is positive or negative, and explain your thinking.    Determine whether the second-order partial derivative is positive or negative, and explain your thinking.    Determine whether the second-order partial derivative is positive or negative, and explain your thinking.    Determine whether the second-order partial derivative is positive or negative, and explain your thinking.    Consider a function of the variables and for which and . Sketch possible behavior of some contours around on the left axes in .  Plots for contours of and .          Consider a function of the variables and for which and . Sketch possible behavior of some contour lines around on the right axes in Figure .     Heat Index  The Heat Index, , (measured in apparent degrees Fahrenheit ) is a function of the actual temperature outside (in degrees Fahrenheit) and the relative humidity (measured as a percentage). A portion of the table which gives values for this function, , is reproduced in Table .   Heat index.    T   H   70  75  80  85    90  106  109  112  115    92  112  115  119  123    94  118  122  127  132    96  125  130  135  141       Estimate . Then, write a complete sentence that carefully explains the meaning of this value, including units.    Estimate , and write one complete sentence that carefully explains the meaning of this value, including units.    Finally, do likewise to estimate , and write a sentence to explain the meaning of the value you found.      First, we estimate at two locations near . For example, and Then, When the temperature is 94 degrees and the relative humidity is 75%, this value tells us how fast the rate of change of the heat index is increasing as temperature increases.  This time estimate at two locations near : and Then, When the temperature is 94 degrees and the relative humidity is 75%, this value tells us how fast the rate of change of the heat index is increasing as the relative humidity increases.  To estimate the mixed partial, we use values and Then, When the temperature is 94 degrees and the relative humidity is 75%, this value tells us how fast the rate of change of the heat index with respect to a change in humidity is increasing as the temperature increases.    Determining the Sign of the Laplacian  The surface that is the graph of and the gradient vector field are given in . Is positive, negative, or zero? Why?   The surface of the graph of together with the gradient vector field for .   The vector field for .      Since the average value of near appears to be greater than the value of , we expect . From the vector field, we can also see that appears to be positive as flow is moving away from .   Units of the Laplacian The Laplacian is defined on a scalar vector field . The input variables , and\/or should be spatial variables with the same dimensions. In this way, units of will make sense. For example, in computing for the function given in , the units on each second partial will be different. What are the units for the second partials in ?   The units of are . The units of are . These do not add to anything physically meaningful.   Discrete Laplacian on a Regular Grid  Suppose that a scalar function such as temperature is known at locations on a regular grid. For example, suppose temperature is measured at locations 1 unit away from and at a center location as in .   Temperatures at locations and each 1 unit from in a regular array.   Computing the Laplacian on a regular array.     Using forward differences to estimate first partial derivatives, and backward differences to estimate second-order partials, explain how the Laplacian at can be estimated using    Using forward differences, we have From this, we note that Similarly, gives From this, using backward differences we have   Laplacian vs. Average Value Nearby  Using the result of , determine the sign of when is less than the average of the values nearby. What about if is greater than the average of the values nearby?   showed that Since the average of values nearby is , we see that when is less than this average, we have which means that . Similarly, we see that when is greater than the average of the values nearby.   Laplacian of Temperature at Dubuque  gives surface temperatures at various locations on March 26, 2023. Should one expect to be positive, negative, or zero? Why?   Surface temperatures in the midwest on March 23, 2023. (Source: NOAA).   Iowa Temperatures March 2023     We expect since the surface temperature at Dubuque appears to be less than the average of surrounding temperatures.   Laplace's Equation Laplace's equation Laplace's equation is given by Show that any function of the form for constants and satisfies Laplace's equation.   First, note that . Similarly, and . Then,    "
},
{
  "id": "sec_Laplacian-2",
  "level": "2",
  "url": "sec_Laplacian.html#sec_Laplacian-2",
  "type": "Motivating Questions",
  "number": "6.6",
  "title": "",
  "body": "   What are second-order partial derivatives?    What is the Laplace operator and how does it relate to divergence?    What does the Laplacian of temperature tell us?    "
},
{
  "id": "divergenceofgradient",
  "level": "2",
  "url": "sec_Laplacian.html#divergenceofgradient",
  "type": "Figure",
  "number": "6.6.1",
  "title": "",
  "body": " A gradient vector field for a scalar function having two sinks and two sources.      "
},
{
  "id": "sec_Laplacian-3-4",
  "level": "2",
  "url": "sec_Laplacian.html#sec_Laplacian-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Laplacian "
},
{
  "id": "F_10_3_fxx",
  "level": "2",
  "url": "sec_Laplacian.html#F_10_3_fxx",
  "type": "Figure",
  "number": "6.6.2",
  "title": "",
  "body": " The tangent lines to a trace with increasing .       "
},
{
  "id": "geometricunderstandingdf2dy2",
  "level": "2",
  "url": "sec_Laplacian.html#geometricunderstandingdf2dy2",
  "type": "Example",
  "number": "6.6.3",
  "title": "Geometrically Understanding <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\frac{\\partial^2 f}{\\partial y^2}\\)<\/span>.",
  "body": " Geometrically Understanding  In , we see the trace of that has held constant with . We also see three different lines that are tangent to the trace of in the direction at values of that are increasing from left to right in the figure.   The tangent lines to a trace with increasing .        The slope of the tangent lines to the trace increases (becomes less negative) as increases. This suggests that will be positive at . Indeed, we have so that and this trace is concave up at as expected.  "
},
{
  "id": "WindChilldf2dv2",
  "level": "2",
  "url": "sec_Laplacian.html#WindChilldf2dv2",
  "type": "Example",
  "number": "6.6.5",
  "title": "Wind Chill.",
  "body": " Wind Chill  The wind chill , in degrees Fahrenheit, is a function of the wind speed , in miles per hour, and the air temperature , in degrees Fahrenheit. Some values of the wind chill are recorded in Table .   Wind chill as a function of wind speed and temperature .     -30  -25  -20  -15  -10  -5  0  5  10  15  20    5  -46  -40  -34  -28  -22  -16  -11  -5  1  7  13    10  -53  -47  -41  -35  -28  -22  -16  -10  -4  3  9    15  -58  -51  -45  -39  -32  -26  -19  -13  -7  0  6    20  -61  -55  -48  -42  -35  -29  -22  -15  -9  -2  4    25  -64  -58  -51  -44  -37  -31  -24  -17  -11  -4  3    30  -67  -60  -53  -46  -39  -33  -26  -19  -12  -5  1    35  -69  -62  -55  -48  -41  -34  -27  -21  -14  -7  0    40  -71  -64  -57  -50  -43  -36  -29  -22  -15  -8  -1     To estimate the second-order partial , we need information about the first partial near . From that information, we can then estimate the rate at which changes as we change wind speed . To that end, note that using central differences yields From this, we have   What does this value tell us? It gives a rate of change of a rate of change. tells us the rate at which the wind chill is changing as a small change in made in the wind speed. As we saw, these values were all negative as expected (as wind speed increases, the wind chill decreases...that is, it feels colder). In addition, we saw that as the wind speeds increase, the rate at which we feel colder is becoming less negative (i.e. it is increasing). This is why the second derivative is positive. The second derivative gives the rate at which this rate of change is changing. For every increase in wind speed by 1 mph, the rate at which the rate of the wind chill changes is roughly 0.03 degrees per mph. And this matches the values of that we have calculated - as the wind speed goes from 15 mph to 25 mph (10 mph of change), the change in is 0.7-0.4 = 0.3 degrees per mph.  "
},
{
  "id": "windchillsecondderivativeT",
  "level": "2",
  "url": "sec_Laplacian.html#windchillsecondderivativeT",
  "type": "Checkpoint",
  "number": "6.6.7",
  "title": "Estimating and Interpreting a Second Partial of Wind Chill.",
  "body": "Estimating and Interpreting a Second Partial of Wind Chill  Using values of the wind chill found in Table , estimate the second-order partial . Then, interpret the meaning of this value.   To estimate the second-order partial , collect information about the first partial . We then estimate the rate at which changes as we change temperature . Central differences yield So, We interpret this to mean that rate of change of the wind chill with respect to temperature changes (i.e. ) is roughly constant when mph and . Thinking visually, if we graphed and the trace , the slopes to this trace near (as in ) would all be the same.  "
},
{
  "id": "geometricunderstandingdf2dxy",
  "level": "2",
  "url": "sec_Laplacian.html#geometricunderstandingdf2dxy",
  "type": "Example",
  "number": "6.6.8",
  "title": "Geometrically Understanding <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\frac{\\partial^2 f}{\\partial x \\partial y}\\)<\/span>.",
  "body": " Geometrically Understanding   Figure helps in visualizing the mixed partial derivative, . Here, we first hold constant to generate the first-order partial derivative , and then we hold constant to compute . This leads to first thinking about a trace with being constant, followed by slopes of tangent lines in the -direction that slide along the original trace. You might think of sliding your pencil down the trace with constant in a way that its slope indicates in order to further animate the three snapshots shown in .  The trace of with , along with tangent lines in the -direction at three different points.        Based on Figure , since the slopes shown are increasing (becoming less negative) as increases. Algebraically, note that which also gives a mixed derivative of at .   "
},
{
  "id": "windchillsecondderivativemixed",
  "level": "2",
  "url": "sec_Laplacian.html#windchillsecondderivativemixed",
  "type": "Checkpoint",
  "number": "6.6.10",
  "title": "Geometrically Understanding <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\frac{\\partial^2 f}{\\partial y \\partial x}\\)<\/span>.",
  "body": "Geometrically Understanding  For , determine a formula for . Use it to evaluate . Then, compare the result to .   Since we have . This is exactly the same value as found in .  "
},
{
  "id": "sec_Laplacian-5-2",
  "level": "2",
  "url": "sec_Laplacian.html#sec_Laplacian-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Laplacian "
},
{
  "id": "MinimumTempPositiveLaplacian",
  "level": "2",
  "url": "sec_Laplacian.html#MinimumTempPositiveLaplacian",
  "type": "Example",
  "number": "6.6.11",
  "title": "Minimum Temperature and the Laplacian.",
  "body": " Minimum Temperature and the Laplacian  For a location at which temperature is a minimum, the slope of increases in all directions. That is, , , and all increase as we move away from . This means that at . Similarly, at a location where the temperature is at a local maximum.  "
},
{
  "id": "LapseRateLaplacian",
  "level": "2",
  "url": "sec_Laplacian.html#LapseRateLaplacian",
  "type": "Example",
  "number": "6.6.12",
  "title": "Lapse Rate.",
  "body": " Lapse Rate  In the atmosphere, the temperature varies far more vertically than it does horizontally. The vertical change, known as the lapse rate lapse rate , is highly variable but is often between and for every kilometer that increases. On the other hand, moving north or east by one kilometer is quite unlikely to cause such a dramatic change in temperature. The fact that the variability of is much larger than the variability of or , suggests that the Laplacian .  "
},
{
  "id": "OneDSecondDerivativevsavg",
  "level": "2",
  "url": "sec_Laplacian.html#OneDSecondDerivativevsavg",
  "type": "Figure",
  "number": "6.6.13",
  "title": "",
  "body": " A function that is concave up. The average value of near is greater than the value .      "
},
{
  "id": "LaplacianAvgValues",
  "level": "2",
  "url": "sec_Laplacian.html#LaplacianAvgValues",
  "type": "Example",
  "number": "6.6.14",
  "title": "The Laplacian and Average Values Near a Point.",
  "body": " The Laplacian and Average Values Near a Point  The function has and . So, and . It follows that the Laplacian is zero: We interpret this to mean that near any point on the graph of , the average value of is equal to the value .   The function has Laplacian . Thus, the average value of near is equal to the value .   Two dimensional Laplacian relates to the average.     The vector field for is divergence-free (sometimes also called solenoidal ). There are no sources or sinks (see ). The interested reader should try plotting this function over various domains. They will find the graph of has no maxima or minima and the gradient vector field has no sources or sinks.   If , the gradient vector field has no sources or sinks. That is, everywhere.   The vector field is divergence free.     "
},
{
  "id": "NegativeLaplacian",
  "level": "2",
  "url": "sec_Laplacian.html#NegativeLaplacian",
  "type": "Example",
  "number": "6.6.17",
  "title": "",
  "body": " The graph of appears in . We have From this, At , we then find . From this we conclude that the average value of near is less than the value of at . Note that the gradient vector field has a sink nearby at . So it makes sense that the divergence of this gradient vector field would be negative at .   If , the gradient vector field has a sink at corresponding to the maximum on the graph. Here, and the average value of near is less than the value of .   The vector field has a sink.     "
},
{
  "id": "LaplacianNearRochester",
  "level": "2",
  "url": "sec_Laplacian.html#LaplacianNearRochester",
  "type": "Example",
  "number": "6.6.19",
  "title": "Estimating the Laplacian.",
  "body": " Estimating the Laplacian  Temperatures near Rochester, MN are given in . From this information, we can estimate the Laplacian at Rochester, .   Temperatures near Rochester, MN. Hammond is 35 km north of Rochester. Stewartville is 21 km south of Rochester. Owatonna is 66 km west of Rochester. Winona is 87 km east of Rochester.   Computing the Laplacian near Rochester.     To start, we estimate which gives The positive second-order partial tells us that the temperature is decreasing less as we move to the east (a concave up temperature profile).  Also, which gives We conclude that This means that the temperature at Rochester is less than the average local temperature which in this case we can estimate to be . Even with no wind acting, we would then expect Rochester to warm.  "
},
{
  "id": "SecondPartialsPoly",
  "level": "2",
  "url": "sec_Laplacian.html#SecondPartialsPoly",
  "type": "Exercise",
  "number": "6.6.1",
  "title": "Second-order Partials of a Polynomial.",
  "body": "Second-order Partials of a Polynomial "
},
{
  "id": "SecondPartialsPolyEval",
  "level": "2",
  "url": "sec_Laplacian.html#SecondPartialsPolyEval",
  "type": "Exercise",
  "number": "6.6.2",
  "title": "Evaluating a Second-order Partials of a Polynomial.",
  "body": "Evaluating a Second-order Partials of a Polynomial "
},
{
  "id": "SignPartialsFromContours",
  "level": "2",
  "url": "sec_Laplacian.html#SignPartialsFromContours",
  "type": "Exercise",
  "number": "6.6.3",
  "title": "Signs of Partials using Contours.",
  "body": "Signs of Partials using Contours "
},
{
  "id": "SatisfyLaplaceEquation",
  "level": "2",
  "url": "sec_Laplacian.html#SatisfyLaplaceEquation",
  "type": "Exercise",
  "number": "6.6.4",
  "title": "Compute The Laplacian.",
  "body": "Compute The Laplacian "
},
{
  "id": "SecondPartialsTrig",
  "level": "2",
  "url": "sec_Laplacian.html#SecondPartialsTrig",
  "type": "Exercise",
  "number": "6.6.5",
  "title": "Partial Derivatives using the Chain Rule.",
  "body": "Partial Derivatives using the Chain Rule  Find all the first and second-order partial derivatives of . Using Clairaut's Theorem , you will find five unique expressions.    "
},
{
  "id": "ThirdPartial",
  "level": "2",
  "url": "sec_Laplacian.html#ThirdPartial",
  "type": "Exercise",
  "number": "6.6.6",
  "title": "Third-order Partials.",
  "body": "Third-order Partials  Compute if .   We have . So, . So, .  "
},
{
  "id": "UnitsSecondOrderPartials",
  "level": "2",
  "url": "sec_Laplacian.html#UnitsSecondOrderPartials",
  "type": "Exercise",
  "number": "6.6.7",
  "title": "Units for Second-order Partials.",
  "body": "Units for Second-order Partials  Let represent the kinetic energy in joules of an object of mass in kilograms with velocity in meters per second. Determine the units associated with , , and respectively.   will have units of joules per kilogram squared ( ). will have units of . The mixed partial will have units of .  "
},
{
  "id": "Ez_10_3_0",
  "level": "2",
  "url": "sec_Laplacian.html#Ez_10_3_0",
  "type": "Exercise",
  "number": "6.6.8",
  "title": "Estimating Second Partials from a Contour Diagram.",
  "body": "Estimating Second Partials from a Contour Diagram  Shown in is a contour plot of a function with the values of labeled on the contours. The point is highlighted in red.   A contour plot of .      Estimate the partial derivatives and .    Determine whether the second-order partial derivative is positive or negative, and explain your thinking.    Determine whether the second-order partial derivative is positive or negative, and explain your thinking.    Determine whether the second-order partial derivative is positive or negative, and explain your thinking.    Determine whether the second-order partial derivative is positive or negative, and explain your thinking.    Consider a function of the variables and for which and . Sketch possible behavior of some contours around on the left axes in .  Plots for contours of and .          Consider a function of the variables and for which and . Sketch possible behavior of some contour lines around on the right axes in Figure .    "
},
{
  "id": "Ez_10_3_1",
  "level": "2",
  "url": "sec_Laplacian.html#Ez_10_3_1",
  "type": "Exercise",
  "number": "6.6.9",
  "title": "Heat Index.",
  "body": "Heat Index  The Heat Index, , (measured in apparent degrees Fahrenheit ) is a function of the actual temperature outside (in degrees Fahrenheit) and the relative humidity (measured as a percentage). A portion of the table which gives values for this function, , is reproduced in Table .   Heat index.    T   H   70  75  80  85    90  106  109  112  115    92  112  115  119  123    94  118  122  127  132    96  125  130  135  141       Estimate . Then, write a complete sentence that carefully explains the meaning of this value, including units.    Estimate , and write one complete sentence that carefully explains the meaning of this value, including units.    Finally, do likewise to estimate , and write a sentence to explain the meaning of the value you found.      First, we estimate at two locations near . For example, and Then, When the temperature is 94 degrees and the relative humidity is 75%, this value tells us how fast the rate of change of the heat index is increasing as temperature increases.  This time estimate at two locations near : and Then, When the temperature is 94 degrees and the relative humidity is 75%, this value tells us how fast the rate of change of the heat index is increasing as the relative humidity increases.  To estimate the mixed partial, we use values and Then, When the temperature is 94 degrees and the relative humidity is 75%, this value tells us how fast the rate of change of the heat index with respect to a change in humidity is increasing as the temperature increases.   "
},
{
  "id": "LaplacianFromGraph",
  "level": "2",
  "url": "sec_Laplacian.html#LaplacianFromGraph",
  "type": "Exercise",
  "number": "6.6.10",
  "title": "Determining the Sign of the Laplacian.",
  "body": "Determining the Sign of the Laplacian  The surface that is the graph of and the gradient vector field are given in . Is positive, negative, or zero? Why?   The surface of the graph of together with the gradient vector field for .   The vector field for .      Since the average value of near appears to be greater than the value of , we expect . From the vector field, we can also see that appears to be positive as flow is moving away from .  "
},
{
  "id": "LaplacianNotMeaningful",
  "level": "2",
  "url": "sec_Laplacian.html#LaplacianNotMeaningful",
  "type": "Exercise",
  "number": "6.6.11",
  "title": "Units of the Laplacian.",
  "body": "Units of the Laplacian The Laplacian is defined on a scalar vector field . The input variables , and\/or should be spatial variables with the same dimensions. In this way, units of will make sense. For example, in computing for the function given in , the units on each second partial will be different. What are the units for the second partials in ?   The units of are . The units of are . These do not add to anything physically meaningful.  "
},
{
  "id": "DiscreteLaplacianRegular",
  "level": "2",
  "url": "sec_Laplacian.html#DiscreteLaplacianRegular",
  "type": "Exercise",
  "number": "6.6.12",
  "title": "Discrete Laplacian on a Regular Grid.",
  "body": "Discrete Laplacian on a Regular Grid  Suppose that a scalar function such as temperature is known at locations on a regular grid. For example, suppose temperature is measured at locations 1 unit away from and at a center location as in .   Temperatures at locations and each 1 unit from in a regular array.   Computing the Laplacian on a regular array.     Using forward differences to estimate first partial derivatives, and backward differences to estimate second-order partials, explain how the Laplacian at can be estimated using    Using forward differences, we have From this, we note that Similarly, gives From this, using backward differences we have  "
},
{
  "id": "LaplacianVsAvg",
  "level": "2",
  "url": "sec_Laplacian.html#LaplacianVsAvg",
  "type": "Exercise",
  "number": "6.6.13",
  "title": "Laplacian vs. Average Value Nearby.",
  "body": "Laplacian vs. Average Value Nearby  Using the result of , determine the sign of when is less than the average of the values nearby. What about if is greater than the average of the values nearby?   showed that Since the average of values nearby is , we see that when is less than this average, we have which means that . Similarly, we see that when is greater than the average of the values nearby.  "
},
{
  "id": "IowaLaplacian",
  "level": "2",
  "url": "sec_Laplacian.html#IowaLaplacian",
  "type": "Exercise",
  "number": "6.6.14",
  "title": "Laplacian of Temperature at Dubuque.",
  "body": "Laplacian of Temperature at Dubuque  gives surface temperatures at various locations on March 26, 2023. Should one expect to be positive, negative, or zero? Why?   Surface temperatures in the midwest on March 23, 2023. (Source: NOAA).   Iowa Temperatures March 2023     We expect since the surface temperature at Dubuque appears to be less than the average of surrounding temperatures.  "
},
{
  "id": "LaplacesEquation",
  "level": "2",
  "url": "sec_Laplacian.html#LaplacesEquation",
  "type": "Exercise",
  "number": "6.6.15",
  "title": "Laplace’s Equation.",
  "body": "Laplace's Equation Laplace's equation Laplace's equation is given by Show that any function of the form for constants and satisfies Laplace's equation. "
},
{
  "id": "sec_taylor_polynomials_1var",
  "level": "1",
  "url": "sec_taylor_polynomials_1var.html",
  "type": "Section",
  "number": "7.1",
  "title": "Taylor Polynomials in One Variable",
  "body": " Taylor Polynomials in One Variable     Tangent lines are used in calculus to approximate the graph of a function near a point. Could a parabola do a better job of approximation near a point? If so, how do we find such a parabola?    Could a higher degree polynomial be used to approximate the graph of a function near a given point?      Meteorological phenomena can be complicated. Earlier we modeled geopotential heights at a given latitude using trigonometric polynomials trigonometric polynomials . We used sine and cosine functions because the data was periodic. But what about modeling behavior or functions that are not periodic? And what about modeling functions of more than one variable? In this section, we use polynomials called Taylor polynomials Taylor polynomials to model such functions.    Taylor Polynomials of Degree 2   Polynomials approximating  For illustration purposes, we start by finding a polynomial that fits a rather simple function, . And, we will try to fit the polynomial well near . If the polynomial has degree 0, call it , then it will simply be a constant function. What is the 'best' constant function to approximate near ? will do since it is an exact fit at  . Sure, it isn't a very good fit far away from , but we seek polynomial fits that are good near and so is as good as any constant function can approximate . We will call the zero-degree Taylor polynomial approximation to at .  Next, let's find a polynomial of degree 1, call it , that fits well near . Since a polynomial of degree one is just a linear function, the polynomial whose graph is the tangent line to at would work well since we would have that and . That is, both the value of and the derivative or slope of would match the function perfectly at . From calculus, you may remember that this tangent line is given by the function when . We call (the linearization of at ) the Taylor polynomial approximation of degree 1.   Left: The zero-degree Taylor polynomial approximation to at is . Middle: The first-degree Taylor polynomial approximation to at is . Right: The second-degree Taylor polynomial approximation to at is .        To determine a polynomial of degree 2, call it that fits well near 0, we should think about what we mean by the phrase 'fits well.' No matter how hard we try, a polynomial of degree 2 (whose graph is always a parabola) will never fit perfectly everywhere. So let's focus on getting good attributes at and near . For example, with the Taylor polynomial , we saw that and . That is the height and slope of at matched . It seems reasonable to then also ask . That is, to ask the concavity of both functions, and , to match at . If we define and if we require that then it turns out that Graphs of Taylor polynomial approximations of degrees 0, 1, and 2 appear in .   Taylor Polynomials of Degree 1 and 2  Given a smooth function , the Taylor polynomial of degree one about is given by This is the same as the tangent line to at . The Taylor polynomial of degree two about is given by      Approximating Potential Temperature  The potential temperature potential temperature  of a parcel of air at pressure (in mb) is the temperature that the air parcel would attain if adiabatically brought to a standard reference pressure such as mb. Assuming the air is an ideal gas, if is the current absolute temperature of the air parcel (in Kelvin), then If the temperature of the air parcel is held constant at (283 Kelvin), then the potential temperature (in Kelvin) would be given by the one-variable function The Taylor polynomial approximation of degree 2 at mb is then given by where so that Both and are plotted in . Note the good fit near mb and poor fit at mb.   For , the potential temperature (in Kelvin) at pressure (in mb) is given by The Taylor polynomial approximation near mb is given by (dashed curve).   Fitting potential temperature with a Taylor polynomial of degree 2.      Interpolating Wind over Time  Wind observations for Saint Cloud, MN appear in . We construct a Taylor polynomial for the speed of the eastward wind near time 6:53.   Observations at the Saint Cloud, MN airport on January 15, 2024.   Wind Observations near Saint Cloud MN on January 14, 2024.    To start, we label times and speeds of the eastward components of the wind as in .   Observations at the Saint Cloud, MN airport on January 15, 2024.    Time (hr)  (mph)    (4:53)     (5:53)     (6:53)     (7:53)     (8:53)      First, we have . Next, we estimate Next, we estimate From this we can write the Taylor polynomial of degree 2 about as We can then use this expression to estimate the speed of the eastward component of the wind at 18 minutes (3\/10 of an hour) before 6:53. That is, at 6:35:    Wind along I-90  Rather than having time be the independent variable of interest, a spatial variable can also be used in a Taylor polynomial. Wind observations at noon on January 15, 2024 from https:\/\/windfinder.com for five cities along I-90 in southern Minnesota appear in .   Eastward component of wind along I-90 in southern Minnesota on January 15, 2024.    Location (miles east of Fairmont)  Wind  Eastward component (mph)    (Worthington)  14 mph @  13.58    (Jackson)  14 mph @  13.16    (Fairmont)  13 mph @  11.97    (Blue Earth)  12 mph @  11.13    (Albert Lea)  13 mph @  12.43     Use this information to construct a second degree Taylor polynomial that can be used to estimate the eastward component of the wind in Sherbern which is located 13.3 miles west of Fairmont.   Cities in southern MN along I-90.   Wind Observations along I-90 in January, 2024.     We have . Next, we estimate Then we estimate From this we can write the Taylor polynomial of degree 2 about as   We then use this expression to estimate the speed of the eastward component of the wind in Sherbern:      Taylor Polynomials of Degree   Taylor Polynomials of Degree  In general, the Taylor polynomial of degree approximating any function near has the form where If we wish to approximate using a Taylor polynomial near a different point, say , then it has the form where      Exercises  Taylor Polynomial of an Exponential Function  Taylor Polynomial of Trigonometric Function  Finding Taylor Polynomials for a Rational Function   Find the Taylor polynomials of degree approximating for near 0:  For ,   For ,   For ,                   . Then , and                              Thus, evaluating these, , , and .       Finding a Taylor Polynomial near a Nonzero Value for a Trigonometric Function   Find the Taylor polynomial of degree for near the point for the function .          . Then , and                  So, .      Taylor Polynomial Coefficients   Suppose that is the second degree Taylor polynomial for the function about . What can you say about the signs of , , if has the graph given below?   (For each, enter if the term is positive, and if it is negative. Note that because this is essentially multiple choice problem it will not show which parts of your answer are correct or incorrect.)  is  is  is                  is the second degree Taylor polynomial for about , , which says . Since , ; and since , . In other words, is the -intercept of , is the slope of the tangent line to at and tells us the concavity of near . Thus ; ; and       Taylor Polynomial Coefficients II   The function is approximated near by the second degree Taylor polynomial .  Give values:                        and identifying coefficients with those given for , we obtain: the constant term, which equals , so . the coefficient of , which equals , so . the coefficient of , which equals , so .      Approximation using a Taylor Polynomial   Suppose is a function which has continuous derivatives, and that , , .  (a) What is the Taylor polynomial of degree 2 for near ?    (b) What is the Taylor polynomial of degree 3 for near ?    (c) Use the two polynomials that you found in parts (a) and (b) to approximate .  With ,   With ,                        Substituting gives  (a) The degree 2 Taylor polynomial, , is obtained by truncating after the term:  (b) The degree 3 Taylor polynomial, , is obtained by truncating after the term:  (c) Substitute into the Taylor polynomial of degree 2: From the Taylor polynomial of degree 3, we obtain       Interpolating Wind at MSP Wind observations for Minneapolis appear in . The northward wind is such that (16:53) = -18 mph.   Observations at the Minneapolis, MN airport on March 17, 2024.   Wind Observations near Minneapolis MN on March 17, 2024.     Estimate at time 16:53 using a central difference. Be sure to include units.  Estimate at time 17:53 using a central difference.  Estimate at time 15:53 using a central difference.  Using your results from (a) and (b), estimate at time 16:53 using a central difference.  Suppose that represents the number of hours since 16:53. Construct a second degree Taylor polynomial modeling the speed of the northward wind near time 16:53 (i.e. ). Your polynomial will have the form . Hint: Use the results from (a) and (d).             "
},
{
  "id": "sec_taylor_polynomials_1var-2",
  "level": "2",
  "url": "sec_taylor_polynomials_1var.html#sec_taylor_polynomials_1var-2",
  "type": "Motivating Questions",
  "number": "7.1",
  "title": "",
  "body": "   Tangent lines are used in calculus to approximate the graph of a function near a point. Could a parabola do a better job of approximation near a point? If so, how do we find such a parabola?    Could a higher degree polynomial be used to approximate the graph of a function near a given point?    "
},
{
  "id": "sec_taylor_polynomials_1var-3-1",
  "level": "2",
  "url": "sec_taylor_polynomials_1var.html#sec_taylor_polynomials_1var-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trigonometric polynomials Taylor polynomials "
},
{
  "id": "fittingexpnegx",
  "level": "2",
  "url": "sec_taylor_polynomials_1var.html#fittingexpnegx",
  "type": "Example",
  "number": "7.1.1",
  "title": "Polynomials approximating <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(f(x)=e^{-x}\\)<\/span>.",
  "body": " Polynomials approximating  For illustration purposes, we start by finding a polynomial that fits a rather simple function, . And, we will try to fit the polynomial well near . If the polynomial has degree 0, call it , then it will simply be a constant function. What is the 'best' constant function to approximate near ? will do since it is an exact fit at  . Sure, it isn't a very good fit far away from , but we seek polynomial fits that are good near and so is as good as any constant function can approximate . We will call the zero-degree Taylor polynomial approximation to at .  Next, let's find a polynomial of degree 1, call it , that fits well near . Since a polynomial of degree one is just a linear function, the polynomial whose graph is the tangent line to at would work well since we would have that and . That is, both the value of and the derivative or slope of would match the function perfectly at . From calculus, you may remember that this tangent line is given by the function when . We call (the linearization of at ) the Taylor polynomial approximation of degree 1.   Left: The zero-degree Taylor polynomial approximation to at is . Middle: The first-degree Taylor polynomial approximation to at is . Right: The second-degree Taylor polynomial approximation to at is .        To determine a polynomial of degree 2, call it that fits well near 0, we should think about what we mean by the phrase 'fits well.' No matter how hard we try, a polynomial of degree 2 (whose graph is always a parabola) will never fit perfectly everywhere. So let's focus on getting good attributes at and near . For example, with the Taylor polynomial , we saw that and . That is the height and slope of at matched . It seems reasonable to then also ask . That is, to ask the concavity of both functions, and , to match at . If we define and if we require that then it turns out that Graphs of Taylor polynomial approximations of degrees 0, 1, and 2 appear in .   Taylor Polynomials of Degree 1 and 2  Given a smooth function , the Taylor polynomial of degree one about is given by This is the same as the tangent line to at . The Taylor polynomial of degree two about is given by    "
},
{
  "id": "ApproxPotentialTemp",
  "level": "2",
  "url": "sec_taylor_polynomials_1var.html#ApproxPotentialTemp",
  "type": "Example",
  "number": "7.1.3",
  "title": "Approximating Potential Temperature.",
  "body": " Approximating Potential Temperature  The potential temperature potential temperature  of a parcel of air at pressure (in mb) is the temperature that the air parcel would attain if adiabatically brought to a standard reference pressure such as mb. Assuming the air is an ideal gas, if is the current absolute temperature of the air parcel (in Kelvin), then If the temperature of the air parcel is held constant at (283 Kelvin), then the potential temperature (in Kelvin) would be given by the one-variable function The Taylor polynomial approximation of degree 2 at mb is then given by where so that Both and are plotted in . Note the good fit near mb and poor fit at mb.   For , the potential temperature (in Kelvin) at pressure (in mb) is given by The Taylor polynomial approximation near mb is given by (dashed curve).   Fitting potential temperature with a Taylor polynomial of degree 2.    "
},
{
  "id": "InterpolatingWind",
  "level": "2",
  "url": "sec_taylor_polynomials_1var.html#InterpolatingWind",
  "type": "Example",
  "number": "7.1.5",
  "title": "Interpolating Wind over Time.",
  "body": " Interpolating Wind over Time  Wind observations for Saint Cloud, MN appear in . We construct a Taylor polynomial for the speed of the eastward wind near time 6:53.   Observations at the Saint Cloud, MN airport on January 15, 2024.   Wind Observations near Saint Cloud MN on January 14, 2024.    To start, we label times and speeds of the eastward components of the wind as in .   Observations at the Saint Cloud, MN airport on January 15, 2024.    Time (hr)  (mph)    (4:53)     (5:53)     (6:53)     (7:53)     (8:53)      First, we have . Next, we estimate Next, we estimate From this we can write the Taylor polynomial of degree 2 about as We can then use this expression to estimate the speed of the eastward component of the wind at 18 minutes (3\/10 of an hour) before 6:53. That is, at 6:35:   "
},
{
  "id": "SouthernMNwind",
  "level": "2",
  "url": "sec_taylor_polynomials_1var.html#SouthernMNwind",
  "type": "Checkpoint",
  "number": "7.1.8",
  "title": "Wind along I-90.",
  "body": "Wind along I-90  Rather than having time be the independent variable of interest, a spatial variable can also be used in a Taylor polynomial. Wind observations at noon on January 15, 2024 from https:\/\/windfinder.com for five cities along I-90 in southern Minnesota appear in .   Eastward component of wind along I-90 in southern Minnesota on January 15, 2024.    Location (miles east of Fairmont)  Wind  Eastward component (mph)    (Worthington)  14 mph @  13.58    (Jackson)  14 mph @  13.16    (Fairmont)  13 mph @  11.97    (Blue Earth)  12 mph @  11.13    (Albert Lea)  13 mph @  12.43     Use this information to construct a second degree Taylor polynomial that can be used to estimate the eastward component of the wind in Sherbern which is located 13.3 miles west of Fairmont.   Cities in southern MN along I-90.   Wind Observations along I-90 in January, 2024.     We have . Next, we estimate Then we estimate From this we can write the Taylor polynomial of degree 2 about as   We then use this expression to estimate the speed of the eastward component of the wind in Sherbern:   "
},
{
  "id": "ez-taylorPolyExp",
  "level": "2",
  "url": "sec_taylor_polynomials_1var.html#ez-taylorPolyExp",
  "type": "Exercise",
  "number": "7.1.3.1",
  "title": "Taylor Polynomial of an Exponential Function.",
  "body": "Taylor Polynomial of an Exponential Function "
},
{
  "id": "ez-taylorPolysincos",
  "level": "2",
  "url": "sec_taylor_polynomials_1var.html#ez-taylorPolysincos",
  "type": "Exercise",
  "number": "7.1.3.2",
  "title": "Taylor Polynomial of Trigonometric Function.",
  "body": "Taylor Polynomial of Trigonometric Function "
},
{
  "id": "ez-taylor_polynomials_1var-1",
  "level": "2",
  "url": "sec_taylor_polynomials_1var.html#ez-taylor_polynomials_1var-1",
  "type": "Exercise",
  "number": "7.1.3.3",
  "title": "Finding Taylor Polynomials for a Rational Function.",
  "body": "Finding Taylor Polynomials for a Rational Function   Find the Taylor polynomials of degree approximating for near 0:  For ,   For ,   For ,                   . Then , and                              Thus, evaluating these, , , and .     "
},
{
  "id": "ez-taylor_polynomials_1var-3",
  "level": "2",
  "url": "sec_taylor_polynomials_1var.html#ez-taylor_polynomials_1var-3",
  "type": "Exercise",
  "number": "7.1.3.4",
  "title": "Finding a Taylor Polynomial near a Nonzero Value for a Trigonometric Function.",
  "body": "Finding a Taylor Polynomial near a Nonzero Value for a Trigonometric Function   Find the Taylor polynomial of degree for near the point for the function .          . Then , and                  So, .     "
},
{
  "id": "ez-taylor_polynomials_1var-4",
  "level": "2",
  "url": "sec_taylor_polynomials_1var.html#ez-taylor_polynomials_1var-4",
  "type": "Exercise",
  "number": "7.1.3.5",
  "title": "Taylor Polynomial Coefficients.",
  "body": "Taylor Polynomial Coefficients   Suppose that is the second degree Taylor polynomial for the function about . What can you say about the signs of , , if has the graph given below?   (For each, enter if the term is positive, and if it is negative. Note that because this is essentially multiple choice problem it will not show which parts of your answer are correct or incorrect.)  is  is  is                  is the second degree Taylor polynomial for about , , which says . Since , ; and since , . In other words, is the -intercept of , is the slope of the tangent line to at and tells us the concavity of near . Thus ; ; and      "
},
{
  "id": "ez-taylor_polynomials_1var-5",
  "level": "2",
  "url": "sec_taylor_polynomials_1var.html#ez-taylor_polynomials_1var-5",
  "type": "Exercise",
  "number": "7.1.3.6",
  "title": "Taylor Polynomial Coefficients II.",
  "body": "Taylor Polynomial Coefficients II   The function is approximated near by the second degree Taylor polynomial .  Give values:                        and identifying coefficients with those given for , we obtain: the constant term, which equals , so . the coefficient of , which equals , so . the coefficient of , which equals , so .     "
},
{
  "id": "ez-taylor_polynomials_1var-6",
  "level": "2",
  "url": "sec_taylor_polynomials_1var.html#ez-taylor_polynomials_1var-6",
  "type": "Exercise",
  "number": "7.1.3.7",
  "title": "Approximation using a Taylor Polynomial.",
  "body": "Approximation using a Taylor Polynomial   Suppose is a function which has continuous derivatives, and that , , .  (a) What is the Taylor polynomial of degree 2 for near ?    (b) What is the Taylor polynomial of degree 3 for near ?    (c) Use the two polynomials that you found in parts (a) and (b) to approximate .  With ,   With ,                        Substituting gives  (a) The degree 2 Taylor polynomial, , is obtained by truncating after the term:  (b) The degree 3 Taylor polynomial, , is obtained by truncating after the term:  (c) Substitute into the Taylor polynomial of degree 2: From the Taylor polynomial of degree 3, we obtain      "
},
{
  "id": "ez-wind-at-MSP",
  "level": "2",
  "url": "sec_taylor_polynomials_1var.html#ez-wind-at-MSP",
  "type": "Exercise",
  "number": "7.1.3.8",
  "title": "Interpolating Wind at MSP.",
  "body": "Interpolating Wind at MSP Wind observations for Minneapolis appear in . The northward wind is such that (16:53) = -18 mph.   Observations at the Minneapolis, MN airport on March 17, 2024.   Wind Observations near Minneapolis MN on March 17, 2024.     Estimate at time 16:53 using a central difference. Be sure to include units.  Estimate at time 17:53 using a central difference.  Estimate at time 15:53 using a central difference.  Using your results from (a) and (b), estimate at time 16:53 using a central difference.  Suppose that represents the number of hours since 16:53. Construct a second degree Taylor polynomial modeling the speed of the northward wind near time 16:53 (i.e. ). Your polynomial will have the form . Hint: Use the results from (a) and (d).           "
},
{
  "id": "sec_taylor_polynomials_2var",
  "level": "1",
  "url": "sec_taylor_polynomials_2var.html",
  "type": "Section",
  "number": "7.2",
  "title": "Taylor Polynomials in Two Variables",
  "body": " Taylor Polynomials in Two Variables     Can functions of two variables be approximated using Taylor polynomials?    When it comes to the horizontal wind, what are translation, divergence, vorticity, and deformation?    How can we use meteorological data to write a first-degree Taylor polynomial in two variables that models the horizontal wind? How is this Taylor polynomial related to translation, divergence, vorticity, and deformation?      Taylor polynomials work the same way for functions of two variables as they do for functions of one variable. Rather than the first and second degree approximations having graphs that are lines and parabolas, the graphs are planes and paraboloids . The coefficients for the Taylor polynomials in two variables involve partial derivatives.   Left: A surface . Middle: A surface together with the degree one Taylor approximation whose graph is a plane. Right: A surface together with the degree two Taylor approximation whose graph is a paraboloid.          Linear Approximations in Two Variables  The best linear approximation near to a differentiable function is the degree one Taylor polynomial (i.e. the tangent line or local linearization)   Taylor Polynomials of Degree 1 in Two Variables  For functions of two variables, when has continuous first-order partials, the local linearization (i.e. tangent plane) near is the degree one Taylor polynomial     Linear Approximation to  The best linear approximation to at is the tangent line: The best linear approximation to at is the tangent plane:   Left: The tangent line to at is a first-degree Taylor approximation (i.e. linear approximation) . Right: The tangent plane to at is a first-degree Taylor approximation (i.e. linear approximation) .          Quadratic Approximations in Two Variables  What does a second-degree Taylor approximation look like? As mentioned earlier, the graphs of first and second-degree approximations to functions of two variables are planes and paraboloids ( ). Contrast this to the graphs of first and second-degree approximations to functions of one variable that are lines and parabolas.   Left: The graph of a first-degree Taylor approximation to is a plane described by . Right: The graph of the second-degree Taylor approximation to is a paraboloid described by .       It is instructive to compare the two-variable case to that of one variable. To that end, recall that the best quadratic approximation near to a differentiable function of one variable is the second-degree Taylor polynomial   Taylor Polynomials of Degree 2 in Two Variables  For functions of two variables, when has continuous second-order partials, the second-degree Taylor polynomial approximating near is    Quadratic Approximation to  The best quadratic approximation to at is The graph of this quadratic is a parabola. The best quadratic approximation to at is The graph of this quadratic is a paraboloid.   Left: The second-degree Taylor approximation to at is . Right: The second-degree Taylor approximation to at is .        Second-degree Taylor approximations in two variables at a point instead of are given by    Translations, Divergence, Vorticity, and Deformation  The motion of an air parcel is a combination of five different motions - translation, divergence, vorticity (or rotation), stretching (or strain deformation), and shearing (or shear deformation). For simplicity, we will focus on two-dimensional air parcels at the moment.   Left: Translation, Divergence, Vorticity (rotation), Stretching (strain deformation), and Shearing (shear deformation).                    Translation translation simply moves the air parcel without stretching it, shearing it, rotating, or changing its area. There are no partial derivatives of velocities involved with translation.  Horizontal divergence divergence , , is represented by . As we have already studied, divergence measures the expansion or contraction of air parcels. When the divergence is positive, the air parcel grows; when divergence is negative, the air parcel shrinks. Adding to the horizontal divergence gives three-dimensional divergence.   Left: Horizontal divergence. Here, and are both positive. Right: The vertical component of vorticity. Here, is positive (in the diagram, is positive and is negative). The air parcel simply rotates counter-clockwise.           Vorticity vorticity , , is represented by . Though vorticity of the 3-D wind is actually a vector cross product , and hence a vector itself, the value of is only the vertical component of the vorticity (and hence a scalar). Vorticity is positive if there is positive (counter-clockwise) rotation and negative if there is negative (clockwise) rotation.  Both divergence and vorticity are used to infer upward motion. Divergence can be used to compute vertical velocities, and it measures the rate of expansion or contraction of an air parcel. Vorticity measures the spin, and can be defined as relative vorticity (spin due to the winds) or absolute vorticity (wind spin plus spin of the earth).  Stretching stretching (strain deformation) (strain deformation), , is represented by . When , becomes more positive as becomes more positive. Likewise, becomes more negative as becomes more negative (so that the derivative is always positive). This makes the parcel grow in the direction. In the other direction, becomes more negative as becomes more positive and becomes more positive and becomes more negative (so that the derivative is always negative), making the parcel shrink in the direction (see ). The total area of the air parcel will remain the same if . Shown in is positive stretching deformation; negative stretching deformation occurs when the parcel is stretched in the direction.   Stretching deformation. In this example is positive and is negative. The axis of confluence is in the direction that confluence is occurring; the axis of diffluence is in the direction that diffluence is occurring.           Shearing shearing (shearing deformation) (or shearing deformation), is represented by . In this case, gets more positive as gets more positive and gets more negative as gets more negative, resulting in the air parcel part at lower getting pushed towards lower , and the air parcel part at higher getting pushed towards higher . At the same time, gets more positive as gets more positive and gets more negative as gets more negative, resulting in the air parcel part at lower getting pushed to lower and the air parcel part at higher getting pushed to higher ( ). The total area of the air parcel remains the same after the shearing occurs. Shearing deformation is positive when the air parcel stretches in the southwest\/northeast direction and contracts in the southeast\/northwest direction ( ). Shearing deformation is negative when the parcel stretches in the southeast\/northwest direction and contracts in the southwest\/northeast direction.   Shearing. In this example both and are positive. The axis of confluence is in the direction that confluence is occurring; the axis of diffluence is in the direction that diffluence is occurring.           As and show, both stretching and shearing cause stretching along the axis of diffluence and contraction along the axis of confluence, with the two axes at right angles to each other. These deformations result in weather fronts. In both cases, these motions cause some parts of the air parcel to move away from each other and some parts of the air parcel to move towards each other. The air coming together is called frontogenesis frontogenesis .    Kinematics of the Horizontal Wind Field  Any horizontal wind field can be defined using a Taylor series expansion about a point . The first-degree Taylor expansion can be described by  You may think of this as saying that the wind at location is the same as the wind at location modified by the gradient (think rate of change) times the distance between these two locations. That is,  Let's now take the first-degree Taylor expansion of the horizontal wind from and rewrite it in terms of the major kinematic properties - divergence , vorticity , stretching deformation , and shearing deformation . For simplicity, we will take to be and will denote , , and . Then, writing the whole as the sum of two halves, we get   Then, add and subtract (!) the following terms:  This gives  Collecting terms yields a first-degree Taylor expansion of the eastern wind.   Expansion of Eastern Wind     It is important to note the negative sign in front of the vorticity term. A similar argument produces an expansion of the northern wind .   Expansion of Northern Wind     For the northern component of the horizontal wind, note that the deformation term is negative.   Modeling the Horizontal Wind in Redwood Falls  Surface observations (station plots) near Redwood Falls, Minnesota on January 28, 2024 are shown on the map in and table in . Marshall is located 60 km (32.4 nautical miles) west of Redwood Falls. Olivia is located 35 km (18.9 nautical miles) north of Redwood Falls. Winthrop is located 61 km (32.9 nautical miles) east of Redwood Falls. Jeffers is located 62 km (33.5 nautical miles) south of Redwood Falls.   Surface observations near Redwood Falls, MN on January 28, 2024. Source: https:\/\/www.wrh.noaa.gov\/map\/?obs=true   Redwood Falls wind data     Surface observations near Redwood Falls    Location  Wind direction  Wind speed (kts)  (kts)  (kts)    Marshall (KMML)   8  6.13  5.14    Olivia (KOVL)   5  2.50  4.33    Redwood Falls (KRWF)   5  1.71  4.70    Winthrop (MN032)   6  -0.52  5.98    Jeffers (MN071)   10  8.19  5.74     For the horizontal wind vector , we estimate the divergence , the vorticity , stretching , and shearing at KRWF (Redwood Falls).  Divergence:  Vorticity:  Stretching:  Shearing:  The first-degree Taylor expansion of the horizontal wind at Redwood Falls is then given by  Similarly, we can expand the northern component of the wind at Redwood Falls to find   Winds in Belview  Belview is located 3.9 nautical miles north and 9.1 nautical miles west of Redwood Falls. Using the first-degree Taylor expansion, estimate the wind vector in Belview.   Using the first-degree Taylor expansion, we find and so that the wind vector knots.      Exercises  Calculating a First-Degree Taylor Polynomial for   (a) For ,    (b) Find the best linear approximation of for near .  Linear approximation =  (c) Use the approximation in part (b) to estimate .                    (a) We have and Thus  (b) Using the value and the partial derivatives in part (a) we have  (c) Using the linearization in part (b), we have       Calculating a Second-Degree Taylor Polynomial for   Find the second-order Taylor polynomial for at the point .              Calculating Second-Degree Taylor Polynomial for II   Find the best quadratic approximation, of for near ,          , the first and second derivatives are and Thus we find that and The best quadratic approximation for for near is       Calculating First and Second-Degree Taylor Polynomials for   0.1\/-0.1  Find the linear, , and quadratic, , Taylor polynomials valid near for      Find the approximations for generated by these, and compare with the exact value of the function:  At ,   ,   ,   .                            and the relevant derivatives are:    and Thus the linear approximation, to at , is given by: The quadratic approximation, to near , is given by:   Thus the linear and quadratic approximations are the same. The values of the approximations are and the exact value is       Modeling Wind near Jackson, MN Surface observations (station plots) near Jackson, Minnesota on March 17, 2024 are shown in and in . Worthington is located 26.3 nautical miles west of Jackson. Windom is located 16.0 nautical miles north of Jackson. Welcome is located 16.3 nautical miles east of Jackson. Terril (IA) is located 19.6 nautical miles south of Jackson.   Surface observations near Jackson, MN on March 17, 2024. Source: https:\/\/www.wrh.noaa.gov\/map\/?obs=true   Jackson wind data     Surface observations near Jackson, MN    Location  Wind direction  Wind speed (kts)  (kts)  (kts)    Worthington (KOTG)   17  2.95  -16.7    Windom (KMWM)   23  11.5  -19.9    Jackson (KMJQ)   19  9.5  -16.5    Welcome (MN148)   22  2.68  -21.8    Terril (F7399)   21  9.53  -18.7      Estimate the divergence at Jackson.  Estimate the vorticity at Jackson.  Estimate the stretching deformation at Jackson.  Estimate the shearing deformation at Jackson.  Give the first-degree Taylor expansion of the eastern component of the horizontal wind at Jackson.  Give the first-degree Taylor expansion of the northern component of the horizontal wind at Jackson.  Lake Park (IA) is 13.6 nautical miles west of Jackson and 10.9 nautical miles south of Jackson. Use the Taylor expansion of the horizontal wind found in (e) and (f) to estimate the horizontal wind at Lake Park.            The horizontal wind at Lake park is roughly knots.      "
},
{
  "id": "sec_taylor_polynomials_2var-2",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#sec_taylor_polynomials_2var-2",
  "type": "Motivating Questions",
  "number": "7.2",
  "title": "",
  "body": "   Can functions of two variables be approximated using Taylor polynomials?    When it comes to the horizontal wind, what are translation, divergence, vorticity, and deformation?    How can we use meteorological data to write a first-degree Taylor polynomial in two variables that models the horizontal wind? How is this Taylor polynomial related to translation, divergence, vorticity, and deformation?    "
},
{
  "id": "taylorplot2vars",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#taylorplot2vars",
  "type": "Figure",
  "number": "7.2.1",
  "title": "",
  "body": " Left: A surface . Middle: A surface together with the degree one Taylor approximation whose graph is a plane. Right: A surface together with the degree two Taylor approximation whose graph is a paraboloid.       "
},
{
  "id": "fittingexpnegxy",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#fittingexpnegxy",
  "type": "Example",
  "number": "7.2.2",
  "title": "Linear Approximation to <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(f(x)=e^{-x-y}\\)<\/span>.",
  "body": " Linear Approximation to  The best linear approximation to at is the tangent line: The best linear approximation to at is the tangent plane:   Left: The tangent line to at is a first-degree Taylor approximation (i.e. linear approximation) . Right: The tangent plane to at is a first-degree Taylor approximation (i.e. linear approximation) .       "
},
{
  "id": "TwoDTaylorapproximations",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#TwoDTaylorapproximations",
  "type": "Figure",
  "number": "7.2.4",
  "title": "",
  "body": " Left: The graph of a first-degree Taylor approximation to is a plane described by . Right: The graph of the second-degree Taylor approximation to is a paraboloid described by .      "
},
{
  "id": "fittingexpnegxydeg2",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#fittingexpnegxydeg2",
  "type": "Example",
  "number": "7.2.5",
  "title": "Quadratic Approximation to <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(f(x)=e^{-x-y}\\)<\/span>.",
  "body": " Quadratic Approximation to  The best quadratic approximation to at is The graph of this quadratic is a parabola. The best quadratic approximation to at is The graph of this quadratic is a paraboloid.   Left: The second-degree Taylor approximation to at is . Right: The second-degree Taylor approximation to at is .       "
},
{
  "id": "FiveMotions",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#FiveMotions",
  "type": "Figure",
  "number": "7.2.1",
  "title": "",
  "body": " Left: Translation, Divergence, Vorticity (rotation), Stretching (strain deformation), and Shearing (shear deformation).                  "
},
{
  "id": "sec_taylor_polynomials_2var-6-4",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#sec_taylor_polynomials_2var-6-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Translation "
},
{
  "id": "sec_taylor_polynomials_2var-6-5",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#sec_taylor_polynomials_2var-6-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "divergence "
},
{
  "id": "DivergenceAndVorticity",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#DivergenceAndVorticity",
  "type": "Figure",
  "number": "7.2.2",
  "title": "",
  "body": " Left: Horizontal divergence. Here, and are both positive. Right: The vertical component of vorticity. Here, is positive (in the diagram, is positive and is negative). The air parcel simply rotates counter-clockwise.          "
},
{
  "id": "sec_taylor_polynomials_2var-6-7",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#sec_taylor_polynomials_2var-6-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Vorticity "
},
{
  "id": "sec_taylor_polynomials_2var-6-9",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#sec_taylor_polynomials_2var-6-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Stretching "
},
{
  "id": "StretchDeformation",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#StretchDeformation",
  "type": "Figure",
  "number": "7.2.3",
  "title": "",
  "body": " Stretching deformation. In this example is positive and is negative. The axis of confluence is in the direction that confluence is occurring; the axis of diffluence is in the direction that diffluence is occurring.          "
},
{
  "id": "sec_taylor_polynomials_2var-6-11",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#sec_taylor_polynomials_2var-6-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Shearing "
},
{
  "id": "ShearDeformation",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#ShearDeformation",
  "type": "Figure",
  "number": "7.2.4",
  "title": "",
  "body": " Shearing. In this example both and are positive. The axis of confluence is in the direction that confluence is occurring; the axis of diffluence is in the direction that diffluence is occurring.          "
},
{
  "id": "sec_taylor_polynomials_2var-6-13",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#sec_taylor_polynomials_2var-6-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "frontogenesis "
},
{
  "id": "RedwoodWind",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#RedwoodWind",
  "type": "Example",
  "number": "7.2.1",
  "title": "Modeling the Horizontal Wind in Redwood Falls.",
  "body": " Modeling the Horizontal Wind in Redwood Falls  Surface observations (station plots) near Redwood Falls, Minnesota on January 28, 2024 are shown on the map in and table in . Marshall is located 60 km (32.4 nautical miles) west of Redwood Falls. Olivia is located 35 km (18.9 nautical miles) north of Redwood Falls. Winthrop is located 61 km (32.9 nautical miles) east of Redwood Falls. Jeffers is located 62 km (33.5 nautical miles) south of Redwood Falls.   Surface observations near Redwood Falls, MN on January 28, 2024. Source: https:\/\/www.wrh.noaa.gov\/map\/?obs=true   Redwood Falls wind data     Surface observations near Redwood Falls    Location  Wind direction  Wind speed (kts)  (kts)  (kts)    Marshall (KMML)   8  6.13  5.14    Olivia (KOVL)   5  2.50  4.33    Redwood Falls (KRWF)   5  1.71  4.70    Winthrop (MN032)   6  -0.52  5.98    Jeffers (MN071)   10  8.19  5.74     For the horizontal wind vector , we estimate the divergence , the vorticity , stretching , and shearing at KRWF (Redwood Falls).  Divergence:  Vorticity:  Stretching:  Shearing:  The first-degree Taylor expansion of the horizontal wind at Redwood Falls is then given by  Similarly, we can expand the northern component of the wind at Redwood Falls to find  "
},
{
  "id": "BelviewWind",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#BelviewWind",
  "type": "Checkpoint",
  "number": "7.2.4",
  "title": "Winds in Belview.",
  "body": "Winds in Belview  Belview is located 3.9 nautical miles north and 9.1 nautical miles west of Redwood Falls. Using the first-degree Taylor expansion, estimate the wind vector in Belview.   Using the first-degree Taylor expansion, we find and so that the wind vector knots.  "
},
{
  "id": "ez-taylor_polynomials_2var-4",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#ez-taylor_polynomials_2var-4",
  "type": "Exercise",
  "number": "7.2.5.1",
  "title": "Calculating a First-Degree Taylor Polynomial for <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(g(x,y)\\)<\/span>.",
  "body": "Calculating a First-Degree Taylor Polynomial for   (a) For ,    (b) Find the best linear approximation of for near .  Linear approximation =  (c) Use the approximation in part (b) to estimate .                    (a) We have and Thus  (b) Using the value and the partial derivatives in part (a) we have  (c) Using the linearization in part (b), we have      "
},
{
  "id": "ez-taylor_polynomials_2var-1",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#ez-taylor_polynomials_2var-1",
  "type": "Exercise",
  "number": "7.2.5.2",
  "title": "Calculating a Second-Degree Taylor Polynomial for <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(f(x,y)\\)<\/span>.",
  "body": "Calculating a Second-Degree Taylor Polynomial for   Find the second-order Taylor polynomial for at the point .             "
},
{
  "id": "ez-taylor_polynomials_2var-2",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#ez-taylor_polynomials_2var-2",
  "type": "Exercise",
  "number": "7.2.5.3",
  "title": "Calculating Second-Degree Taylor Polynomial for <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(f(x,y)\\)<\/span> II.",
  "body": "Calculating Second-Degree Taylor Polynomial for II   Find the best quadratic approximation, of for near ,          , the first and second derivatives are and Thus we find that and The best quadratic approximation for for near is      "
},
{
  "id": "ez-taylor_polynomials_2var-3",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#ez-taylor_polynomials_2var-3",
  "type": "Exercise",
  "number": "7.2.5.4",
  "title": "Calculating First and Second-Degree Taylor Polynomials for <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(f(x,y)\\)<\/span>.",
  "body": "Calculating First and Second-Degree Taylor Polynomials for   0.1\/-0.1  Find the linear, , and quadratic, , Taylor polynomials valid near for      Find the approximations for generated by these, and compare with the exact value of the function:  At ,   ,   ,   .                            and the relevant derivatives are:    and Thus the linear approximation, to at , is given by: The quadratic approximation, to near , is given by:   Thus the linear and quadratic approximations are the same. The values of the approximations are and the exact value is      "
},
{
  "id": "ez-wind-at-Jackson",
  "level": "2",
  "url": "sec_taylor_polynomials_2var.html#ez-wind-at-Jackson",
  "type": "Exercise",
  "number": "7.2.5.5",
  "title": "Modeling Wind near Jackson, MN.",
  "body": "Modeling Wind near Jackson, MN Surface observations (station plots) near Jackson, Minnesota on March 17, 2024 are shown in and in . Worthington is located 26.3 nautical miles west of Jackson. Windom is located 16.0 nautical miles north of Jackson. Welcome is located 16.3 nautical miles east of Jackson. Terril (IA) is located 19.6 nautical miles south of Jackson.   Surface observations near Jackson, MN on March 17, 2024. Source: https:\/\/www.wrh.noaa.gov\/map\/?obs=true   Jackson wind data     Surface observations near Jackson, MN    Location  Wind direction  Wind speed (kts)  (kts)  (kts)    Worthington (KOTG)   17  2.95  -16.7    Windom (KMWM)   23  11.5  -19.9    Jackson (KMJQ)   19  9.5  -16.5    Welcome (MN148)   22  2.68  -21.8    Terril (F7399)   21  9.53  -18.7      Estimate the divergence at Jackson.  Estimate the vorticity at Jackson.  Estimate the stretching deformation at Jackson.  Estimate the shearing deformation at Jackson.  Give the first-degree Taylor expansion of the eastern component of the horizontal wind at Jackson.  Give the first-degree Taylor expansion of the northern component of the horizontal wind at Jackson.  Lake Park (IA) is 13.6 nautical miles west of Jackson and 10.9 nautical miles south of Jackson. Use the Taylor expansion of the horizontal wind found in (e) and (f) to estimate the horizontal wind at Lake Park.            The horizontal wind at Lake park is roughly knots.   "
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
