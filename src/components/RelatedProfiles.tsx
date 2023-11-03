interface RelatedProfilesProps {
  relatedProfiles: {
    name: string;
    surname: string;
    description: string;
    quote: string;
    bgColor: string;
  }[];
  onClick?: ({
    name,
    surname,
    description,
    quote,
    bgColor,
  }: {
    name: string;
    surname: string;
    description: string;
    quote: string;
    bgColor?: string;
  }) => void;
}

export const RelatedProfiles: React.FC<RelatedProfilesProps> = ({
  relatedProfiles,
  onClick,
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        position: "relative",
        cursor: "pointer",
      }}
    >
      {[...relatedProfiles]
        .reverse()
        .map(({ name, surname, description, quote, bgColor }, idx) => {
          return (
            <div
              key={idx}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: bgColor,
                border: "3px solid #4ade80",
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                color: "white",
                position: "absolute",
                right: `${30 * (idx + 1)}px`,
              }}
              title={`${name} ${surname}`}
              onClick={() => {
                onClick?.({
                  name,
                  surname,
                  description,
                  quote,
                  bgColor,
                });
              }}
            >
              {surname ? (
                <>
                  <b>{name[0]?.toUpperCase()}</b>
                  <b>{surname[0]?.toUpperCase()}</b>
                </>
              ) : (
                <b>{name?.toUpperCase()}</b>
              )}
            </div>
          );
        })}
    </div>
  );
};
