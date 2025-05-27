import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ padding: 10 }}>
      <h1>Aventura</h1>
      <ScrollView horizontal={true}>
        <View style={{borderWidth: 1, height: 300, width: 200, margin: 20,}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://cdn.shopify.com/s/files/1/0596/3035/4493/files/mv5bntg2oty2odg5of5bml5banbnxkftztcwodm5mtyxoa._v1_fmjpg_ux1000_-1701843976064_800x_6bff3511-d77f-4d4c-8acf-156c6a0cb34a_1024x1024.webp'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
           <Image style={{height: 300, width: 200}} source={{uri:'https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-01744-7ee7fa554b354294de17181315528687-480-0.jpg'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
           <Image style={{height: 300, width: 200}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSA3hsSPA1wqu-ayaR1hAcStcs_OHjpx-6Tw&s'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
             <Image style={{height: 300, width: 200}} source={{uri:'https://s2-globo-play.glbimg.com/Bn6YNxp4bCyVnAwSGzyCWXDRFRE=/362x536/https://s2-globo-play.glbimg.com/NFSzXOGymeoMxX7qTz5vRyvVjhw=/https://s2.glbimg.com/gb1pyazfkeQ7Z2Cgy5dURGoNbQI=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2024/b/C/yRF3vaR5q99z8uzpDJiA/10942696-poster.jpg'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
            <Image style={{height: 300, width: 200}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKd4-mkTrnBczAnENPGz0lSja4aBlsRlnq4g&s'}}/>
        </View>
      </ScrollView>

      <ScrollView style={{ padding: 10 }}>
      <h1>Terror</h1>
      <ScrollView horizontal={true}>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20 }}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdpnc6JANHILW2vLxbUquLlhskP_Y1pM2d7g&s'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
            <Image style={{height: 300, width: 200}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqmMxNlw_OVQ5fLGL4wAkoMRKkf-qAqa8ng&s'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://ingresso-a.akamaihd.net/prd/img/movie/terrifier-3/d18eb521-d0a5-4e83-bd19-b01deb9b19d1.webp'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
            <Image style={{height: 300, width: 200}} source={{uri:'https://i.pinimg.com/originals/9f/43/35/9f43358232d95dd5a272cf1b61eecddc.jpg'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
            <Image style={{height: 300, width: 200}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8vKGT9NurRuLwk_VS9O4XdvW2TqPpK4r19MsCwe0BIK7gyeINX10NXcPWHKDKSinoS4&usqp=CAU'}}/>
        </View>
      </ScrollView>
    </ScrollView>

     <ScrollView style={{ padding: 10 }}>
      <h1>Comédia</h1>
      <ScrollView horizontal={true}>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://cinepop.com.br/wp-content/uploads/2019/08/Os-Parc%CC%A7as-2.jpg'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://mir-s3-cdn-cf.behance.net/project_modules/hd/3511e920706619.56364921b56c1.jpg'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://cinema10.com.br/upload/filmes/filmes_10626_images.jpg'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://s2-globo-play.glbimg.com/E1W5JrjyFT-qTGPS-UEKMhHZO98=/362x536/https://s2-globo-play.glbimg.com/1rsMGFG9bGLmYnJIBNXSdhpzTRY=/https://s2.glbimg.com/N2eOBgfkzfMu6Shr59Qvsnxsjfc=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2025/Y/L/aNthIATluU99PW7N6OsA/2025-4772-os-farofeiros-2-poster.jpg'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200, margin: 20}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://br.web.img3.acsta.net/c_310_420/pictures/22/09/13/20/35/4684029.png'}}/>
        </View>
      </ScrollView>
    </ScrollView>

     <ScrollView style={{ padding: 10 }}>
      <h1>Infantil</h1>
      <ScrollView horizontal={true}>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://i.pinimg.com/736x/6d/4f/ff/6d4fff2b57b06123ec4da5f1ba4bbc2e.jpg'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtECXmaXkzyDFlIVer8a-LzFAPyrF2QxRunQ&s'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://br.web.img2.acsta.net/medias/nmedia/18/91/54/02/20150796.jpg'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://cinema10.com.br/upload/filmes/filmes_6020_croods2_5.jpg?default=poster'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200,  margin: 20}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://s2-globo-play.glbimg.com/L62WfCGq0TbFqKoaXp6n-S7IW2U=/362x536/https://s2-globo-play.glbimg.com/sZJ7tHO3N47na3ezAmulPUpEzD0=/https://s2.glbimg.com/ER8tz9U9ujMBP1do661iKkS2kNQ=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2025/m/B/t76eTcQPCUSELqjodsCQ/11776561-poster.jpg'}}/>
        </View>
      </ScrollView>
    </ScrollView>

     <ScrollView style={{ padding: 10 }}>
      <h1>Ação</h1>
      <ScrollView horizontal={true}>
        <View style={{borderWidth: 1, height: 300, width: 200, margin: 20}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBz4pM5a46mnq6RtyGsdFZ6eyroWptU4jgQ&s'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200, margin: 20}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://s2-globo-play.glbimg.com/E1mj4Fm_vPtq6M2ZEGSpdEfItMI=/362x536/https://s2-globo-play.glbimg.com/6v7KDUmm1nm_qwV7XQivEEGMI14=/https://s2.glbimg.com/dsOPfB1FWk_XLhR9APy5T8q71jY=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2024/Z/D/GSdh7dQH2AMBITizhSmQ/11327092-poster.jpg'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200, margin: 20}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://updateordie.com/wp-content/uploads/2024/04/MV5BMTUxNDc4ZDktZDFhNi00Y2NlLTkxMDctMWVmYTQ0ODJjYWUzXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX280_CR00280414_.jpg'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200, margin: 20}}>
          <Image style={{height: 300, width: 200}} source={{uri:'https://updateordie.com/wp-content/uploads/2024/04/MV5BMWRkNTMxNzQtN2RkMS00OTE0LWE3MTktYjk4MTU5NTgwN2Q0XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UY414_CR10280414_.jpg'}}/>
        </View>
        <View style={{borderWidth: 1, height: 300, width: 200, margin: 20}}>
           <Image style={{height: 300, width: 200}} source={{uri:'https://casaldougkelly.com.br/wp-content/uploads/2024/12/blindado.png'}}/>
        </View>
      </ScrollView>
    </ScrollView>    
    </ScrollView>

    
    
  );
}
