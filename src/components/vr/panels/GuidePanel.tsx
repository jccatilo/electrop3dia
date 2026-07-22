'use client';

import { Container, Text, withOpacity } from '@react-three/uikit';
import { getGuideByUrl} from '@/lib/constants/componentGuides';
import { VRColors, sanitizeVRText } from './theme';
import type { GuideSection } from '@/types/Component';

interface GuidePanelProps {
  colors: VRColors;
  modelUrl: string | null;
}

function SectionBlock({ section, colors }: { section: GuideSection; colors: VRColors }) {
  return (
    <Container flexDirection="column" gap={6} flexShrink={0}>
      <Text fontSize={13} fontWeight={700} color={colors.accent}>
        {sanitizeVRText(section.title)}
      </Text>
      {Array.isArray(section.content) ? (
        section.content.map((line, i) => (
          <Text key={i} fontSize={12} color={colors.text}>
            {`- ${sanitizeVRText(line)}`}
          </Text>
        ))
      ) : (
        <Text fontSize={12} color={colors.text}>
          {sanitizeVRText(section.content)}
        </Text>
      )}
    </Container>
  );
}

export function GuidePanel({ colors, modelUrl }: GuidePanelProps) {
  const guide = modelUrl ? getGuideByUrl(modelUrl) : null;

  return (
    <Container
      sizeX={0.95}
      sizeY={0.5}
      pixelSize={0.0015}
      flexDirection="column"
      backgroundColor={withOpacity(colors.panelBg, colors.panelOpacity)}
      borderWidth={2}
      borderColor={colors.panelBorder}
      borderRadius={12}
      padding={12}
      gap={6}
    >
      <Text fontSize={16} fontWeight={700} color={colors.accent}>
        {guide ? sanitizeVRText(guide.title) : 'Component Guide'}
      </Text>

      {guide ? (
        <Container
          flexGrow={1}
          flexDirection="column"
          overflow="scroll"
          scrollbarWidth={3}
          scrollbarColor={colors.accent}
          gap={6}
          paddingRight={5}
        >
          {guide.sections.map((section, i) => (
            <SectionBlock key={i} section={section} colors={colors} />
          ))}

          {(guide.proTips && guide.proTips.length > 0 || guide.commonMistakes && guide.commonMistakes.length > 0) && (
            <Container flexDirection="column" gap={5} flexShrink={0}>
              {guide.proTips && guide.proTips.length > 0 && (
                <Container flexDirection="column" gap={2} flexShrink={0}>
                  <Text fontSize={11} fontWeight={700} color={colors.tipText}>
                    Pro Tips
                  </Text>
                  {guide.proTips.map((tip, i) => (
                    <Text key={i} fontSize={10.5} color={colors.text} whiteSpace="nowrap" overflow="hidden" title={sanitizeVRText(tip)}>
                      {sanitizeVRText(tip)}
                    </Text>
                  ))}
                </Container>
              )}

              {guide.commonMistakes && guide.commonMistakes.length > 0 && (
                <Container flexDirection="column" gap={2} flexShrink={0}>
                  <Text fontSize={11} fontWeight={700} color={colors.warnText}>
                    Common Mistakes
                  </Text>
                  {guide.commonMistakes.map((mistake, i) => (
                    <Text key={i} fontSize={10.5} color={colors.text} whiteSpace="nowrap" overflow="hidden" title={sanitizeVRText(mistake)}>
                      {sanitizeVRText(mistake)}
                    </Text>
                  ))}
                </Container>
              )}
            </Container>
          )}
        </Container>
      ) : (
        <Container flexGrow={1} alignItems="center" justifyContent="center">
          <Text fontSize={11.5} color={colors.textMuted}>
            {modelUrl ? 'Guide coming soon for this component' : 'Select a component to see its guide'}
          </Text>
        </Container>
      )}
    </Container>
  );
}
