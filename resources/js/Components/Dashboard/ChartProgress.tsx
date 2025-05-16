import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

export function ChartProgress({ progress }: { progress: { finished_questions: number; total_questions: number }}) {

    console.log(progress);
    //----------- chart data -------------
    const chartData = [{ visitors: 400, fill: "--primary-foreground" }]

    const chartConfig = {
        
    } satisfies ChartConfig;

    return (
        <ChartContainer config={chartConfig}>
            <RadialBarChart data={chartData} startAngle={0} endAngle={360} innerRadius={70} outerRadius={100}>
                <PolarGrid
                    gridType="circle"
                    radialLines={false}
                    stroke="none"
                    className="first:fill-muted last:fill-background"
                />
                <RadialBar dataKey="visitors" background cornerRadius={10} />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-4xl font-bold">
                                            {chartData[0].visitors.toLocaleString()}
                                        </tspan>
                                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                                            Visitors
                                        </tspan>
                                    </text>
                                )
                            }
                        }}
                    />
                </PolarRadiusAxis>
            </RadialBarChart>
        </ChartContainer>
    )
}