import { BodoniModa_700Bold, useFonts as useBodoni } from '@expo-google-fonts/bodoni-moda';
import { Raleway_400Regular, Raleway_700Bold, useFonts as useRaleway } from '@expo-google-fonts/raleway';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, Platform, Animated as RNAnimated, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { Easing, Extrapolate, FadeIn, FadeInUp, ZoomIn, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get("window");

const PALETTE = {
  primary: '#6C63FF',
  accent: '#48B1F3',
  background: '#F3F6FD',
  highlight: '#FFD166',
  text: '#22223B',
  textMuted: '#4A4E69',
  card: '#FFFFFF',
};

const LUXURY = {
  background: '#F7F6F2', // premium light
  card: 'rgba(255,255,255,0.85)',
  cardBorder: 'rgba(212,175,55,0.5)', // gold
  gold: '#D4AF37',
  champagne: '#F7E7CE',
  text: '#23272F', // deep charcoal
  textMuted: '#4A4E69', // navy/gray
  shadow: 'rgba(212,175,55,0.10)',
};

const techCards = [
  {
    key: "html",
    title: "HTML",
    desc: "Structure your web pages with semantic markup.",
    color: PALETTE.primary,
    icon: <MaterialCommunityIcons name="language-html5" size={38} color={PALETTE.primary} />,
  },
  {
    key: "css",
    title: "CSS",
    desc: "Style and animate your content beautifully.",
    color: PALETTE.accent,
    icon: <FontAwesome5 name="css3-alt" size={38} color={PALETTE.accent} />,
  },
  {
    key: "js",
    title: "JavaScript",
    desc: "Add interactivity and logic to your sites.",
    color: PALETTE.highlight,
    icon: <Ionicons name="logo-javascript" size={38} color={PALETTE.highlight} />,
  },
];

const testimonials = [
  {
    name: "Alex J.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "This is the best docs site for web dev I've ever used! The examples are so interactive and easy to follow.",
  },
  {
    name: "Priya S.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "I love the mobile experience and the beautiful animations. Learning web tech has never been this fun!",
  },
  {
    name: "Chen L.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    quote: "The code samples and try buttons make it so easy to experiment. Highly recommended!",
  },
];

export default function Index() {
  const router = useRouter();
  // --- Typewriter for headline, subtitle, and button ---
  const headline = "Web Docs Made Easy";
  const subtitle = "The ultimate resource for learning HTML, CSS, and JavaScript with interactive, engaging examples.";
  const buttonText = "Get Started";

  const [displayedHeadline, setDisplayedHeadline] = React.useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = React.useState("");
  const [displayedButton, setDisplayedButton] = React.useState("");
  const [typewriterDone, setTypewriterDone] = React.useState(false);

  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedHeadline(headline.slice(0, i + 1));
      i++;
      if (i === headline.length) {
        clearInterval(interval);
        // Start subtitle typewriter
        let j = 0;
        const subtitleInterval = setInterval(() => {
          setDisplayedSubtitle(subtitle.slice(0, j + 1));
          j++;
          if (j === subtitle.length) {
            clearInterval(subtitleInterval);
            // Start button typewriter
            let k = 0;
            const buttonInterval = setInterval(() => {
              setDisplayedButton(buttonText.slice(0, k + 1));
              k++;
              if (k === buttonText.length) {
                clearInterval(buttonInterval);
                setTypewriterDone(true);
              }
            }, 40);
          }
        }, 18);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // --- Pulse animation for logo (only after typewriterDone) ---
  const pulse = useSharedValue(1);
  React.useEffect(() => {
    if (typewriterDone) {
      pulse.value = withRepeat(
        withSequence(
          withTiming(1.08, { duration: 900, easing: Easing.inOut(Easing.ease) }),
          withTiming(1, { duration: 900, easing: Easing.inOut(Easing.ease) })
        ),
        -1,
        true
      );
    }
  }, [typewriterDone]);
  const logoPulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulse.value }],
  }));

  // --- Shimmer animation for gold blob (only after typewriterDone) ---
  const shimmer = useSharedValue(0);
  React.useEffect(() => {
    if (typewriterDone) {
      shimmer.value = withRepeat(
        withSequence(
          withTiming(1, { duration: 1200 }),
          withTiming(0, { duration: 1200 })
        ),
        -1,
        false
      );
    }
  }, [typewriterDone]);
  const goldBlobShimmerStyle = useAnimatedStyle(() => ({
    opacity: 0.18 + shimmer.value * 0.12,
    // Optionally, you could animate backgroundColor or add a gradient shimmer
  }));

  // Animated logo scale (use react-native Animated)
  const logoAnim = React.useRef(new RNAnimated.Value(0)).current;
  React.useEffect(() => {
    RNAnimated.timing(logoAnim, {
      toValue: 1,
      duration: 900,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, []);

  // Carousel state
  const [cardIndex, setCardIndex] = React.useState(0);
  const cardScrollRef = React.useRef(null);

  // Testimonial carousel state
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  const testimonialScrollRef = React.useRef(null);

  // Scroll animation shared value (must be before any early return)
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });
  // Parallax for gold blob
  const goldBlobStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(scrollY.value, [0, 200], [0, -60], Extrapolate.CLAMP) },
      { scale: interpolate(scrollY.value, [0, 200], [1, 1.2], Extrapolate.CLAMP) },
    ],
  }));
  // Fade/slide-in for hero card
  const heroCardStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 60], [1, 0.85], Extrapolate.CLAMP),
    transform: [
      { translateY: interpolate(scrollY.value, [0, 60], [0, -20], Extrapolate.CLAMP) },
    ],
  }));

  // --- Pulse animation for CTA button (only after typewriterDone) ---
  const ctaPulse = useSharedValue(1);
  React.useEffect(() => {
    if (typewriterDone) {
      ctaPulse.value = withRepeat(
        withSequence(
          withTiming(1.06, { duration: 800, easing: Easing.inOut(Easing.ease) }),
          withTiming(1, { duration: 800, easing: Easing.inOut(Easing.ease) })
        ),
        -1,
        true
      );
    }
  }, [typewriterDone]);
  const ctaPulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: ctaPulse.value }],
  }));

  const [fontsLoaded] = useRaleway({ Raleway_400Regular, Raleway_700Bold });
  const [bodoniLoaded] = useBodoni({ BodoniModa_700Bold });
  if (!fontsLoaded || !bodoniLoaded) return null;

  return (
    <Animated.ScrollView
      contentContainerStyle={luxuryStyles.container}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
    >
      {/* Hero Section with animated gold blob */}
      <View style={luxuryStyles.heroWrapper}>
        <Animated.View style={[luxuryStyles.goldBlob, goldBlobStyle, goldBlobShimmerStyle]} />
        <Animated.View style={[luxuryStyles.heroCard, heroCardStyle]}>
          <Animated.Image
            source={require("../../assets/images/react-logo.png")}
            style={[luxuryStyles.logo, typewriterDone ? logoPulseStyle : {}, { shadowColor: LUXURY.gold, shadowOpacity: 0.3, shadowRadius: 16, shadowOffset: { width: 0, height: 8 } }]}
            resizeMode="contain"
          />
          <Text style={[luxuryStyles.heroTitle, { fontFamily: 'BodoniModa_700Bold' }]}>{displayedHeadline}</Text>
          <Text style={[luxuryStyles.heroSubtitle, { fontFamily: 'Raleway_400Regular' }]}> {displayedSubtitle.split(/(HTML|CSS|JavaScript)/g).map((part, idx) => {
            if (["HTML", "CSS", "JavaScript"].includes(part)) {
              return <Text key={idx} style={{ color: LUXURY.gold, fontWeight: 'bold' }}>{part}</Text>;
            }
            return <React.Fragment key={idx}>{part}</React.Fragment>;
          })}</Text>
          <Animated.View style={typewriterDone ? ctaPulseStyle : undefined}>
            <TouchableOpacity style={luxuryStyles.ctaButton} disabled={displayedButton.length < buttonText.length}>
              <Text style={luxuryStyles.ctaText}>{displayedButton}</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </View>

      {/* Tech Cards Carousel - centered, one prominent card, proper margin */}
      <View style={luxuryStyles.carouselWrapper}>
        <ScrollView
          ref={cardScrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToInterval={width * 0.9 + 16}
          decelerationRate="normal"
          snapToAlignment="center"
          contentContainerStyle={{ alignItems: 'center', paddingHorizontal: (width * 0.05) }}
          onScroll={e => {
            const idx = Math.round(e.nativeEvent.contentOffset.x / (width * 0.9 + 16));
            setCardIndex(idx);
          }}
          scrollEventThrottle={16}
        >
          {techCards.map((card, idx) => (
            <Animated.View
              key={card.key}
              entering={FadeInUp.delay(200 * idx).duration(700)}
              style={[
                luxuryStyles.carouselCard,
                {
                  borderColor: card.color,
                  shadowColor: card.color,
                  transform: [{ scale: cardIndex === idx ? 1 : 0.95 }],
                  opacity: cardIndex === idx ? 1 : 0.7,
                },
              ]}
            >
              <View style={luxuryStyles.cardIconBox}>{card.icon}</View>
              <Text style={[luxuryStyles.cardTitle, { color: card.color }]}>{card.title}</Text>
              <Text style={luxuryStyles.cardDesc}>{card.desc}</Text>
            </Animated.View>
          ))}
        </ScrollView>
        <View style={luxuryStyles.carouselDots}>
          {techCards.map((_, idx) => (
            <View
              key={idx}
              style={[luxuryStyles.carouselDot, cardIndex === idx && luxuryStyles.carouselDotActive]}
            />
          ))}
        </View>
      </View>

      {/* Samples Section - stack vertically, full width, spacing */}
      <Animated.View entering={FadeIn.delay(600).duration(800)} style={luxuryStyles.samplesSection}>
        <Text style={luxuryStyles.sectionTitle}>Samples</Text>
        <View style={luxuryStyles.samplesColumn}>
          {techCards.map((card, idx) => (
            <Animated.View key={card.key} entering={FadeInUp.delay(200 * idx).duration(700)} style={luxuryStyles.sampleCard}>
              <Text style={[luxuryStyles.sampleLabel, { color: card.color }]}>{card.title}</Text>
              <View style={luxuryStyles.codeBox}>
                <Text style={[luxuryStyles.code, { color: '#000' }]}>
                  {idx === 0 && `<button>Click Me!</button>`}
                  {idx === 1 && `button {\n  background: #61dafb;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n}`}
                  {idx === 2 && `document.querySelector('button').onclick = () => alert('Hello!');`}
                </Text>
              </View>
              <TouchableOpacity style={[luxuryStyles.tryBtn, { backgroundColor: card.color + 'cc' }]}>
                <Text style={luxuryStyles.tryBtnText}>Try</Text>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </Animated.View>

      {/* Testimonial - one at a time, centered, swipeable */}
      <View style={luxuryStyles.testimonialWrapper}>
        <Text style={luxuryStyles.sectionTitle}>Testimonials</Text>
        <ScrollView
          ref={testimonialScrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToInterval={width * 0.9 + 16}
          decelerationRate="normal"
          snapToAlignment="center"
          contentContainerStyle={{ alignItems: 'center', paddingHorizontal: (width * 0.05) }}
          onScroll={e => {
            const idx = Math.round(e.nativeEvent.contentOffset.x / (width * 0.9 + 16));
            setTestimonialIndex(idx);
          }}
          scrollEventThrottle={16}
        >
          {testimonials.map((t, idx) => (
            <Animated.View
              key={t.name}
              entering={FadeInUp.delay(200 * idx).duration(700)}
              style={[
                luxuryStyles.testimonialCard,
                {
                  shadowColor: PALETTE.primary,
                  transform: [{ scale: testimonialIndex === idx ? 1 : 0.95 }],
                  opacity: testimonialIndex === idx ? 1 : 0.7,
                },
              ]}
            >
              <Image source={{ uri: t.avatar }} style={luxuryStyles.testimonialAvatar} />
              <Text style={luxuryStyles.testimonialQuote}>{`“${t.quote}”`}</Text>
              <Text style={luxuryStyles.testimonialName}>{t.name}</Text>
            </Animated.View>
          ))}
        </ScrollView>
        <View style={luxuryStyles.carouselDots}>
          {testimonials.map((_, idx) => (
            <View
              key={idx}
              style={[luxuryStyles.carouselDot, testimonialIndex === idx && luxuryStyles.carouselDotActive]}
            />
          ))}
        </View>
      </View>

      {/* Footer */}
      <Animated.Text entering={ZoomIn.delay(1000).duration(600)} style={luxuryStyles.footer}>
        © {new Date().getFullYear()} Web Docs. All rights reserved.
      </Animated.Text>
    </Animated.ScrollView>
  );
}

const luxuryStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: LUXURY.background,
    paddingVertical: 40,
    minHeight: '100%',
  },
  heroWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 48,
    minHeight: 400,
    position: 'relative',
  },
  goldBlob: {
    position: 'absolute',
    top: -60,
    left: -60,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: LUXURY.gold,
    opacity: 0.18,
    filter: 'blur(32px)',
    zIndex: 0,
  },
  heroCard: {
    width: '90%',
    backgroundColor: LUXURY.card,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: LUXURY.cardBorder,
    padding: 36,
    alignItems: 'center',
    shadowColor: LUXURY.shadow,
    shadowOpacity: 0.25,
    shadowRadius: 32,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8,
    zIndex: 2,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 38,
    color: LUXURY.text,
    marginBottom: 12,
    letterSpacing: 1.2,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 18,
    color: LUXURY.textMuted,
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 28,
  },
  ctaButton: {
    backgroundColor: LUXURY.gold,
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 32,
    shadowColor: LUXURY.gold,
    shadowOpacity: 0.25,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  ctaText: {
    color: LUXURY.background,
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
    fontFamily: 'Raleway_700Bold',
  },
  carouselWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 36,
    minHeight: 180,
  },
  carouselCard: {
    width: width * 0.9,
    borderRadius: 22,
    padding: 24,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: PALETTE.primary,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
    borderWidth: 2,
    backgroundColor: PALETTE.card,
  },
  cardIconBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: PALETTE.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    shadowColor: PALETTE.primary,
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  cardDesc: {
    fontSize: 15,
    color: PALETTE.textMuted,
    textAlign: "center",
    lineHeight: 20,
  },
  carouselDots: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center',
  },
  carouselDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 4,
  },
  carouselDotActive: {
    backgroundColor: PALETTE.primary,
    width: 12,
  },
  samplesSection: {
    width: '90%',
    backgroundColor: PALETTE.card,
    borderRadius: 18,
    padding: 22,
    marginBottom: 36,
    shadowColor: PALETTE.primary,
    shadowOpacity: 0.07,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: PALETTE.text,
    marginBottom: 18,
    textAlign: "center",
  },
  samplesColumn: {
    flexDirection: "column",
    gap: 18,
  },
  sampleCard: {
    width: '100%',
    alignItems: "center",
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    shadowColor: PALETTE.primary,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    borderWidth: 2,
    backgroundColor: PALETTE.background,
  },
  sampleLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  codeBox: {
    backgroundColor: '#E9ECF5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    width: '100%',
  },
  code: {
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 15,
    color: PALETTE.text,
  },
  tryBtn: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignSelf: 'center',
    shadowColor: PALETTE.highlight,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    marginTop: 6,
    backgroundColor: PALETTE.highlight,
  },
  tryBtnText: {
    color: PALETTE.text,
    fontWeight: "bold",
    fontSize: 15,
  },
  testimonialWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 36,
    minHeight: 180,
  },
  testimonialCard: {
    width: width * 0.9,
    borderRadius: 22,
    padding: 24,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: PALETTE.primary,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
    backgroundColor: PALETTE.card,
  },
  testimonialAvatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginBottom: 12,
  },
  testimonialQuote: {
    fontSize: 15,
    color: PALETTE.textMuted,
    textAlign: "center",
    marginBottom: 10,
    fontStyle: "italic",
  },
  testimonialName: {
    fontSize: 16,
    fontWeight: "bold",
    color: PALETTE.text,
  },
  footer: {
    fontSize: 13,
    color: PALETTE.textMuted,
    textAlign: "center",
    marginTop: 18,
    marginBottom: 8,
  },
});
