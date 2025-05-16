import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

export function ChartProgress({ progress }: { progress: { finished_questions: number; total_questions: number } }) {

    //----------- chart data -------------
    const { finished_questions, total_questions } = progress
    const percentage = total_questions > 0 ? Math.round((finished_questions / total_questions) * 100) : 0 // faz o calculo da porcentagem
    const endAngle = finished_questions > 0 ? 90 + (360 * (percentage / 100)) : 450;
    const chartData = [{ progress: percentage, fill: "hsl(var(--chart-3))" }]

    const chartConfig = {
        progress: {
            label: "Progresso",
            color: "hsl(var(--chart-3))",
        },
    } satisfies ChartConfig;

    return (
        <ChartContainer config={chartConfig}>
            <RadialBarChart data={chartData} startAngle={90} endAngle={endAngle} innerRadius={70} outerRadius={100}>
                <PolarGrid
                    gridType="circle"
                    radialLines={false}
                    stroke="none"
                    className="first:fill-muted last:fill-background"
                />
                <RadialBar dataKey="progress" background cornerRadius={10} />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className="fill-foreground text-3xl font-bold"
                                        >
                                            {percentage}%
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + 20}
                                            className="fill-muted-foreground text-sm"
                                        >
                                            Progresso
                                        </tspan>
                                    </text>
                                )
                            }
                            return null
                        }}
                    />
                </PolarRadiusAxis>
            </RadialBarChart>
        </ChartContainer>
    )
}