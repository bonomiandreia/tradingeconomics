import { apiFetch as api } from "../utils/apiKey"


export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const countrySymbol = query.countrySymbol || 'MEX.BN.CAB.XOKA.CD'

  try {
    // const historical = await api<any[]>(`/worldBank/historical?s=${countrySymbol}`)
    const historical: any = [
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2000-06-15T00:00:00",
        "value": -1738067390.40673
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2001-06-15T00:00:00",
        "value": -418287193.4226
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2002-06-15T00:00:00",
        "value": -1395997085.63106
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2003-06-15T00:00:00",
        "value": -2123309062.29946
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2004-06-15T00:00:00",
        "value": -4683953458.77796
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2005-06-15T00:00:00",
        "value": -8025095173.24745
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2006-06-15T00:00:00",
        "value": -7880410400.33401
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2007-06-15T00:00:00",
        "value": -9324756786.32144
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2008-06-15T00:00:00",
        "value": -10263738398.2606
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2009-06-15T00:00:00",
        "value": -3010196174.38937
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2010-06-15T00:00:00",
        "value": -3429382027.22571
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2011-06-15T00:00:00",
        "value": -4822842307.09516
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2012-06-15T00:00:00",
        "value": -6887303081.33397
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2013-06-15T00:00:00",
        "value": -5836899943.13668
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2014-06-15T00:00:00",
        "value": -6223946463.57655
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2015-06-15T00:00:00",
        "value": -4662724381.9611
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2016-06-15T00:00:00",
        "value": -4016161125.37236
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2017-06-15T00:00:00",
        "value": -5802604349.32491
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2018-06-15T00:00:00",
        "value": -8576001804.42343
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2019-06-15T00:00:00",
        "value": -5944952527.40173
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2020-06-15T00:00:00",
        "value": -2400615210.42535
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2021-06-15T00:00:00",
        "value": -14803987779.0309
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2022-06-15T00:00:00",
        "value": -21627319276.5946
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2023-06-15T00:00:00",
        "value": -17065136806.7006
      },
      {
        "symbol": "nzl.bn.cab.xoka.cd",
        "date": "2024-06-15T00:00:00",
        "value": -15978248932.0909
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1970-06-15T00:00:00",
        "value": -253227686.28052
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1971-06-15T00:00:00",
        "value": 364813610.4176
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1972-06-15T00:00:00",
        "value": 585837022.64309
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1973-06-15T00:00:00",
        "value": 1451714465.95723
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1974-06-15T00:00:00",
        "value": -529347832.32724
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1975-06-15T00:00:00",
        "value": -308065689.18738
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1976-06-15T00:00:00",
        "value": -1602305828.5999
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1977-06-15T00:00:00",
        "value": -2120382778.27113
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1978-06-15T00:00:00",
        "value": -190965360.18771
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1979-06-15T00:00:00",
        "value": -2348884119.57885
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1980-06-15T00:00:00",
        "value": -4331108818.25201
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1981-06-15T00:00:00",
        "value": -2777532565.50294
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1982-06-15T00:00:00",
        "value": -3285067818.61914
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1983-06-15T00:00:00",
        "value": -724851573.77265
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1984-06-15T00:00:00",
        "value": 735902006.32425
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1985-06-15T00:00:00",
        "value": -1010297686.76072
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1986-06-15T00:00:00",
        "value": 32367359.17318
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1987-06-15T00:00:00",
        "value": -21284436.81583
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1988-06-15T00:00:00",
        "value": -533965375.02606
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1989-06-15T00:00:00",
        "value": -3101175938.56306
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1990-06-15T00:00:00",
        "value": -6338855169.81612
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1991-06-15T00:00:00",
        "value": -4653082670.27569
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1992-06-15T00:00:00",
        "value": -8827494542.40495
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1993-06-15T00:00:00",
        "value": -4159269844.74484
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1994-06-15T00:00:00",
        "value": 742624072.839
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1995-06-15T00:00:00",
        "value": 4940367414.439
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1996-06-15T00:00:00",
        "value": 5892259171.38237
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1997-06-15T00:00:00",
        "value": 7405693192.05534
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1998-06-15T00:00:00",
        "value": 9547496431.14824
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "1999-06-15T00:00:00",
        "value": 10777831815.5822
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2000-06-15T00:00:00",
        "value": 11688841495.047
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2001-06-15T00:00:00",
        "value": 14965935660.7795
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2002-06-15T00:00:00",
        "value": 12452537009.681
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2003-06-15T00:00:00",
        "value": 19571954143.0124
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2004-06-15T00:00:00",
        "value": 22902294715.1108
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2005-06-15T00:00:00",
        "value": 23583338994.913
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2006-06-15T00:00:00",
        "value": 34468824245.4933
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2007-06-15T00:00:00",
        "value": 39927516579.5256
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2008-06-15T00:00:00",
        "value": 40802935942.2616
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2009-06-15T00:00:00",
        "value": 25918197361.0024
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2010-06-15T00:00:00",
        "value": 29195824932.3735
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2011-06-15T00:00:00",
        "value": 31438301866.0035
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2012-06-15T00:00:00",
        "value": 30417334377.5637
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2013-06-15T00:00:00",
        "value": 25320636809.0672
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2014-06-15T00:00:00",
        "value": 18778925807.9979
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2015-06-15T00:00:00",
        "value": 13013249146.5039
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2016-06-15T00:00:00",
        "value": 9496561214.07979
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2017-06-15T00:00:00",
        "value": 11120126978.6338
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2018-06-15T00:00:00",
        "value": 12085126948.9496
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2019-06-15T00:00:00",
        "value": 28349300350.2202
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2020-06-15T00:00:00",
        "value": 31605387208.0562
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2021-06-15T00:00:00",
        "value": 42711491288.7004
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2022-06-15T00:00:00",
        "value": 27404488926.4232
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2023-06-15T00:00:00",
        "value": 40818957053.1156
      },
      {
        "symbol": "swe.bn.cab.xoka.cd",
        "date": "2024-06-15T00:00:00",
        "value": 45274385254.6836
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1975-06-15T00:00:00",
        "value": -606302400.02964
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1976-06-15T00:00:00",
        "value": -439752683.29512
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1977-06-15T00:00:00",
        "value": -1097445443.49694
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1978-06-15T00:00:00",
        "value": -1152723463.56789
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1979-06-15T00:00:00",
        "value": -2086720157.63075
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1980-06-15T00:00:00",
        "value": -2076322210.57714
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1981-06-15T00:00:00",
        "value": -2571149248.40976
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1982-06-15T00:00:00",
        "value": -1003125373.70728
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1983-06-15T00:00:00",
        "value": -2873463763.36314
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1984-06-15T00:00:00",
        "value": -2108581330.75726
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1985-06-15T00:00:00",
        "value": -1537321795.15354
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1986-06-15T00:00:00",
        "value": 247028906.86913
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1987-06-15T00:00:00",
        "value": -366478856.25808
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1988-06-15T00:00:00",
        "value": -1654360231.81468
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1989-06-15T00:00:00",
        "value": -2497933326.984
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1990-06-15T00:00:00",
        "value": -7281096403.13198
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1991-06-15T00:00:00",
        "value": -7571451944.14396
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1992-06-15T00:00:00",
        "value": -6303407263.87281
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1993-06-15T00:00:00",
        "value": -6354894271.91774
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1994-06-15T00:00:00",
        "value": -8058935439.65495
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1995-06-15T00:00:00",
        "value": -13581744650.1334
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1996-06-15T00:00:00",
        "value": -14691474457.2347
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1997-06-15T00:00:00",
        "value": -3021103816.89098
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1998-06-15T00:00:00",
        "value": 14242468917.3637
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "1999-06-15T00:00:00",
        "value": 12427871816.9766
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2000-06-15T00:00:00",
        "value": 9313150884.73666
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2001-06-15T00:00:00",
        "value": 5100898193.97192
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2002-06-15T00:00:00",
        "value": 4654204782.89078
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2003-06-15T00:00:00",
        "value": 4771810540.67726
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2004-06-15T00:00:00",
        "value": 2759369127.41909
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2005-06-15T00:00:00",
        "value": -7641770000.00001
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2006-06-15T00:00:00",
        "value": 2314729999.99999
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2007-06-15T00:00:00",
        "value": 15583700000
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2008-06-15T00:00:00",
        "value": 930870000.00003
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2009-06-15T00:00:00",
        "value": 22189105411.706
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2010-06-15T00:00:00",
        "value": 11486104954.6268
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2011-06-15T00:00:00",
        "value": 9426846325.12522
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2012-06-15T00:00:00",
        "value": -4899255872.44313
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2013-06-15T00:00:00",
        "value": -8833457142.2453
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2014-06-15T00:00:00",
        "value": 11642907013.7683
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2015-06-15T00:00:00",
        "value": 27752906126.7839
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2016-06-15T00:00:00",
        "value": 43438000973.7382
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2017-06-15T00:00:00",
        "value": 43951862494.1599
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2018-06-15T00:00:00",
        "value": 28478892998.8756
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2019-06-15T00:00:00",
        "value": 38256392431.4939
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2020-06-15T00:00:00",
        "value": 20933463494.5353
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2021-06-15T00:00:00",
        "value": -10722484401.6916
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2022-06-15T00:00:00",
        "value": -17161815383.1185
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2023-06-15T00:00:00",
        "value": 7411608122.97439
      },
      {
        "symbol": "tha.bn.cab.xoka.cd",
        "date": "2024-06-15T00:00:00",
        "value": 11089443401.8902
      }
    ]

    return historical
  } catch (error: any) {
    console.error(`Error fetching list of values from countries ${countrySymbol}:`, error);

    setResponseStatus(event, error.status)
    return {
      error: 'Failed to fetch list of values from countries.',
      details: error.message,
    }
  }
})